"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReviewerInfo {
  profilePhotoUrl: string;
  displayName: string;
}

interface Review {
  reviewId: string;
  reviewer: ReviewerInfo;
  starRating: number;
  comment: string;
  createTime: string;
  updateTime: string;
  reviewReply?: {
    comment: string;
    updateTime: string;
  };
}

interface GoogleReviewsProps {
  className?: string;
}

export default function GoogleReviews({ className }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);

  // Adjust reviews per view based on screen size
  const [reviewsPerView, setReviewsPerView] = useState(3);
  const autoplayInterval = 5000; // 5 seconds

  useEffect(() => {
    // Set reviews per view based on screen width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setReviewsPerView(1);
      } else if (window.innerWidth < 1024) {
        setReviewsPerView(2);
      } else {
        setReviewsPerView(3);
      }
    };

    // Initial call
    handleResize();

    // Set up listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Set a timeout to handle stalled fetch requests
        const timeoutPromise = new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Request timed out')), 10000)
        );
        
        // Actual fetch request
        const fetchPromise = fetch('https://featurable.com/api/v1/widgets/8f0d7719-eb0d-4780-b71c-2e09d25679ab');
        
        // Race between fetch and timeout
        const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const data = await response.json();
        
        // Sort by newest reviews first
        const sortedReviews = [...data.reviews].sort(
          (a, b) => new Date(b.createTime).getTime() - new Date(a.createTime).getTime()
        );
        
        // Process reviews to add fallback for profilePhotoUrl if needed
        const processedReviews = sortedReviews.map(review => ({
          ...review,
          reviewer: {
            ...review.reviewer,
            // Add a default profile photo as fallback
            profilePhotoUrl: review.reviewer.profilePhotoUrl || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(review.reviewer.displayName)
          }
        }));
        
        setReviews(processedReviews);
        setAverageRating(data.averageRating);
        setTotalReviews(data.totalReviewCount);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setError('Failed to load reviews. Please try again later.');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length <= reviewsPerView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= reviews.length ? 0 : nextIndex;
      });
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [reviews.length, reviewsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= reviews.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      return nextIndex < 0 ? reviews.length - 1 : nextIndex;
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    // Calculate time difference in days
    const diffTime = Math.abs(new Date().getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // If less than 30 days, show relative time
    if (diffDays < 30) {
      if (diffDays === 1) return "yesterday";
      if (diffDays < 7) return `${diffDays} days ago`;
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    }
    
    // Otherwise show formatted date
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Create a sliding window of reviews
  const visibleReviews = reviews.slice(
    currentIndex,
    currentIndex + reviewsPerView
  ).length < reviewsPerView
    ? [
        ...reviews.slice(currentIndex, reviews.length),
        ...reviews.slice(0, reviewsPerView - (reviews.length - currentIndex))
      ]
    : reviews.slice(currentIndex, currentIndex + reviewsPerView);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px] w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[300px] w-full">
        <div className="text-red-500 bg-red-50 p-4 rounded-lg">
          <p className="font-medium">Error loading reviews</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="max-w-full mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8">
          <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0">
            <div className="flex items-center mb-1">
              <div className="flex mr-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-lg font-bold">{averageRating.toFixed(1)}</span>
            </div>
            <p className="text-sm text-gray-600">Based on {totalReviews} Google reviews</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visibleReviews.map((review) => (
              <div 
                key={review.reviewId}
                className="flex flex-col justify-between bg-white p-5 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-100 flex-shrink-0">
                        <Image 
                          src={review.reviewer.profilePhotoUrl} 
                          alt={review.reviewer.displayName} 
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                          onError={(e) => {
                            // Fallback for image loading errors
                            const target = e.target as HTMLImageElement;
                            target.onerror = null; // Prevent infinite error loop
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.reviewer.displayName)}&background=random`;
                          }}
                          unoptimized // Important: Skip optimization for external URLs
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{review.reviewer.displayName}</p>
                        <p className="text-xs text-gray-500">{formatDate(review.createTime)}</p>
                      </div>
                    </div>
                    <div className="text-gray-400">
                      <Quote size={16} />
                    </div>
                  </div>

                  <div className="flex mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i}
                        className={cn(
                          "h-4 w-4", 
                          i < review.starRating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        )}
                      />
                    ))}
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 line-clamp-4 text-sm">{review.comment}</p>
                  </div>
                </div>

                <div className="absolute bottom-2 right-2">
                  <Image 
                    src="/logo.png" 
                    alt="Dhillon Dental Studio" 
                    width={20} 
                    height={20}
                    className="opacity-50"
                    unoptimized={false} // Use Next.js optimization for local images
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <a 
            href="https://search.google.com/local/writereview?placeid=ChIJb-TuXRdlGTkRAntdV8OBGv0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-md bg-[#062E2E] text-white hover:bg-primary/90 transition-colors font-medium text-sm"
          >
            Write a Review
            <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
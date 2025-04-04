export interface ServiceDetail {
    title: string;
    description: string;
    benefits: string[];
    solutions: string[];
    steps: string[];
    image: string;
  }
  
  export const serviceDetails: Record<string, ServiceDetail> = {
    'dental-implants': {
      title: 'Dental Implants',
      description:
        'A Dental Implant is a permanent solution for missing teeth, designed to function and look just like a natural tooth. It consists of a titanium post surgically placed in the jawbone, acting as an artificial root, topped with a custom-made crown. Unlike traditional bridges or dentures, implants integrate with the bone, preventing jawbone loss and ensuring long-term stability. They restore your ability to eat, speak, and smile with confidence while maintaining the health of surrounding teeth.',
      benefits: [
        '✅ Look & feel like natural teeth',
        '✅ Prevent bone loss & maintain jaw health',
        '✅ Improve speech & chewing ability',
        '✅ Last a lifetime with proper care',
      ],
      solutions: [
        'Single-Tooth & Multiple-Teeth Implants : Replace one or more missing teeth seamlessly.',
        'Full-Arch & All-on-4/6 Implants : Restore an entire set of teeth with minimal implants.',
      ],
      steps: [
        'Consultation & Planning – We assess your oral health & create a treatment plan.',
        'Implant Placement – The titanium post is placed in the jawbone.',
        'Healing & Restoration – After healing, a custom crown is placed for a perfect finish.',
      ],
      image: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'smile-makeover': {
      title: 'Smile Makeover with Veneers',
      description:
        'Veneers are ultra-thin, custom-made shells designed to cover the front surface of teeth, instantly improving their shape, size, and color. Made from porcelain or composite resin, veneers offer a natural-looking and long-lasting solution for chipped, stained, misaligned, or unevenly spaced teeth. They require minimal tooth preparation and are an excellent option for those seeking a flawless, radiant smile without extensive dental procedures.',
      benefits: [
        '✅ Instantly fix stained, chipped, or uneven teeth',
        '✅ Close small gaps without braces',
        '✅ Ultra-thin & natural-looking',
        '✅ Long-lasting with proper care',
      ],
      solutions: [
        'Whiter & Brighter Teeth – Say goodbye to deep stains that whitening can’t remove.',
        'Perfectly Shaped Teeth – Fix irregular, short, or worn-down teeth instantly.',
        'Confidence Boost – A radiant smile enhances your overall appearance and self-esteem.',
      ],
      steps: [
        'Consultation & Smile Design – We assess your smile and plan the perfect look.',
        'Minimal Tooth Preparation – A thin layer is removed to fit the veneers.',
        'Custom Veneer Placement – High-quality, natural-looking veneers are bonded for a stunning smile.',
      ],
      image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'braces-aligners': {
      title: 'Braces & Aligners',
      description:
        'Braces and aligners are effective solutions for straightening teeth, improving bite function, and enhancing your smile. Whether you choose traditional braces or clear aligners, these treatments gradually shift your teeth for a healthier, more confident smile.',
      benefits: [
        '✅ Straighten teeth & improve bite',
        '✅ Enhance speech & chewing ability',
        '✅ Discreet & effective treatment options',
        '✅ Long-term oral health benefits',
      ],
      solutions: [
        'Metal Braces – Durable and effective for all cases.',
        'Clear Aligners – Nearly invisible, comfortable, and removable.',
        'Ceramic & Lingual Braces – Aesthetic alternatives for a seamless look.',
      ],
      steps: [
        'From consultation to the final result, we guide you every step of the way, ensuring a comfortable and successful journey toward your perfect smile.',
      ],
      image: 'https://images.unsplash.com/photo-1695275884195-70381520643d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'teeth-whitening': {
      title: 'Teeth Whitening',
      description:
        'Teeth whitening is a quick and effective way to brighten your smile by removing stains and discoloration. Professional whitening treatments deliver safe, long-lasting results, restoring the natural brilliance of your teeth and boosting your confidence.',
      benefits: [
        '✅ Removes stains & discoloration',
        '✅ Safe, fast, and effective treatment',
        '✅ Enhances smile brightness & confidence',
        '✅ Professional-grade, long-lasting results',
      ],
      solutions: [],
      steps: [
        'From consultation to a dazzling finish, we ensure a safe, comfortable, and customized whitening experience tailored to your needs.',
      ],
      image: 'https://images.unsplash.com/photo-1684607633080-df59e6874367?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'root-canal-treatment': {
      title: 'Root Canal Treatment',
      description:
        'Root canal treatment is a highly effective procedure designed to save damaged or infected teeth. By removing the infected pulp and sealing the tooth, this treatment restores function, relieves pain, and prevents further complications, helping you maintain a healthy smile.',
      benefits: [
        '✅ Relieves pain & eliminates infection',
        '✅ Saves natural teeth from extraction',
        '✅ Restores tooth function & strength',
        '✅ Long-term protection for oral health',
      ],
      solutions: [
        'Single-Visit Root Canal – Quick and efficient treatment for mild cases.',
        'Multi-Visit Root Canal – Comprehensive care for complex infections.',
        'Retreatment & Repairs – Solutions for previously treated teeth.',
      ],
      steps: [
        'From diagnosis to recovery, we ensure a comfortable, stress-free experience with advanced techniques and expert care.',
      ],
      image: 'https://plus.unsplash.com/premium_photo-1674575270991-653fb6bfc1bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'full-mouth-rehabilitation': {
      title: 'Full Mouth Rehabilitation',
      description:
        'Full mouth rehabilitation is a comprehensive dental treatment designed to restore function, health, and aesthetics to your smile. By combining restorative and cosmetic procedures, this treatment helps rebuild damaged teeth, improve bite alignment, and enhance overall oral health.',
      benefits: [
        '✅ Restores damaged or missing teeth',
        '✅ Improves bite function & jaw alignment',
        '✅ Enhances aesthetics for a confident smile',
        '✅ Customized treatment for long-term oral health',
      ],
      solutions: [
        'Dental Crowns & Bridges – Strengthen and replace damaged or missing teeth.',
        'Dental Implants – Permanent solutions for missing teeth.',
        'Veneers & Bonding – Enhance the appearance of your smile.',
        'Orthodontics & Bite Correction – Improve jaw function and alignment.',
      ],
      steps: [
        'From consultation to final results, we create a tailored treatment plan to restore your smile with precision and care.',
      ],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'crowns-bridges': {
      title: 'Crowns & Bridges',
      description:
        'Crowns and bridges are reliable dental solutions for restoring damaged or missing teeth. These restorations improve the strength, function, and appearance of your smile while preventing further dental issues.',
      benefits: [
        '✅ Restore damaged or missing teeth',
        '✅ Improve chewing and speech function',
        '✅ Enhance smile aesthetics & confidence',
        '✅ Long-lasting and durable solutions',
      ],
      solutions: [
        'Dental Crowns – Protect and strengthen weak or damaged teeth.',
        'Dental Bridges – Replace one or more missing teeth seamlessly.',
        'Custom-Made Restorations – Designed for a perfect fit and natural look.',
      ],
      steps: [
        'From consultation to placement, we ensure a comfortable and precise treatment process for a fully restored, beautiful smile.',
      ],
      image: '/crowns-bridges.jpg',
    },
  
    'teeth-extractions': {
      title: 'Teeth Extractions',
      description:
        'Tooth extractions are sometimes necessary to protect your oral health and prevent further complications. Whether due to decay, damage, or overcrowding, our gentle extraction procedures ensure a smooth and painless experience.',
      benefits: [
        '✅ Severe tooth decay or damage',
        '✅ Impacted or overcrowded teeth',
        '✅ Advanced gum disease complications',
        '✅ Preparation for orthodontic treatment',
      ],
      solutions: [
        'Simple Extractions – Quick and painless removal of visible teeth.',
        'Surgical Extractions – For impacted or complex cases, including wisdom teeth.',
        'Tooth Replacement Options – Implants or bridges to restore your smile post-extraction.',
      ],
      steps: [
        'With advanced techniques and expert care, we ensure a comfortable experience and a smooth recovery process.',
      ],
      image: 'https://images.unsplash.com/photo-1606811842243-af7e16970c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'pediatric-dentistry': {
      title: 'Pediatric Dentistry',
      description:
        'A pediatric dentist specializes in providing gentle and comprehensive dental care for children, ensuring a positive experience while promoting lifelong oral health. From routine check-ups to preventive treatments, we make dental visits fun, comfortable, and educational for kids.',
      benefits: [
        '✅ Gentle, child-friendly approach to dentistry',
        '✅ Prevents cavities & promotes healthy teeth development',
        '✅ Early detection of dental issues',
        '✅ Creates a positive dental experience for kids',
      ],
      solutions: [
        'Routine Check-Ups & Cleanings – Ensuring healthy teeth and gums.',
        'Fluoride Treatments & Sealants – Preventing cavities and strengthening enamel.',
        'Gentle Fillings & Restorations – Treating cavities with a kid-friendly approach.',
        'Orthodontic Evaluation – Early assessment for proper teeth alignment.',
      ],
      steps: [
        'We create a welcoming environment where kids feel comfortable, making dental visits enjoyable and fear-free.',
      ],
      image: 'https://images.unsplash.com/photo-1653508310895-62141575a3a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
  
  };
  
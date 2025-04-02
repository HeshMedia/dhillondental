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
        'A Dental Implant is a permanent solution for missing teeth, designed to function and look just like a natural tooth. It consists of a titanium post surgically placed in the jawbone, acting as an artificial root, topped with a custom-made crown. Unlike traditional bridges or dentures, implants integrate with the bone, preventing jawbone loss and ensuring long-term stability. They restore your ability to eat, speak, and smile with confidence while maintaining the health of surrounding teeth. Dental Implants are one of the most advanced, reliable, and aesthetically pleasing options available in modern dentistry. With the ability to mimic natural tooth roots and withstand years of use, they’re a life-changing investment in oral health and quality of life.',
      benefits: [
        'Look & feel like natural teeth',
        'Prevent bone loss & maintain jaw health',
        'Improve speech & chewing ability',
        'Last a lifetime with proper care',
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
        'Veneers are ultra-thin, custom-made shells designed to cover the front surface of teeth, instantly improving their shape, size, and color. Made from porcelain or composite resin, veneers offer a natural-looking and long-lasting solution for chipped, stained, misaligned, or unevenly spaced teeth. They require minimal tooth preparation and are an excellent option for those seeking a flawless, radiant smile without extensive dental procedures. At Dhillon Dental Studio, we combine advanced techniques with artistic precision to deliver smile makeovers that truly transform.',
      benefits: [
        'Instantly fix stained, chipped, or uneven teeth',
        'Close small gaps without braces',
        'Ultra-thin & natural-looking veneers',
        'Long-lasting with proper care and maintenance',
      ],
      solutions: [
        'Porcelain veneers for durability and natural translucency',
        'Composite resin veneers as a cost-effective option',
        'Smile design tailored to individual facial aesthetics',
      ],
      steps: [
        'Consultation & Smile Design – We assess your smile and plan the perfect look.',
        'Minimal Tooth Preparation – A thin layer is removed to fit the veneers.',
        'Custom Veneer Placement – High-quality, natural-looking veneers are bonded for a stunning smile.',
        'Whiter & Brighter Teeth – Say goodbye to deep stains that whitening can’t remove.',
        'Perfectly Shaped Teeth – Fix irregular, short, or worn-down teeth instantly.',
        'Confidence Boost – A radiant smile enhances your overall appearance and self-esteem.',
      ],
      image: 'https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'braces-aligners': {
      title: 'Braces & Aligners',
      description:
        'Braces and aligners are specialized orthodontic treatments designed to correct misaligned teeth, bite issues, and jaw irregularities. Traditional metal braces use brackets and wires to gradually shift teeth, while clear aligners like Invisalign offer a more discreet, comfortable, and removable alternative. Whether you’re a teenager needing orthodontic correction or an adult looking for a subtle solution, we provide options tailored to your lifestyle. These treatments not only improve the appearance of your smile but also contribute to better oral hygiene, bite function, and overall dental health. With consistent use and periodic adjustments, both braces and aligners yield remarkable and lasting results.',
      benefits: [
        'Corrects crooked teeth and bite issues (overbite, underbite)',
        'Improves oral hygiene by making cleaning easier',
        'Reduces risk of dental problems related to misalignment',
        'Clear aligners are nearly invisible and removable',
      ],
      solutions: [
        'Metal and ceramic fixed braces',
        'Clear aligner therapy with Invisalign or similar brands',
      ],
      steps: [
        'Initial orthodontic assessment and imaging',
        'Customized treatment plan and fitting of appliances',
        'Regular monitoring and adjustments over treatment duration',
      ],
      image: 'https://images.unsplash.com/photo-1695275884195-70381520643d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'teeth-whitening': {
      title: 'Teeth Whitening',
      description:
        'Teeth whitening is a popular cosmetic dental procedure that lightens and brightens discolored or stained teeth. It’s a safe, non-invasive treatment that can dramatically improve the appearance of your smile in just a single visit. Discoloration can be caused by aging, consumption of coffee, tea, red wine, or smoking. Our professional-grade in-office whitening systems use advanced bleaching agents activated by specialized lights to deliver faster, more consistent results than over-the-counter products. For patients who prefer flexibility, we also offer custom take-home kits. A whiter smile not only boosts your self-confidence but also enhances your overall appearance.',
      benefits: [
        'Noticeable results after a single session',
        'Safe and supervised by professionals',
        'Boosts self-esteem and appearance',
        'Minimal sensitivity with proper technique',
      ],
      solutions: [
        'In-office laser-assisted whitening treatments',
        'Custom-made take-home trays with whitening gel',
      ],
      steps: [
        'Evaluation of tooth shade and eligibility',
        'Application of protective gel and whitening agent',
        'Light activation and final shade assessment',
      ],
      image: 'https://plus.unsplash.com/premium_photo-1674575272209-9fc8a133209f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'root-canal-treatment': {
      title: 'Root Canal Treatment',
      description:
        'Root Canal Treatment (RCT) is a highly effective dental procedure aimed at saving teeth that are severely decayed, infected, or damaged. Instead of extracting the affected tooth, the inner pulp and nerve tissue are carefully removed, the canals are disinfected, and the space is filled and sealed. This treatment eliminates pain, halts infection, and preserves the natural tooth structure. Following the procedure, a crown is often placed to restore the tooth’s strength and appearance. RCT not only prevents the need for tooth removal but also maintains chewing ability and alignment of surrounding teeth.',
      benefits: [
        'Eliminates pain caused by deep decay or infection',
        'Preserves natural teeth and jaw alignment',
        'Prevents further spread of infection',
        'Restores function and appearance of the tooth',
      ],
      solutions: [
        'Conventional root canal therapy for front and back teeth',
        'Microscopic and advanced endodontic treatments',
      ],
      steps: [
        'Examination and diagnostic imaging',
        'Removal of infected pulp tissue',
        'Cleaning and shaping of the root canals',
        'Filling and sealing the canals with biocompatible material',
        'Placement of a crown for protection and longevity',
      ],
      image: 'https://plus.unsplash.com/premium_photo-1674575270991-653fb6bfc1bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'full-mouth-rehabilitation': {
      title: 'Full Mouth Rehabilitation',
      description:
        'Full Mouth Rehabilitation is a comprehensive and customized dental treatment plan that addresses severe wear, decay, damage, or misalignment of all or most of the teeth. It combines restorative, cosmetic, and sometimes surgical procedures to rebuild a functional and aesthetically pleasing smile. Ideal for patients with complex dental issues or trauma, this approach restores oral health, improves speech and chewing, and enhances self-esteem. Using the latest technology, we create a step-by-step plan tailored to your unique needs and deliver a transformed smile that not only looks great but functions naturally.',
      benefits: [
        'Improves functionality of bite and jaw movement',
        'Enhances facial aesthetics and confidence',
        'Restores long-term oral health',
        'Customized treatment approach for complex cases',
      ],
      solutions: [
        'Crowns, bridges, and veneers for structural restoration',
        'Implants and dentures for missing teeth',
        'Orthodontics or TMJ therapy if needed',
      ],
      steps: [
        'Full mouth evaluation with X-rays and digital scans',
        'Treatment planning and simulation of final outcome',
        'Step-by-step execution of restorative procedures',
        'Ongoing maintenance and follow-ups',
      ],
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'crowns-bridges': {
      title: 'Crowns & Bridges',
      description:
        'Crowns and Bridges are fixed dental prosthetics used to restore the strength, function, and aesthetics of damaged or missing teeth. A crown, also known as a cap, is placed over a weakened or fractured tooth to protect and enhance it. A bridge consists of one or more artificial teeth anchored to adjacent natural teeth or implants. These restorations are custom-made from high-quality materials like porcelain, zirconia, or metal alloys to ensure durability and a natural appearance. Whether you’ve experienced trauma, decay, or tooth loss, crowns and bridges provide a reliable and beautiful solution.',
      benefits: [
        'Restores damaged or missing teeth effectively',
        'Improves bite function and speech clarity',
        'Blends seamlessly with natural teeth',
        'Long-lasting and low maintenance',
      ],
      solutions: [
        'Single tooth crowns for fractured or root canal-treated teeth',
        'Fixed bridges for one or more missing teeth',
      ],
      steps: [
        'Tooth preparation and impression taking',
        'Temporary restoration placement',
        'Custom fabrication of crown or bridge',
        'Permanent cementation and bite adjustment',
      ],
      image: '/crowns-bridges.jpg',
    },
  
    'teeth-extractions': {
      title: 'Teeth Extractions',
      description:
        'Tooth Extractions are procedures used to remove teeth that are beyond repair due to decay, trauma, infection, or crowding. Our skilled dental team ensures the process is safe, quick, and as comfortable as possible using local anesthesia and advanced techniques. In some cases, surgical extraction may be required for impacted teeth like wisdom teeth. We also provide detailed aftercare instructions to promote healing and reduce discomfort. Tooth extraction may be the first step toward additional restorative treatments such as implants or bridges for restoring function and aesthetics.',
      benefits: [
        'Relieves pain from infected or impacted teeth',
        'Prepares the mouth for orthodontic treatment',
        'Reduces risk of infection spreading',
        'Simple and surgical options available',
      ],
      solutions: [
        'Simple extractions for visible teeth',
        'Surgical extractions for impacted or broken teeth',
      ],
      steps: [
        'Clinical exam and imaging to assess the tooth',
        'Administration of local anesthesia',
        'Tooth removal using appropriate technique',
        'Post-extraction care and healing monitoring',
      ],
      image: 'https://images.unsplash.com/photo-1606811842243-af7e16970c1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  
    'pediatric-dentistry': {
      title: 'Pediatric Dentistry',
      description:
        'Pediatric Dentistry focuses on the oral health of children from infancy through adolescence. It involves preventive and therapeutic dental care in a compassionate and child-friendly environment. Our pediatric specialists are trained to manage the unique needs of growing children, including baby tooth decay, thumb-sucking habits, and developmental issues. We emphasize education, early intervention, and a fun approach to dental visits to foster a lifetime of healthy oral habits. From the first tooth to the transition to permanent teeth, we ensure each visit is a positive and rewarding experience for your child.',
      benefits: [
        'Creates a foundation for lifelong dental health',
        'Specialized care tailored to children’s needs',
        'Prevents cavities and promotes healthy habits',
        'Comfortable, friendly, and engaging environment',
      ],
      solutions: [
        'Preventive care including cleanings and sealants',
        'Cavity treatments and space maintainers',
        'Early orthodontic evaluation and referrals',
      ],
      steps: [
        'Initial exam and risk assessment',
        'Cleaning and fluoride treatment',
        'Behavioral guidance and hygiene education',
        'Ongoing monitoring and preventive care plan',
      ],
      image: 'https://images.unsplash.com/photo-1653508310895-62141575a3a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  };
  
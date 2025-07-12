import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LazyImage } from './LazyImage';
import CTAButton from './CTAButton';

const ClientStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  const stories = [
    {
      id: 1,
      name: "Gyan & Ritu",
      location: "Creative Kids Room Design",
      testimonial: "The kids room design exceeded our expectations! Every corner is designed with safety and creativity in mind. The custom study desk with built-in storage and colorful LED lighting make it feel magical. What we saw in the 3D design is exactly what we got - a room that's both beautiful and perfect for our child.",
      image: "/lovable-uploads/testimonialsimages/429A3428 (1).webp"
    },
    {
      id: 2,
      name: "Nishant & Family",
      location: "Themed Kids Room Project",
      testimonial: "Our themed kids room was delivered exactly on time! The quality of materials used is exceptional - from the safe, non-toxic paints to the rounded furniture edges. Six months later, everything still looks perfect. The organized sections for toys, books, and clothes have made cleanup so much easier.",
      image: "/lovable-uploads/testimonialsimages/429A3431.webp"
    },
    {
      id: 3,
      name: "Manish & Family",
      location: "Functional Kids Room Design",
      testimonial: "The kids room design is brilliant! Height-adjustable furniture that grows with our child, safety features throughout, and a cozy reading nook they absolutely love. The team understood our needs perfectly and delivered without any hassle. Installation was quick and clean - exactly what busy parents need!",
      image: "/lovable-uploads/testimonialsimages/429A3436.webp"
    },
    {
      id: 4,
      name: "Savita Family",
      location: "Space-Saving Kids Room",
      testimonial: "The space-saving kids room design maximizes every corner! The clever storage solutions and multi-functional furniture make organization so easy. The vibrant colors and fun wall decals look amazing. Even after installation, the team helped us optimize the space. Such attention to detail is rare!",
      image: "/lovable-uploads/testimonialsimages/reviewer1.eaf0bd71f2cf10471cb7253b0b125df9.webp"
    },
    {
      id: 5,
      name: "Amrita & Shanshank",
      location: "Happy Parents in Bangalore",
      testimonial: "The pricing was transparent from start to finish - no hidden costs! Our kids room's craftsmanship is impeccable with perfect safety features and smooth finishes. The designer understood our child's needs perfectly and created a space that maximizes both fun and functionality. Highly recommended!",
      image: "/lovable-uploads/testimonialsimages/reviewer2.46a5814f1ec1bded67d5d2b1ce5f58bb.webp"
    },
    {
      id: 6,
      name: "Anand's Family",
      location: "Premium Kids Room Design",
      testimonial: "Our premium kids room with smart lighting and interactive features was delivered exactly as promised! Single point of contact made the process seamless. The attention to detail - from the custom built-ins to the educational wall panels - shows true craftsmanship. Delivered on time, which is exceptional!",
      image: "/lovable-uploads/testimonialsimages/reviewer3.9d801a979586ccd7db7ac745e8ffe596.webp"
    }
  ];

  // Responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(3);
      } else if (width >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(stories.length / slidesPerView);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(Math.max(0, Math.min(slideIndex, totalSlides - 1)));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Bangalore Kids Room Stories
          </h2>
          <p className="text-gray-600">
            Our clients share their custom kids room experiences with Creative Designs
          </p>
        </div>
        
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid gap-6"
                  style={{
                    gridTemplateColumns: `repeat(${slidesPerView}, 1fr)`,
                  }}
                >
                  {stories
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((story) => (
                      <Card key={story.id} className="overflow-hidden shadow-xl border-0 h-full">
                        <CardContent className="p-0 h-full">
                          <div className="relative h-full">
                            <LazyImage
                              src={story.image}
                              alt={`${story.name} testimonial`}
                              className="w-full aspect-square object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-end">
                              <div className="text-white p-4 md:p-6 w-full">
                                <h3 className="text-lg md:text-xl font-semibold mb-1">
                                  {story.name}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-300 mb-2 md:mb-3">
                                  {story.location}
                                </p>
                                <p className="text-white italic text-xs md:text-sm leading-relaxed">
                                  "{story.testimonial}"
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-red-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-12">
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default ClientStories;

import React from 'react';
import CTAButton from './CTAButton';
const GoogleReviews = () => {
  return <section className="px-6 bg-white py-[28px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          Google Reviews
        </h2>
        
        <div className="flex justify-center">
          <div className="elfsight-app-f238c939-f522-4fa5-ab66-3b052e5b46a7" data-elfsight-app-lazy></div>
          {/* Fallback content if widget doesn't load */}
          <div className="text-center text-gray-600 p-8">
            <p>⭐⭐⭐⭐⭐ Rated 4.8/5 on Google Reviews</p>
            <p className="mt-2">See our customer reviews on Google</p>
          </div>
        </div>
        
        <CTAButton />
      </div>
    </section>;
};
export default GoogleReviews;
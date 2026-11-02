import React, { useState, useEffect, useCallback } from 'react';
import { Star, User } from 'lucide-react';
import google from '../data/googleReviews.json';

const GOOGLE_REVIEWS_URL = 'https://share.google/eIMbn0PH99lK7K6qi';

// Group reviews into slides of 3
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const Stars = ({ rating }) => (
  <div className="flex gap-1 mb-5" role="img" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-[#4dd4ac] text-[#4dd4ac]' : 'text-gray-300'}`} aria-hidden="true" />
    ))}
  </div>
);

const Avatar = ({ photo }) => (
  photo ? (
    <img src={photo} alt="" width="40" height="40" loading="lazy" referrerPolicy="no-referrer" className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
  ) : (
    <div className="w-10 h-10 rounded-full bg-[#4dd4ac]/15 flex items-center justify-center flex-shrink-0">
      <User className="w-5 h-5 text-[#0f4f47]" strokeWidth={1.6} aria-hidden="true" />
    </div>
  )
);

const ReviewsSection = () => {
  const { reviews } = google;
  const reviewsUrl = google.mapsUrl || GOOGLE_REVIEWS_URL;
  const slides = chunk(reviews, 3);
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, [next, isPaused]);

  return (
    <section
      className="relative bg-gradient-to-b from-white via-[#f6faf8] to-white py-20 lg:py-24 overflow-hidden"
      aria-labelledby="reviews-heading"
      data-testid="reviews-section"
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, #0f4f47 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16 max-w-2xl mx-auto">
          <p className="text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-[#4dd4ac] mb-4">
            Travelers Love Us
          </p>
          <h2
            id="reviews-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f4f47] tracking-tight leading-[1.1]"
          >
            What Our Guests Say
          </h2>
        </div>

        {/* Slides */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-testid="reviews-slider"
        >
          <div
            key={current}
            className="flex flex-col md:flex-row md:justify-center gap-6 lg:gap-8 animate-review-fade"
          >
            {slides[current % slides.length].map((review, index) => (
              <article
                key={index}
                data-testid={`review-card-${current}-${index}`}
                className="md:flex-1 md:max-w-[calc((100%-4rem)/3)] bg-white border border-gray-100 rounded-2xl p-7 lg:p-8 shadow-[0_10px_30px_-15px_rgba(15,79,71,0.15)] hover:shadow-[0_20px_40px_-15px_rgba(15,79,71,0.22)] hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <Stars rating={review.rating || 5} />

                {review.title && (
                  <h3 className="text-lg md:text-xl font-bold text-[#0f4f47] mb-3 tracking-tight leading-snug">
                    &ldquo;{review.title}&rdquo;
                  </h3>
                )}

                <p className="text-[15px] text-gray-600 leading-relaxed font-light mb-6 flex-1 line-clamp-[8]">
                  {review.text}
                </p>

                {/* Footer */}
                <footer className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <Avatar photo={review.photo} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#0f4f47] truncate">
                      {review.authorUrl ? (
                        <a href={review.authorUrl} target="_blank" rel="noopener noreferrer">{review.author}</a>
                      ) : review.author}
                    </p>
                    <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                      {review.url ? (
                        <a href={review.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#0f4f47]" data-testid={`review-google-link-${index}`}>
                          Google review
                        </a>
                      ) : (
                        <>
                          <span className="text-base leading-none" aria-hidden="true">{review.flag}</span>
                          <span>{review.country}</span>
                        </>
                      )}
                    </p>
                  </div>
                </footer>
              </article>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="flex gap-2" role="tablist" aria-label="Review pages">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Go to review page ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  data-testid={`reviews-dot-${index}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'w-8 bg-[#4dd4ac]'
                      : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Read all on Google */}
          <div className="text-center mt-6">
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="reviews-google-link"
              aria-label="Read all reviews on Google – Green Continent Tours Business Profile"
              className="inline-flex items-center gap-1.5 text-xs text-[#0f4f47] hover:text-[#1a6b5f] font-semibold tracking-wide transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              {google.rating ? `Rated ${google.rating.toFixed(1)} on Google · Read all ${google.count} reviews` : 'Read all reviews on Google'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

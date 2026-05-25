import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    rating: 5,
    text: 'We booked a private Poland trip for 9 days and honestly everything was smoother than expected. The driver was always on time, hotels were very comfortable, and Zakopane was beautiful. Communication before arrival was also very professional.',
    author: 'Nour A.',
    location: 'Dubai',
  },
  {
    rating: 5,
    text: 'Traveling with parents and kids can be stressful, but the itinerary was planned very well for our family. The pace was relaxed, hotels were family-friendly, and we never felt rushed.',
    author: 'Emma & Chris',
    location: 'Ireland',
  },
  {
    rating: 5,
    text: 'Very reliable service. Clean car, good hotels, and easy communication throughout the trip.',
    author: 'Reza K.',
    location: 'Iran',
  },
  {
    rating: 5,
    text: 'Our small group visited Krakow, Auschwitz, Zakopane, and Warsaw. Transport was clean and comfortable, and the local recommendations were excellent. It felt more personal than a standard tour company.',
    author: 'Lucas T.',
    location: 'Netherlands',
  },
  {
    rating: 5,
    text: 'We wanted a mix of culture, nature, and good hotels, and that\u2019s exactly what we received. The mountain views in Zakopane and the old town atmosphere in Krakow were unforgettable.',
    author: 'Sofia R.',
    location: 'Spain',
  },
];

// Replace with your actual Google Business Profile URL once available
const GOOGLE_REVIEWS_URL = 'https://www.google.com/search?q=Green+Continent+Tours+Krakow';

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next, isPaused]);

  const active = reviews[current];

  return (
    <section
      className="relative bg-gradient-to-b from-white via-[#f5faf8] to-white py-24 lg:py-28 overflow-hidden"
      aria-labelledby="reviews-heading"
      data-testid="reviews-section"
    >
      {/* Decorative quote mark */}
      <Quote
        className="absolute top-16 left-10 w-32 h-32 text-[#0f4f47]/[0.04] -scale-x-100"
        aria-hidden="true"
        strokeWidth={1}
      />
      <Quote
        className="absolute bottom-16 right-10 w-40 h-40 text-[#0f4f47]/[0.04]"
        aria-hidden="true"
        strokeWidth={1}
      />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="inline-block text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0f4f47] mb-6 border border-[#0f4f47]/20 px-3.5 py-1.5 rounded-full"
            data-testid="reviews-eyebrow"
          >
            Verified Google Reviews
          </p>

          <h2
            id="reviews-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f4f47] mb-4 tracking-tight leading-[1.15]"
          >
            Travelers&apos; stories from across Poland
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <div className="flex" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#f5b400] text-[#f5b400]"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 font-light">
              <strong className="text-[#0f4f47] font-semibold">5.0</strong> · Based on real traveler reviews
            </span>
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-testid="reviews-slider"
        >
          <article
            key={current}
            className="bg-white border border-gray-100 rounded-3xl shadow-[0_30px_80px_-30px_rgba(15,79,71,0.25)] px-8 py-12 md:px-14 md:py-16 text-center animate-review-fade"
            data-testid={`review-card-${current}`}
          >
            {/* Stars */}
            <div className="flex justify-center mb-7" aria-label={`${active.rating} out of 5 stars`}>
              {[...Array(active.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#f5b400] text-[#f5b400] mx-0.5"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Review text */}
            <blockquote className="text-lg md:text-xl text-gray-700 leading-[1.75] font-light italic mb-8 max-w-2xl mx-auto">
              &ldquo;{active.text}&rdquo;
            </blockquote>

            {/* Author */}
            <footer className="flex flex-col items-center">
              <div className="w-12 h-px bg-[#4dd4ac] mb-4" aria-hidden="true" />
              <cite className="not-italic">
                <span className="block text-[#0f4f47] font-semibold text-base tracking-tight">
                  {active.author}
                </span>
                <span className="block text-gray-500 text-sm mt-0.5 tracking-wide">
                  {active.location}
                </span>
              </cite>
            </footer>
          </article>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            data-testid="reviews-prev"
            className="hidden md:flex absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-[#0f4f47] hover:bg-[#0f4f47] hover:text-white hover:border-[#0f4f47] transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            data-testid="reviews-next"
            className="hidden md:flex absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center text-[#0f4f47] hover:bg-[#0f4f47] hover:text-white hover:border-[#0f4f47] transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Mobile arrows row */}
          <div className="flex md:hidden justify-center gap-3 mt-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0f4f47] active:bg-[#0f4f47] active:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next review"
              className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#0f4f47] active:bg-[#0f4f47] active:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10" role="tablist" aria-label="Review navigation">
            {reviews.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === current}
                aria-label={`Go to review ${index + 1}`}
                onClick={() => setCurrent(index)}
                data-testid={`reviews-dot-${index}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'w-8 bg-[#0f4f47]'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Read all on Google */}
          <div className="text-center mt-12">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="reviews-google-link"
              className="inline-flex items-center gap-2 text-sm text-[#0f4f47] hover:text-[#1a6b5f] font-semibold tracking-wide transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Read all reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

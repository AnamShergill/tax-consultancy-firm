'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';

export default function HeroCarousel() {
  const t = useTranslations('hero');
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Bootstrap carousel with auto-slide
    const initCarousel = async () => {
      if (typeof window !== 'undefined' && carouselRef.current) {
        // Dynamically import Bootstrap
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        
        // Initialize carousel with options
        const carouselElement = carouselRef.current;
        const carousel = new (bootstrap as any).Carousel(carouselElement, {
          interval: 3000, // 3 seconds
          ride: 'carousel',
          pause: 'hover',
          wrap: true,
          touch: true
        });

        // Start cycling
        carousel.cycle();

        // Cleanup
        return () => {
          carousel.dispose();
        };
      }
    };

    initCarousel();
  }, []);

  return (
    <section id="home" className="p-0">
      <div 
        id="heroCarousel" 
        ref={carouselRef}
        className="carousel slide carousel-fade" 
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="hover"
      >
        <div className="carousel-indicators">
          <button 
            type="button" 
            data-bs-target="#heroCarousel" 
            data-bs-slide-to="0" 
            className="active" 
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button 
            type="button" 
            data-bs-target="#heroCarousel" 
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button 
            type="button" 
            data-bs-target="#heroCarousel" 
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active" data-bs-interval="3000">
            <div 
              className="hero-slide" 
              style={{
                backgroundImage: 'linear-gradient(rgba(91, 93, 95, 0.42), rgba(17, 18, 17, 0.88)), url(/images/hero1.jfif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-white text-center">
                    <h1 className="hero-title">
                      {t('slide1.title')}
                    </h1>
                    <p className="hero-subtitle">
                      {t('slide1.subtitle')}
                    </p>
                    <a href="#contact" className="btn btn-hero btn-lg">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="3000">
            <div 
              className="hero-slide" 
              style={{
                backgroundImage: 'linear-gradient(rgba(91, 93, 95, 0.42), rgba(17, 18, 17, 0.88)), url(/images/hero2.jfif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-white text-center">
                    <h1 className="hero-title">
                      {t('slide2.title')}
                    </h1>
                    <p className="hero-subtitle">
                      {t('slide2.subtitle')}
                    </p>
                    <a href="#services" className="btn btn-hero btn-lg">
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item" data-bs-interval="3000">
            <div 
              className="hero-slide" 
              style={{
                backgroundImage: 'linear-gradient(rgba(91, 93, 95, 0.42), rgba(17, 18, 17, 0.88)), url(/images/hero3.jfif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-white text-center">
                    <h1 className="hero-title">
                      {t('slide3.title')}
                    </h1>
                    <p className="hero-subtitle">
                      {t('slide3.subtitle')}
                    </p>
                    <a href="#about" className="btn btn-hero btn-lg">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

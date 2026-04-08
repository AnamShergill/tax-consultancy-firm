'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function HeroCarousel() {
  const t = useTranslations('hero');
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect - slower and more premium
  useEffect(() => {
    const texts = [
      t('slide1.title'),
      t('slide2.title'),
      t('slide3.title')
    ];
    
    const currentText = texts[activeSlide];
    let currentIndex = 0;
    let typingInterval: NodeJS.Timeout;
    
    setDisplayedText('');
    setIsTyping(true);

    // Add initial delay before starting typewriter (500ms for luxurious feel)
    const initialDelay = setTimeout(() => {
      typingInterval = setInterval(() => {
        if (currentIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 100); // 100ms per character for slower, more premium feel
    }, 500);

    return () => {
      clearTimeout(initialDelay);
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [activeSlide, t]);

  useEffect(() => {
    // Initialize Bootstrap carousel
    const initCarousel = async () => {
      if (typeof window !== 'undefined' && carouselRef.current) {
        const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        
        const carouselElement = carouselRef.current;
        const carousel = new (bootstrap as any).Carousel(carouselElement, {
          interval: 5000, // 8 seconds to allow full typewriter animation
          ride: 'carousel',
          pause: 'hover',
          wrap: true,
          touch: true
        });

        // Track slide changes
        carouselElement.addEventListener('slide.bs.carousel', (e: any) => {
          setActiveSlide(e.to);
        });

        carousel.cycle();

        return () => {
          carousel.dispose();
        };
      }
    };

    initCarousel();
  }, []);

  const getSubtitle = () => {
    const subtitles = [
      t('slide1.subtitle'),
      t('slide2.subtitle'),
      t('slide3.subtitle')
    ];
    return subtitles[activeSlide];
  };

  const getButtonText = () => {
    const buttons = ['Get Started', 'Our Services', 'Learn More'];
    return buttons[activeSlide];
  };

  const getButtonLink = () => {
    const links = ['#contact', '#services', '#about'];
    return links[activeSlide];
  };

  return (
    <section id="home" className="p-0">
      <div 
        id="heroCarousel" 
        ref={carouselRef}
        className="carousel slide carousel-fade" 
        data-bs-ride="carousel"
        data-bs-interval="5000"
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
          <div className="carousel-item active" data-bs-interval="8000">
            <div 
              className="hero-slide hero-slide-zoom" 
              style={{
                backgroundImage: 'url(/images/hero1.jfif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Simple semi-transparent overlay */}
              <div className="hero-overlay-simple"></div>
              
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-white text-center">
                    <h1 className="hero-title">
                      {displayedText}
                      <span className={`typewriter-cursor ${isTyping ? 'blinking' : 'hidden'}`}>|</span>
                    </h1>
                    <p className={`hero-subtitle ${!isTyping ? 'hero-subtitle-visible' : ''}`}>
                      {getSubtitle()}
                    </p>
                    <a 
                      href={getButtonLink()} 
                      className={`btn btn-hero btn-lg ${!isTyping ? 'hero-button-visible' : ''}`}
                    >
                      {getButtonText()}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item" data-bs-interval="8000">
            <div 
              className="hero-slide hero-slide-zoom" 
              style={{
                backgroundImage: 'url(/images/hero2.jfif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Simple semi-transparent overlay */}
              <div className="hero-overlay-simple"></div>
              
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-white text-center">
                    <h1 className="hero-title">
                      {displayedText}
                      <span className={`typewriter-cursor ${isTyping ? 'blinking' : 'hidden'}`}>|</span>
                    </h1>
                    <p className={`hero-subtitle ${!isTyping ? 'hero-subtitle-visible' : ''}`}>
                      {getSubtitle()}
                    </p>
                    <a 
                      href={getButtonLink()} 
                      className={`btn btn-hero btn-lg ${!isTyping ? 'hero-button-visible' : ''}`}
                    >
                      {getButtonText()}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item" data-bs-interval="8000">
            <div 
              className="hero-slide hero-slide-zoom" 
              style={{
                backgroundImage: 'url(/images/hero3.jfif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Simple semi-transparent overlay */}
              <div className="hero-overlay-simple"></div>
              
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10 text-white text-center">
                    <h1 className="hero-title">
                      {displayedText}
                      <span className={`typewriter-cursor ${isTyping ? 'blinking' : 'hidden'}`}>|</span>
                    </h1>
                    <p className={`hero-subtitle ${!isTyping ? 'hero-subtitle-visible' : ''}`}>
                      {getSubtitle()}
                    </p>
                    <a 
                      href={getButtonLink()} 
                      className={`btn btn-hero btn-lg ${!isTyping ? 'hero-button-visible' : ''}`}
                    >
                      {getButtonText()}
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

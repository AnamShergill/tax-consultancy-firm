'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState, useRef } from 'react';

export default function About() {
  const t = useTranslations('about');
  const [counters, setCounters] = useState({ years: 0, clients: 0, projects: 0, success: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const targets = { years: 15, clients: 500, projects: 1200, success: 98 };
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
        success: Math.floor(targets.success * progress),
      });

      if (currentStep >= steps) {
        setCounters(targets);
        clearInterval(interval);
      }
    }, stepDuration);
  };

  return (
    <section id="about" className="bg-light" style={{ marginTop: '60px', marginBottom: '60px', overflow: 'hidden', maxWidth: '100vw', width: '100%' }} ref={sectionRef}>
      <div className="container" style={{ maxWidth: '100%', overflow: 'hidden', paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="section-title" data-aos="fade-up">
          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '15px' }}>
            <span style={{ color: '#0d6efd' }}>About</span>{' '}
            <span style={{ color: '#198754' }}>Us</span>
          </h2>
          <div 
            style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(135deg, #0d6efd 0%, #198754 100%)',
              margin: '0 auto 15px'
            }}
          ></div>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{t('subtitle')}</p>
        </div>
        
        {/* Counter Stats */}
        <div className="row text-center mb-5" data-aos="fade-up" data-aos-delay="200" style={{ margin: 0, overflow: 'hidden' }}>
          <div className="col-6 col-md-3 mb-4">
            <div className="counter-box">
              <h2 className="counter-number" style={{ color: '#0d6efd', fontWeight: '800', fontSize: '3rem' }}>
                {counters.years}+
              </h2>
              <p style={{ color: '#6c757d', fontWeight: '600' }}>Years Experience</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="counter-box">
              <h2 className="counter-number" style={{ color: '#198754', fontWeight: '800', fontSize: '3rem' }}>
                {counters.clients}+
              </h2>
              <p style={{ color: '#6c757d', fontWeight: '600' }}>Happy Clients</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="counter-box">
              <h2 className="counter-number" style={{ color: '#0d6efd', fontWeight: '800', fontSize: '3rem' }}>
                {counters.projects}+
              </h2>
              <p style={{ color: '#6c757d', fontWeight: '600' }}>Projects Completed</p>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="counter-box">
              <h2 className="counter-number" style={{ color: '#198754', fontWeight: '800', fontSize: '3rem' }}>
                {counters.success}%
              </h2>
              <p style={{ color: '#6c757d', fontWeight: '600' }}>Success Rate</p>
            </div>
          </div>
        </div>

        <div className="row align-items-center" style={{ margin: 0, overflow: 'hidden' }}>
         <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
  <div className="about-image">
    <div 
      className="about-img-box"
      style={{
        backgroundImage: "url('/images/about.webp')",
        height: '400px',
        borderRadius: '15px',
        border: '8px solid #2c61d6ff',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
      }}
    />
  </div>
</div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-content">
              <p className="lead mb-4">{t('description')}</p>
              <p className="mb-4">{t('description2')}</p>
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div 
                        className="text-white rounded-circle d-flex align-items-center justify-content-center" 
                        style={{ 
                          width: '60px', 
                          height: '60px',
                          background: 'linear-gradient(135deg, #0d6efd 0%, #198754 100%)'
                        }}
                      >
                        <span className="fs-4">✓</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0">Expert Team</h5>
                      <p className="text-muted mb-0">Certified Professionals</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div 
                        className="text-white rounded-circle d-flex align-items-center justify-content-center" 
                        style={{ 
                          width: '60px', 
                          height: '60px',
                          background: 'linear-gradient(135deg, #198754 0%, #0d6efd 100%)'
                        }}
                      >
                        <span className="fs-4">★</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0">Trusted Service</h5>
                      <p className="text-muted mb-0">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

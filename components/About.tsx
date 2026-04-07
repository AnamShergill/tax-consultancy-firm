'use client';

import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="bg-light" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <div className="container">
        <div className="section-title">
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>
        <div className="row align-items-center">
         <div className="col-lg-6 mb-4 mb-lg-0">
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
          <div className="col-lg-6">
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

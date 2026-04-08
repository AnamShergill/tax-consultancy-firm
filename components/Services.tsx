'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Services() {
  const t = useTranslations('services');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (key: string) => {
    setExpandedService(expandedService === key ? null : key);
  };

  const serviceDetails: { [key: string]: string } = {
    incomeTax: 'Our income tax services include comprehensive tax planning, preparation, and filing for individuals and businesses. We help you understand complex tax laws, identify deductions, and ensure compliance with all regulations. Our experts work year-round to minimize your tax liability and maximize your refunds.',
    gst: 'We provide end-to-end GST services including registration, return filing, compliance management, and advisory. Our team helps you navigate GST regulations, claim input tax credits, handle audits, and ensure timely compliance. We also assist with GST refunds and dispute resolution.',
    audit: 'Our audit services ensure financial transparency and compliance. We conduct statutory audits, internal audits, tax audits, and special audits. Our thorough examination of financial records helps identify risks, improve controls, and provide assurance to stakeholders about the accuracy of financial statements.',
    tds: 'We handle all aspects of TDS compliance including calculation, deduction, payment, and return filing. Our services cover TDS on salaries, payments to contractors, professional fees, and other transactions. We ensure timely compliance and help you avoid penalties and interest charges.',
    company: 'We assist with complete company incorporation services including name reservation, documentation, registration with ROC, and obtaining necessary licenses. Our services cover private limited companies, LLPs, partnerships, and sole proprietorships. We handle all legal formalities efficiently.',
    itr: 'Our ITR filing services ensure accurate and timely submission of income tax returns. We handle all ITR forms, verify documents, optimize deductions, and ensure maximum refunds. Our experts stay updated with latest tax laws and e-filing procedures to provide hassle-free service.',
    accounting: 'We offer comprehensive accounting services including bookkeeping, financial statement preparation, payroll processing, and management reporting. Our team uses modern accounting software to maintain accurate records, ensure compliance, and provide insights for better business decisions.',
    planning: 'Strategic tax planning helps you legally minimize tax liabilities and optimize your financial position. We analyze your income sources, investments, and expenses to create customized tax-saving strategies. Our planning covers short-term and long-term goals to maximize your wealth.'
  };

  const services = [
    { 
      key: 'incomeTax', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      )
    },
    { 
      key: 'gst', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
          <path d="M16 8h-4"/>
        </svg>
      )
    },
    { 
      key: 'audit', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
          <path d="M11 8v6"/>
          <path d="M8 11h6"/>
        </svg>
      )
    },
    { 
      key: 'tds', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          <line x1="12" y1="11" x2="12" y2="17"/>
          <line x1="9" y1="14" x2="15" y2="14"/>
        </svg>
      )
    },
    { 
      key: 'company', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
          <line x1="15" y1="21" x2="15" y2="9"/>
        </svg>
      )
    },
    { 
      key: 'itr', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
          <line x1="12" y1="12" x2="12" y2="18"/>
        </svg>
      )
    },
    { 
      key: 'accounting', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <rect x="6" y="7" width="4" height="4"/>
          <rect x="14" y="7" width="4" height="4"/>
        </svg>
      )
    },
    { 
      key: 'planning', 
      icon: (
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="20" x2="12" y2="10"/>
          <line x1="18" y1="20" x2="18" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="p-0" style={{ position: 'relative', overflow: 'hidden', marginTop: '60px', marginBottom: '60px', maxWidth: '100vw', width: '100%' }}>
      <div style={{ position: 'relative', minHeight: '800px', overflow: 'hidden', maxWidth: '100vw', width: '100%' }}>
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(135deg, #8bc34a 0%, #7cb342 100%)',
            clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
            zIndex: 1,
            maxWidth: '100%'
          }}
        ></div>
        
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #0a4275 0%, #083a63 100%)',
            zIndex: 0,
            maxWidth: '100%'
          }}
        ></div>

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '80px', paddingBottom: '80px', maxWidth: '100%', overflow: 'hidden', paddingLeft: '15px', paddingRight: '15px' }}>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold mb-3" style={{ fontSize: '3rem' }}>
              <span style={{ color: '#0951d7ff' }}>Our</span>{' '}
              <span style={{ color: '#fff' }}>Services</span>
            </h2>
            <div 
              style={{
                width: '80px',
                height: '3px',
                background: 'linear-gradient(135deg, #8bc34a 0%, #fff 100%)',
                margin: '0 auto'
              }}
            ></div>
          </div>

          <div className="row g-4 mt-4" style={{ maxWidth: '100%', margin: 0, overflow: 'hidden' }}>
            {services.map((service, index) => (
              <div key={service.key} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div 
                  className="service-card-animated text-center p-4"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    minHeight: expandedService === service.key ? 'auto' : '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div>
                    <div 
                      className="service-icon mb-3" 
                      style={{ 
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      {service.icon}
                    </div>
                    <h5 className="text-white fw-bold mb-3 text-uppercase" style={{ fontSize: '1.1rem', letterSpacing: '1px' }}>
                      {t(`${service.key}.title`)}
                    </h5>
                    <p className="text-white mb-4" style={{ fontSize: '0.9rem', opacity: 0.9, lineHeight: '1.6' }}>
                      {t(`${service.key}.description`)}
                    </p>
                    
                    {expandedService === service.key && (
                      <div 
                        className="expanded-content"
                        style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          padding: '15px',
                          borderRadius: '8px',
                          marginBottom: '20px',
                          animation: 'fadeIn 0.3s ease-in'
                        }}
                      >
                        <p className="text-white mb-0" style={{ fontSize: '0.85rem', lineHeight: '1.6', textAlign: 'left' }}>
                          {serviceDetails[service.key]}
                        </p>
                      </div>
                    )}
                  </div>
                  <button 
                    className="btn btn-light w-100"
                    onClick={() => toggleService(service.key)}
                    style={{
                      borderRadius: '5px',
                      padding: '10px',
                      fontWeight: '600',
                      color: '#8bc34a',
                      border: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#8bc34a';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#fff';
                      e.currentTarget.style.color = '#8bc34a';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {expandedService === service.key ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

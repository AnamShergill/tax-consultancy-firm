'use client';

import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'Business Owner',
      text: 'Excellent service! They helped me with complete tax planning and saved significant amount on taxes. Highly professional team.',
      rating: 5
    },
    {
      name: 'Sarah Ali',
      role: 'Entrepreneur',
      text: 'Very knowledgeable and responsive. Made my company registration process smooth and hassle-free. Recommended!',
      rating: 5
    },
    {
      name: 'Imran Sheikh',
      role: 'Freelancer',
      text: 'Best tax consultants in Karachi. They handle all my ITR filing and GST compliance efficiently. Great experience!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="bg-light" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <div className="container">
        <div className="section-title">
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4">
              <div className="card h-100 shadow-sm" style={{ border: '3px solid #0d6efd', borderRadius: '10px' }}>
                <div className="card-body p-4">
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#8bc34a', fontSize: '1.5rem' }}>★</span>
                    ))}
                  </div>
                  <p className="card-text mb-4">"{testimonial.text}"</p>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div style={{ background: 'linear-gradient(135deg, #0d6efd 0%, #198754 100%)' }} className="text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                        <span className="fw-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

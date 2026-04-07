'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      {/* Contact Form Section with Background */}
      <section id="contact" className="contact-form-section p-0" style={{ marginTop: '60px' }}>
        <div 
          className="contact-form-wrapper"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 76, 147, 0.85), rgba(83, 112, 102, 0.85)), url(/images/contact.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '100px 0',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="text-center mb-5">
                  <h2 className="text-white fw-bold mb-3" style={{ fontSize: '3rem' }}>
                    REQUEST A CALL BACK
                  </h2>
                  <div 
                    style={{
                      width: '80px',
                      height: '3px',
                      background: '#ffc107',
                      margin: '0 auto'
                    }}
                  ></div>
                </div>
                <div className="contact-form-card">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder={t('name')}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{
                          padding: '15px 20px',
                          border: 'none',
                          borderRadius: '5px'
                        }}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder={t('email')}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        style={{
                          padding: '15px 20px',
                          border: 'none',
                          borderRadius: '5px'
                        }}
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        placeholder={t('phone')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        style={{
                          padding: '15px 20px',
                          border: 'none',
                          borderRadius: '5px'
                        }}
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="form-control form-control-lg"
                        rows={5}
                        placeholder={t('message')}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        style={{
                          padding: '15px 20px',
                          border: 'none',
                          borderRadius: '5px'
                        }}
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button 
                        type="submit" 
                        className="btn btn-lg px-5"
                        style={{
                          background: 'linear-gradient(135deg, #8bc34a 0%, #198754 100%)',
                          color: '#fff',
                          fontWeight: '700',
                          border: 'none',
                          borderRadius: '5px',
                          padding: '15px 60px',
                          fontSize: '1.1rem',
                          textTransform: 'uppercase',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 15px rgba(139, 195, 74, 0.4)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #7cb342 0%, #157347 100%)';
                          e.currentTarget.style.transform = 'translateY(-3px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 195, 74, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #8bc34a 0%, #198754 100%)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 195, 74, 0.4)';
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Contact Info Section */}
      <section className="contact-info-section" style={{ paddingTop: '80px', paddingBottom: '0', marginBottom: '60px' }}>
        <div className="row g-0">
          <div className="col-lg-6">
            <div className="contact-info-box p-5" style={{ background: '#f8f9fa', minHeight: '500px' }}>
              <h4 className="mb-4 fw-bold">{t('info')}</h4>
              <div className="mb-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      📍
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fw-bold">{t('address')}</h6>
                    <p className="text-muted mb-0">{t('addressText')}</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      📧
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fw-bold">Email</h6>
                    <p className="text-muted mb-0">info@taxconsultant.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      📞
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="fw-bold">Phone</h6>
                    <p className="text-muted mb-0">+92 300 1234567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828295469!2d66.59499374999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('faq');

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive tax and financial services including Income Tax, GST, Audit, TDS, Company Registration, ITR Filing, Accounting, and Tax Planning.'
    },
    {
      question: 'How can I file my income tax return?',
      answer: 'You can contact us with your financial documents, and our expert team will handle the complete ITR filing process for you with maximum refund optimization.'
    },
    {
      question: 'Do you provide GST registration services?',
      answer: 'Yes, we provide complete GST registration, filing, and compliance management services for businesses of all sizes.'
    },
    {
      question: 'What documents are required for company registration?',
      answer: 'Basic documents include ID proofs, address proofs, business plan, and MOA/AOA. Our team will guide you through the complete documentation process.'
    },
    {
      question: 'How long does the audit process take?',
      answer: 'The audit timeline depends on the size and complexity of your business. Typically, it takes 2-4 weeks for a standard audit.'
    },
    {
      question: 'Do you offer tax planning services?',
      answer: 'Yes, we provide strategic tax planning services to help you minimize tax liabilities legally while ensuring full compliance.'
    }
  ];

  return (
    <section id="faq" style={{ marginTop: '60px', marginBottom: '60px', position: 'relative', background: '#dce6e4ff', overflow: 'hidden', maxWidth: '100vw', width: '100%' }}>
      <div className="container" style={{ maxWidth: '100%', overflow: 'hidden', paddingLeft: '15px', paddingRight: '15px' }}>
        <div className="section-title" data-aos="fade-up">
          <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '15px' }}>
            <span style={{ color: '#0d6efd' }}>Frequently Asked</span>{' '}
            <span style={{ color: '#198754' }}>Questions</span>
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
        <div className="row justify-content-center" style={{ margin: 0, overflow: 'hidden' }}>
          <div className="col-lg-8" style={{ overflow: 'hidden' }}>
            <div className="accordion" id="faqAccordion" style={{ overflow: 'hidden', maxWidth: '100%' }}>
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item mb-3 border-0 shadow-sm" style={{ overflow: 'hidden', borderRadius: '8px' }} data-aos="fade-up" data-aos-delay={index * 100}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                      style={{
                        background: 'linear-gradient(135deg, #0d6efd 0%, #198754 100%)',
                        color: '#fff',
                        fontWeight: '600'
                      }}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`faq${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

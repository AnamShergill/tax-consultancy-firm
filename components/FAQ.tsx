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
    <section id="faq" style={{ marginTop: '60px', marginBottom: '60px', position: 'relative', background: '#dce6e4ff' }}>
      <div className="container">
        <div className="section-title">
          <h2>{t('title')}</h2>
          <p>{t('subtitle')}</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item mb-3 border-0 shadow-sm" style={{ overflow: 'hidden', borderRadius: '8px' }}>
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

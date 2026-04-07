'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const switchLocale = (newLocale: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarNav');
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    
    if (navbarCollapse?.classList.contains('show')) {
      navbarToggler?.click();
    }
  };

  return (
    <nav 
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, #0a4275 0%, #083a63 100%)' 
          : 'linear-gradient(135deg, rgba(146, 215, 67, 0.6) 0%, rgba(40, 121, 242, 0.54) 100%)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        padding: '15px 0'
      }}
    >
      <div className="container">
        <a 
          className="navbar-brand fw-bold" 
          href={`/${locale}`}
          style={{
            fontSize: '1.5rem',
            transition: 'all 0.3s ease'
          }}
        >
          <span style={{ color: scrolled ? '#8bc34a' : '#8bc34a' }}>Tax</span>
          <span style={{ color: scrolled ? '#fff' : '#0d6efd' }}>Consultant</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          style={{
            border: 'none',
            background: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(13, 110, 253, 0.1)',
            padding: '8px 12px',
            borderRadius: '8px'
          }}
        >
          <span 
            className="navbar-toggler-icon"
            style={{
              filter: scrolled ? 'invert(1)' : 'none'
            }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href={`/${locale}#home`}
                onClick={closeNavbar}
                style={{
                  color: scrolled ? '#fff' : '#333',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  padding: '8px 16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8bc34a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#fff' : '#333';
                }}
              >
                {t('home')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href={`/${locale}#about`}
                onClick={closeNavbar}
                style={{
                  color: scrolled ? '#fff' : '#333',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8bc34a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#fff' : '#333';
                }}
              >
                {t('about')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href={`/${locale}#services`}
                onClick={closeNavbar}
                style={{
                  color: scrolled ? '#fff' : '#333',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8bc34a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#fff' : '#333';
                }}
              >
                {t('services')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href={`/${locale}#testimonials`}
                onClick={closeNavbar}
                style={{
                  color: scrolled ? '#fff' : '#333',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8bc34a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#fff' : '#333';
                }}
              >
                {t('testimonials')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href={`/${locale}#faq`}
                onClick={closeNavbar}
                style={{
                  color: scrolled ? '#fff' : '#333',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8bc34a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#fff' : '#333';
                }}
              >
                {t('faq')}
              </a>
            </li>
            <li className="nav-item">
              <a 
                className="nav-link fw-semibold" 
                href={`/${locale}#contact`}
                onClick={closeNavbar}
                style={{
                  color: scrolled ? '#fff' : '#333',
                  transition: 'all 0.3s ease',
                  padding: '8px 16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#8bc34a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = scrolled ? '#fff' : '#333';
                }}
              >
                {t('contact')}
              </a>
            </li>
            <li className="nav-item ms-3">
              <button
                className="btn btn-sm"
                style={{
                  background: 'linear-gradient(135deg, #8bc34a 0%, #198754 100%)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: '600',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(139, 195, 74, 0.3)'
                }}
                onClick={() => switchLocale(locale === 'en' ? 'ur' : 'en')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(139, 195, 74, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 195, 74, 0.3)';
                }}
              >
                {locale === 'en' ? 'اردو' : 'English'}
              </button>
            </li>
            <li className="nav-item ms-2">
              <button
                className="btn btn-sm"
                onClick={toggleTheme}
                title="Toggle theme"
                style={{
                  background: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(13, 110, 253, 0.1)',
                  color: scrolled ? '#fff' : '#0d6efd',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = scrolled ? 'rgba(255, 255, 255, 0.2)' : 'rgba(13, 110, 253, 0.2)';
                  e.currentTarget.style.transform = 'rotate(20deg) scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(13, 110, 253, 0.1)';
                  e.currentTarget.style.transform = 'rotate(0deg) scale(1)';
                }}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li>
            <li className="nav-item ms-2">
              <a 
                className="btn btn-sm" 
                href={`/${locale}#contact`}
                onClick={closeNavbar}
                style={{
                  background: 'linear-gradient(135deg, #0d6efd 0%, #198754 100%)',
                  color: '#fff',
                  border: 'none',
                  fontWeight: '700',
                  padding: '10px 28px',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontSize: '0.85rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(13, 110, 253, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(13, 110, 253, 0.3)';
                }}
              >
                {t('getStarted')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from 'react';
import { Button } from './button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { label: 'ОБО МНЕ', href: '#about' },
    { label: 'КАК ЭТО РАБОТАЕТ', href: '#how-it-works' },
    { label: 'ОТЗЫВЫ', href: '#reviews' },
    { label: 'УСЛУГИ', href: '#services' },
    { label: 'СТОИМОСТЬ', href: '#pricing' },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Логотип и навигация */}
          <div className="flex items-center space-x-16">
            {/* Логотип */}
            <div className="flex items-center">
              <div className="w-32 h-16 rounded-lg flex items-center justify-center">
                <img 
                  src="/psyholog-v2/psycholog-logo-posub.jpg"
                  alt="Логотип психолога" 
                  className="w-32 h-16 object-contain"
                />
              </div>
            </div>

            {/* Десктопная навигация */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Кнопка справа */}
          <div>
            <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2">
              ПЕРЕЙТИ В СООБЩЕСТВО
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* Мобильная кнопка меню */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Открыть главное меню</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-gradient-primary hover:opacity-90 text-white px-6 py-3">
                  ПЕРЕЙТИ В СООБЩЕСТВО
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

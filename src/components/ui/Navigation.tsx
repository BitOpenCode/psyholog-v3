import React, { useState } from 'react';
import { Button } from './button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'ОБО МНЕ', action: () => scrollToSection('about') },
    { label: 'КАК ЭТО РАБОТАЕТ', action: () => scrollToSection('how-it-works') },
    { label: 'ОТЗЫВЫ', action: () => scrollToSection('reviews') },
    { label: 'УСЛУГИ', action: () => scrollToSection('services') },
    { label: 'СТОИМОСТЬ', action: () => scrollToSection('pricing') },
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Логотип */}
          <div className="flex items-center">
            <div className="w-24 h-12 sm:w-32 sm:h-16 rounded-lg flex items-center justify-center">
              <img 
                src="/psyholog-v2/psycholog-logo-posub.jpg"
                alt="Логотип психолога" 
                className="w-24 h-12 sm:w-32 sm:h-16 object-contain"
              />
            </div>
          </div>

          {/* Десктопная навигация */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="nav-link text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

          {/* Кнопка и мобильное меню */}
          <div className="flex items-center space-x-2">
            {/* Кнопка - адаптивная */}
            <div className="hidden sm:block">
              <Button className="bg-gradient-primary hover:opacity-90 text-white px-4 lg:px-6 py-2 text-xs lg:text-sm">
                <span className="hidden lg:inline">ПЕРЕЙТИ В СООБЩЕСТВО</span>
                <span className="lg:hidden">СООБЩЕСТВО</span>
                <svg className="w-3 h-3 lg:w-4 lg:h-4 ml-1 lg:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>

            {/* Мобильная кнопка меню */}
            <div className="lg:hidden">
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
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
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

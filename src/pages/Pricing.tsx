import React from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { cn } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from 'lucide-react';

interface PricingCardProps {
  className?: string;
  children: React.ReactNode;
  featured?: boolean;
}

const PricingCard = ({ className, children, featured = false }: PricingCardProps) => {
  return (
    <Card 
      className={cn(
        "p-8 transition-all duration-300 hover:shadow-medium",
        featured && "border-2 border-primary bg-gradient-accent",
        className
      )}
    >
      {children}
    </Card>
  );
};

const Pricing = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigateToSection = (sectionId: string) => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navItems = [
    { label: 'ОБО МНЕ', action: () => navigateToSection('about') },
    { label: 'КАК ЭТО РАБОТАЕТ', action: () => navigateToSection('how-it-works') },
    { label: 'ОТЗЫВЫ', action: () => navigateToSection('reviews') },
    { label: 'УСЛУГИ', action: () => navigateToSection('services') },
    { label: 'СТОИМОСТЬ', action: () => {} }, // Текущая страница
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Кастомная навигация */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Логотип */}
            <div className="flex items-center">
              <div className="w-24 h-12 sm:w-32 sm:h-16 rounded-lg flex items-center justify-center cursor-pointer" onClick={() => navigate('/')}>
                <img 
                  src="/psyholog-v3/psycholog-logo-posub.jpg"
                  alt="Логотип психолога" 
                  className="w-24 h-12 sm:w-32 sm:h-16 object-contain select-none"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                />
              </div>
            </div>

            {/* Десктопная навигация */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={cn(
                    "nav-link text-sm font-medium transition-colors duration-200",
                    item.label === 'СТОИМОСТЬ' 
                      ? "text-primary font-bold" 
                      : "text-gray-700 hover:text-primary"
                  )}
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
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
                >
                  {isMobileMenuOpen ? (
                    <X className="block h-6 w-6" />
                  ) : (
                    <Menu className="block h-6 w-6" />
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
                    className={cn(
                      "block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200",
                      item.label === 'СТОИМОСТЬ' 
                        ? "text-primary font-bold bg-gray-50" 
                        : "text-gray-700 hover:text-primary hover:bg-gray-50"
                    )}
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
      
      <div className="p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              НАШИ ТАРИФЫ
            </h1>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Тариф 1 месяц */}
            <PricingCard>
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground mb-4">1 МЕСЯЦ</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">2 999 ₽</span>
                </div>
                <p className="text-sm text-muted-foreground">цена за месяц 2 999 ₽</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Личный чат 24/7</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Самостоятельные практики</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Точечное решение проблемы</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Быстрый результат</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">Авторская программа</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm text-muted-foreground">1 личный разбор</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-white py-3">
                Попробовать бесплатно
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </PricingCard>

            {/* Тариф 6 месяцев - Featured */}
            <PricingCard featured>
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground mb-4">6 МЕСЯЦЕВ</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">12 999 ₽</span>
                </div>
                <p className="text-sm text-muted-foreground">цена за месяц 2 166 ₽</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Личный чат 24/7</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Самостоятельные практики</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Точечное решение проблемы</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Быстрый результат</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Авторская программа</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">3 индивидуальных разбора</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-white py-3">
                Попробовать бесплатно
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </PricingCard>

            {/* Тариф 12 месяцев */}
            <PricingCard>
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground mb-4">12 МЕСЯЦЕВ</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold">19 999 ₽</span>
                </div>
                <p className="text-sm text-muted-foreground">цена за месяц 1 666 ₽</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Личный чат 24/7</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Самостоятельные практики</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Точечное решение проблемы</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Быстрый результат</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Авторская программа</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm">Специальные групповые сессии</span>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-primary hover:opacity-90 text-white py-3">
                Попробовать бесплатно
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </PricingCard>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Часто задаваемые вопросы
              </h2>
              <p className="text-muted-foreground text-lg">
                Наш раздел FAQ — лучшее место для поиска ответов на ваши вопросы. Наша команда сообщества и поддержки постоянно обновляет вопросы и ответы.
              </p>
            </div>

            <div className="space-y-4">
              {/* FAQ Item 1 - Открыт по умолчанию */}
              <FAQItem 
                question="Что такое наш сервис психологической помощи?"
                answer="Наш сервис — это инновационная платформа психологической поддержки, которая объединяет возможности искусственного интеллекта и профессиональных психологов. Мы предоставляем круглосуточную помощь через ИИ-инструмент, дополненную регулярными консультациями с реальными специалистами.

В отличие от традиционной терапии, где вы встречаетесь с психологом раз в неделю или реже, наш сервис доступен 24 часа в сутки, 7 дней в неделю. Когда вам нужна поддержка в 3 утра или в выходные — мы здесь. ИИ-помощник поможет разобрать ситуацию, предложит техники работы с эмоциями, а раз в месяц ваш случай будет детально проанализирован профессиональным психологом."
                defaultOpen={true}
              />
              
              <FAQItem 
                question="Что включает в себя подписка?"
                answer=""
              />
              
              <FAQItem 
                question="Как проходят ежемесячные разборы с психологом?"
                answer=""
              />
              
              <FAQItem 
                question="Могу ли я обновить свой способ оплаты?"
                answer=""
              />
              
              <FAQItem 
                question="Могу ли я настроить свои предпочтения безопасности?"
                answer=""
              />
              
              <FAQItem 
                question="Могу ли я установить ограничения для своего платежного аккаунта?"
                answer=""
              />
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="text-white mt-24" style={{backgroundColor: '#181818'}}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-48 h-20 rounded-lg flex items-center justify-start">
                  <img 
                    src="/psyholog-v3/footer-logo.jpg"
                    alt="Логотип психолога" 
                    className="w-48 h-20 object-contain select-none pointer-events-none cursor-pointer"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onClick={() => navigate('/')}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 flex items-center">
              <nav className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
                <button onClick={() => navigateToSection('about')} className="text-sm hover:text-primary transition-colors text-left">ОБО МНЕ</button>
                <button onClick={() => navigateToSection('how-it-works')} className="text-sm hover:text-primary transition-colors text-left">КАК ЭТО РАБОТАЕТ</button>
                <button onClick={() => navigateToSection('reviews')} className="text-sm hover:text-primary transition-colors text-left">ОТЗЫВЫ</button>
                <button onClick={() => navigateToSection('services')} className="text-sm hover:text-primary transition-colors text-left">УСЛУГИ</button>
                <button onClick={() => {}} className="text-sm text-primary font-bold transition-colors text-left">СТОИМОСТЬ</button>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1 text-right">
              <p className="text-sm mb-2">Реквизиты компании</p>
              <p className="text-xs opacity-75 mb-1">ИП БОБРОВ ИВАН СЕРГЕЕВИЧ</p>
              <p className="text-xs opacity-75 mb-4">ИНН: 190402127630</p>
              <button className="text-xs underline opacity-75 hover:opacity-100">
                Смотреть реквизиты
              </button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-background/20 mt-8 pt-8">
            <div className="flex flex-wrap justify-between gap-x-8 gap-y-4 text-xs opacity-60">
              <span className="text-xs opacity-60">2025© Психолог по подписке. Все права защищены.</span>
              <a href="#" className="hover:opacity-100">Согласие на обработку персональных данных</a>
              <a href="#" className="hover:opacity-100">Пользовательское соглашение</a>
              <a href="#" className="hover:opacity-100">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const FAQItem = ({ question, answer, defaultOpen = false }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-foreground pr-4">
          {question}
        </h3>
        <div className={cn(
          "transition-transform duration-200 flex-shrink-0",
          isOpen ? "rotate-180" : ""
        )}>
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>
      </button>
      
      {isOpen && answer && (
        <div className="px-6 pb-6">
          <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;

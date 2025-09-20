import React from "react";
import { Button } from "./button";
import { Card } from "./card";
import { cn } from "../../lib/utils";
import Navigation from "./Navigation";
import logoImage from "/logo.jpg";
import userAvatar from "/user.jpg";

interface BentoCardProps {
  className?: string;
  children: React.ReactNode;
  gradient?: boolean;
}

const BentoCard = ({ className, children, gradient = false }: BentoCardProps) => {
  return (
    <Card 
      className={cn(
        "p-6 transition-all duration-300 hover:shadow-medium",
        gradient && "bg-gradient-accent",
        className
      )}
    >
      {children}
    </Card>
  );
};

const BentoGrid = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <Navigation />
      
      <div className="p-4 lg:p-8">

      {/* Main Hero Section */}
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          
          {/* Left Side - Hero Content with Image */}
          <div className="space-y-6">
            <div className="p-6 sm:p-12 rounded-2xl relative overflow-hidden h-[320px] sm:h-[420px] flex flex-col justify-between" style={{backgroundColor: '#FCF9FF'}}>
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src="/psyholog-v3/psychologist-man.jpg" 
                  alt="Психолог" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                </div>
                <div className="mt-auto pt-8">
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Psychologist Name + Service Cards */}
          <div className="space-y-6" id="about">
            {/* Psychologist Name Card - only over service cards */}
            <BentoCard className="p-6 text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2 leading-tight">
                БОБРОВ ИВАН СЕРГЕЕВИЧ
              </h1>
              <p className="text-lg text-muted-foreground">
                Психолог и психотерепевт по подписке
              </p>
            </BentoCard>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BentoCard className="p-4 sm:p-6 h-32 flex flex-col justify-center sm:justify-between">
                <h3 className="text-sm font-bold text-foreground leading-tight text-center sm:text-left">
                  АНОНИМНАЯ ПОДДЕРЖКА В ЗАКРЫТОМ TELEGRAM-КАНАЛЕ
                </h3>
                <div className="flex justify-end hidden sm:flex">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">+</span>
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="p-4 sm:p-6 h-32 flex flex-col justify-center sm:justify-between">
                <h3 className="text-sm font-bold text-foreground leading-tight text-center sm:text-left">
                  ПЕРСОНАЛЬНЫЙ РАЗБОР СИТУАЦИИ
                </h3>
                <div className="flex justify-end hidden sm:flex">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">+</span>
                  </div>
                </div>
              </BentoCard>

              <BentoCard className="p-4 sm:p-6 h-32 flex flex-col justify-center sm:justify-between">
                <h3 className="text-sm font-bold text-foreground leading-tight text-center sm:text-left">
                  КАЖДЫЙ ДЕНЬ РАЗБОРЫ СИТУАЦИЙ УЧАСТНИКОВ
                </h3>
                <div className="flex justify-end hidden sm:flex">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">+</span>
                  </div>
            </div>
          </BentoCard>

              <BentoCard className="p-4 sm:p-6 h-32 flex flex-col justify-center sm:justify-between bg-gradient-primary text-primary-foreground">
                <h3 className="text-sm font-bold leading-tight text-center sm:text-left">
                  ПОПРОБОВАТЬ 3 БЕСПЛАТНЫХ ДНЯ
                </h3>
                <div className="flex justify-end hidden sm:flex">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </BentoCard>
            </div>
          </div>
        </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 -mt-8">
            <BentoCard className="text-center p-6">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Довольных клиентов</p>
            </div>
          </BentoCard>

            <BentoCard className="text-center p-6">
            <div className="space-y-2">
              <div className="text-3xl lg:text-4xl font-bold text-primary">24/7</div>
              <p className="text-sm text-muted-foreground">Поддержка</p>
            </div>
          </BentoCard>

            <BentoCard className="text-center p-6">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">3 дня</div>
                <p className="text-sm text-muted-foreground">Бесплатного доступа</p>
            </div>
          </BentoCard>

            <BentoCard className="text-center p-6">
              <div className="space-y-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary">100%</div>
                <p className="text-sm text-muted-foreground">Анонимность и безопасность</p>
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto mt-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">
            ПОЧЕМУ НАС ВЫБИРАЮТ
          </h2>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="text-left">
              <h3 className="font-bold text-xl mb-3">100% АНОНИМНОСТЬ</h3>
              <p className="text-muted-foreground">
                Никто не узнает о ваших проблемах. Общайтесь под псевдонимом в безопасной среде.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-bold text-xl mb-3">ПОДДЕРЖКА СООБЩЕСТВА</h3>
              <p className="text-muted-foreground">
                Вы не один. Делитесь опытом с людьми, которые вас понимают.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-bold text-xl mb-3">ПЕРСОНАЛЬНЫЙ ПОДХОД</h3>
              <p className="text-muted-foreground">
                Каждая ситуация уникальна. Получите индивидуальный разбор от психолога.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-bold text-xl mb-3">ЕЖЕДНЕВНЫЕ СЕССИИ</h3>
              <p className="text-muted-foreground">
                Групповые встречи, медитации, практики - каждый день что-то новое.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-bold text-xl mb-3">ВСЕГДА ПОД РУКОЙ</h3>
              <p className="text-muted-foreground">
                Приложение всегда с вами. Получайте поддержку когда она нужна.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="font-bold text-xl mb-3">ДОСТУПНАЯ ЦЕНА</h3>
              <p className="text-muted-foreground">
                В 10 раз дешевле личной консультации. Первые 3 дня бесплатно.
              </p>
            </div>
          </div>

          {/* Trial Section */}
            <div className="bg-gradient-soft rounded-3xl px-4 pt-6 pb-4 sm:px-8 sm:pt-8 lg:px-12 lg:pt-12 lg:pb-6 -mt-12" id="services">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-left">
                <p className="text-sm text-muted-foreground mb-4">Не можешь определиться?</p>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                    ПОПРОБУЙ 3 БЕСПЛАТНЫХ ДНЯ!
                  </span>
                </h2>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-6 leading-tight">
                  ТЫ СМОЖЕШЬ ОЦЕНИТЬ ПРЕИМУЩЕСТВА ПСИХОЛОГА ПО ПОДПИСКЕ
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Первый шаг к пониманию себя — это встреча с психологом. Поделитесь своими переживаниями, расскажите о своих целях и задайте все интересующие вас вопросы.
                </p>

                {/* Price Comparison */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div className="flex flex-col items-start">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      ВЫГОДНО
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-primary mb-1 whitespace-nowrap">
                      2 999 ₽
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                      ПОДПИСКА НА МЕСЯЦ
                    </div>
                  </div>
                  
        <div className="flex flex-col items-start sm:ml-16">
                    <div className="text-sm text-muted-foreground mb-2">
                      ЦЕНА МЕСЯЦА У ПСИХОЛОГА
                    </div>
                    <div className="text-4xl lg:text-5xl font-bold text-foreground mb-1 whitespace-nowrap">
                      30 000 ₽
                    </div>
                    <div className="text-sm text-muted-foreground">
                      в месяц
                    </div>
                  </div>
                </div>

                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg w-full sm:w-auto">
                  НАЧАТЬ БЕСПЛАТНЫЕ 3 ДНЯ →
                </Button>
              </div>

              {/* Right - Phone Mockup */}
                <div className="flex justify-center lg:justify-end -mt-8">
                  <div className="phone-screen overflow-hidden" style={{clipPath: 'inset(20% 0 25% 0)'}}>
                    <div className="mobile-body">
                      <div className="top-bar">
                        <div className="camera"></div>
                        <div className="speaker"></div>
                      </div>
                      <div className="button volume-up"></div>
                      <div className="button volume-down"></div>
                      <div className="button silent"></div>
                      <div className="button power"></div>
                      <div className="layer-2"></div>
                      <div className="layer-1"></div>
                      <div className="layer-gradient-1"></div>
                      <div className="layer-gradient-2"></div>
                      
                      {/* Контент экрана */}
                      <div className="screen-content">
                        <div className="status-bar">
                          <div className="time">9:41</div>
                          <div className="status-icons">
                            <div className="signal">
                              <svg width="20" height="14" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.7313 1.74184C16.7313 1.21159 16.3313 0.781738 15.8378 0.781738H14.9444C14.4509 0.781738 14.0509 1.21159 14.0509 1.74184V10.0628C14.0509 10.593 14.4509 11.0229 14.9444 11.0229H15.8378C16.3313 11.0229 16.7313 10.593 16.7313 10.0628V1.74184ZM10.5043 2.82996H11.3978C11.8912 2.82996 12.2912 3.27013 12.2912 3.81311V10.0397C12.2912 10.5827 11.8912 11.0229 11.3978 11.0229H10.5043C10.0109 11.0229 9.61084 10.5827 9.61084 10.0397V3.81311C9.61084 3.27013 10.0109 2.82996 10.5043 2.82996ZM6.87591 5.04887H5.98245C5.489 5.04887 5.08898 5.49464 5.08898 6.04453V10.0272C5.08898 10.5771 5.489 11.0229 5.98245 11.0229H6.87591C7.36936 11.0229 7.76937 10.5771 7.76937 10.0272V6.04453C7.76937 5.49464 7.36936 5.04887 6.87591 5.04887ZM2.43585 7.0971H1.54239C1.04894 7.0971 0.648926 7.5365 0.648926 8.07854V10.0414C0.648926 10.5835 1.04894 11.0229 1.54239 11.0229H2.43585C2.9293 11.0229 3.32932 10.5835 3.32932 10.0414V8.07854C3.32932 7.5365 2.9293 7.0971 2.43585 7.0971Z" fill="black"/>
                              </svg>
                            </div>
                  <div className="wifi">
                    <svg width="18" height="14" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.61165 2.80458C9.69491 2.80467 11.6985 3.57703 13.2083 4.96202C13.322 5.06895 13.5038 5.0676 13.6157 4.959L14.7025 3.90069C14.7592 3.84561 14.7908 3.77099 14.7904 3.69336C14.7899 3.61573 14.7574 3.54148 14.7 3.48704C10.7372 -0.177321 4.48544 -0.177321 0.522639 3.48704C0.465235 3.54144 0.432665 3.61567 0.432135 3.6933C0.431606 3.77093 0.463161 3.84557 0.519819 3.90069L1.60694 4.959C1.71884 5.06776 1.90071 5.06911 2.01434 4.96202C3.52435 3.57694 5.52818 2.80458 7.61165 2.80458ZM7.60884 6.33958C8.74576 6.33951 9.84211 6.76816 10.6849 7.54223C10.7988 7.65209 10.9784 7.64971 11.0895 7.53686L12.1678 6.43178C12.2246 6.37381 12.2561 6.29518 12.2552 6.21347C12.2544 6.13176 12.2213 6.05379 12.1634 5.99701C9.59708 3.57557 5.62278 3.57557 3.05644 5.99701C2.99847 6.05379 2.9654 6.1318 2.96464 6.21353C2.96388 6.29527 2.99549 6.3739 3.05239 6.43178L4.13034 7.53686C4.24145 7.64971 4.42101 7.65209 4.535 7.54223C5.37719 6.76867 6.47267 6.34006 7.60884 6.33958ZM9.72335 8.67953C9.72496 8.76777 9.69392 8.85285 9.63755 8.91467L7.81433 10.9708C7.76088 11.0312 7.68801 11.0652 7.61198 11.0652C7.53595 11.0652 7.46309 11.0312 7.40964 10.9708L5.58611 8.91467C5.52978 8.8528 5.49879 8.7677 5.50046 8.67945C5.50213 8.59121 5.53631 8.50765 5.59493 8.44849C6.75931 7.34795 8.46465 7.34795 9.62903 8.44849C9.68761 8.50769 9.72174 8.59128 9.72335 8.67953Z" fill="black"/>
                    </svg>
                  </div>
                            <div className="battery">
                              <svg width="28" height="14" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.35" x="0.910022" y="0.876331" width="20.1029" height="10.0515" rx="3.18297" stroke="black" strokeWidth="0.837623"/>
                                <path opacity="0.4" d="M22.27 4.4624V7.87611C22.9441 7.58699 23.3824 6.91441 23.3824 6.16926C23.3824 5.4241 22.9441 4.75152 22.27 4.4624Z" fill="black"/>
                                <rect x="2.16699" y="2.13281" width="17.5901" height="7.53861" rx="2.09406" fill="black"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        {/* Хедер чата */}
                        <div className="chat-header">
                          <div className="psychologist-avatar">
                            <img src="/psyholog-v3/psychologist-man.jpg" alt="Иван" />
                            <div className="online-indicator"></div>
                          </div>
                          <div className="psychologist-info">
                            <h3 className="psychologist-name">Иван, ваш психолог по подписке</h3>
                            <p className="online-status">online</p>
                          </div>
                        </div>
                        
                        
                        {/* Сообщения чата */}
                        <div className="chat-messages">
                          <div className="message user-message">
                            <div className="message-bubble user-bubble">
                              <p>Я выбрала себе супер холодного мужчину. Уйти не могу, зависимость.  И сама умираю в этих отношениях так как, даже если я плачу муж делает вид, что ничего не происходит</p>
                            </div>
                            <div className="user-avatar">
                              <img src={userAvatar} alt="Пользователь" />
                            </div>
                          </div>
                          
                            <div className="message psychologist-message">
                            <div className="psychologist-avatar-small">
                              <img src="/psyholog-v3/psychologist-man.jpg" alt="Иван" />
                            </div>
                            <div className="message-bubble psychologist-bubble">
                              <p>Доброй ночи! Сейчас разберем вашу проблему...</p>
                            </div>
                          </div>
                          
                          <div className="message user-message">
                            <div className="message-bubble user-bubble">
                              <p>Отлично, слушаю</p>
                            </div>
                            <div className="user-avatar">
                              <img src={userAvatar} alt="Пользователь" />
                            </div>
                          </div>
                          
                          {/* Логотип в центре экрана */}
                          <div className="flex justify-center items-center py-6 mt-2">
                            <img src={logoImage} alt="" className="w-64 h-auto" style={{maxWidth: '250px'}} />
                          </div>
                        </div>
                        
                        {/* Home Indicator */}
                        <div className="home-indicator"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* How It Works Section */}
        <div className="py-12 bg-gradient-soft rounded-3xl mx-4 lg:mx-8 mt-8" id="how-it-works">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              КАК ЭТО РАБОТАЕТ
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 01 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="text-4xl font-bold text-primary mb-4">01</div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  НАЖМИТЕ КНОПКУ
                </h3>
                <p className="text-muted-foreground">
                  Перейдите в наше Telegram-сообщество одним кликом
                </p>
          </div>

              {/* Card 02 - Highlighted */}
              <div className="bg-primary rounded-lg p-6 shadow-sm text-white">
                <div className="text-4xl font-bold text-white mb-4">02</div>
                <h3 className="text-lg font-bold text-white mb-3">
                  ОТПРАВЬТЕ АНОНИМНЫЙ ОТЗЫВ
                </h3>
                <p className="text-white/90">
                  Недавно я посетила психолога, и хочу поделиться своими впечатлениями. С самого начала я почувствовала себя комфортно. Атмосфера в кабинете была очень уютной, а психолог встретил меня с теплотой и пониманием. Он внимательно выслушал мои переживания и задавал вопросы, которые помогали мне
              </p>
            </div>
            
              {/* Card 03 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="text-4xl font-bold text-primary mb-4">03</div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  ПОЛУЧИТЕ ПОДДЕРЖКУ
                </h3>
                <p className="text-muted-foreground">
                  Поделитесь тем, что вас беспокоит
              </p>
            </div>
            
              {/* Card 04 */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="text-4xl font-bold text-primary mb-4">04</div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  ПЛАН ПО РЕШЕНИЮ ВАШЕЙ ПРОБЛЕМЫ
                </h3>
                <p className="text-muted-foreground">
                  Получить план по решению вашей проблемы и следите за прогрессом вашей индивидуальной программы
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-12 bg-gradient-soft rounded-3xl mx-4 lg:mx-8 mt-8" id="reviews">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12 leading-tight">
              ИСТОРИИ УЧАСТНИКОВ
            </h2>
            
            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 sm:px-6 lg:px-12">
                {/* Card 1 - Анна */}
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-1 sm:space-y-0">
                    <h3 className="text-lg font-bold text-foreground">Анна</h3>
                    <span className="text-sm text-muted-foreground">Участник программы 1 месяц</span>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Иван, привет. Прости, что долго не отвечала. Каждый раз после работы с тобой результаты превосходят ожидания. Ожидаю одно, но результат в разы лучше и Эффективнее. Результаты нашей последней работы: Мне в первые за 25 лет работы в компании выплатили премию. Это супер круто. Второй запрос, что бесит подруга с её мнением. Я стала принимать её точку зрения. Меня теперь не тригирит её мнение. Я спокойно принимаю ее точку зрения, и это супер. Иван, огромное тебе спасибо.
              </p>
            </div>
            
                {/* Card 2 - Михаил */}
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-1 sm:space-y-0">
                    <h3 className="text-lg font-bold text-foreground">Михаил</h3>
                    <span className="text-sm text-muted-foreground">Участник программы 3 месяца</span>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Привет 👋👋👋 Хочу сказать огромное спасибо за то, как сейчас я выстраиваю свой график работы, как коммуницирую с людьми... я впервые в жизни не испытываю чувство вины.. страшно конечно говорить, писать, просить... но я перебарываю это в себе и не встаю в позицию жертвы. И не мучаю себя чувством вины. На это неделе такой треш по работе, по куче дел, и срочности типа "еще вчера", но у меня конечно есть переживание но оно не такого космического масштаба после которого хочется закрыться, не проявляться и не отсвечивать 🙏🙏🙏 Это для меня нереально важно
              </p>
            </div>
            
                {/* Card 3 - Константин */}
                <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-1 sm:space-y-0">
                    <h3 className="text-lg font-bold text-foreground">Константин</h3>
                    <span className="text-sm text-muted-foreground">Участник программы 2 месяца</span>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Иван, спасибо большое! 😊 Это было очень круто! Только теперь странное чувство распирания внутри! Как будто у меня чего-то внутри очень много, оно переполняет и надо срочно с кем-то поделиться. И даже если я отдам почти всё, оно всё равно никогда не закончится. Это как будто какой-то бесконечно наполняемый сосуд! у меня даже щёки горят!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      {/* New Section - Contact Specialist */}
      <div className="max-w-7xl mx-auto mt-8" id="pricing">
        <div className="bg-gradient-soft rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <p className="text-sm text-muted-foreground mb-4">Не можешь определиться?</p>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                СВЯЖИСЬ С НАШИМ СПЕЦИАЛИСТОМ
              </span>
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
              ОН ПОДСКАЖЕТ, КАКОЙ ФОРМАТ РАБОТЫ ТЕБЕ ПОДОЙДЕТ ЛУЧШЕ ВСЕГО.
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Первый шаг к пониманию себя — это встреча с психологом. Поделитесь своими переживаниями, расскажите о своих целях и задайте все интересующие вас вопросы.
            </p>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">ЦЕНА ПОДПИСКИ</p>
                <div className="text-4xl lg:text-5xl font-bold text-primary">2999 ₽</div>
                <p className="text-sm text-muted-foreground">в месяц</p>
              </div>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 px-8 py-4 text-lg">
                НАЧАТЬ БЕСПЛАТНЫЕ 3 ДНЯ →
              </Button>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <h4 className="font-bold text-lg mb-3">100% АНОНИМНОСТЬ</h4>
              <p className="text-sm text-muted-foreground">
                Никто не узнает о ваших проблемах. Общайтесь под псевдонимом в безопасной среде.
              </p>
            </div>
            
            <div className="text-center p-6">
              <h4 className="font-bold text-lg mb-3">ПОДДЕРЖКА СООБЩЕСТВА</h4>
              <p className="text-sm text-muted-foreground">
                Вы не один. Делитесь опытом с людьми, которые вас понимают.
              </p>
            </div>
            
            <div className="text-center p-6">
              <h4 className="font-bold text-lg mb-3">ПЕРСОНАЛЬНЫЙ ПОДХОД</h4>
              <p className="text-sm text-muted-foreground">
                Каждая ситуация уникальна. Получите индивидуальный разбор от психолога.
              </p>
            </div>
            
            <div className="text-center p-6">
              <h4 className="font-bold text-lg mb-3">ЕЖЕДНЕВНЫЕ СЕССИИ</h4>
              <p className="text-sm text-muted-foreground">
                Групповые встречи, медитации, практики - каждый день что-то новое.
              </p>
            </div>
            
            <div className="text-center p-6">
              <h4 className="font-bold text-lg mb-3">ВСЕГДА ПОД РУКОЙ</h4>
              <p className="text-sm text-muted-foreground">
                Получайте обучающие видео материалы и помощь когда она нужна.
              </p>
            </div>
            
            <div className="text-center p-6">
              <h4 className="font-bold text-lg mb-3">ДОСТУПНАЯ ЦЕНА</h4>
              <p className="text-sm text-muted-foreground">
                В 10 раз дешевле личной консультации. Первые 3 дня бесплатно.
              </p>
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
                    className="w-48 h-20 object-contain select-none pointer-events-none"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 flex items-center">
              <nav className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
                <button onClick={() => {
                  const element = document.getElementById('about');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }} className="text-sm hover:text-primary transition-colors text-left">ОБО МНЕ</button>
                <button onClick={() => {
                  const element = document.getElementById('how-it-works');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }} className="text-sm hover:text-primary transition-colors text-left">КАК ЭТО РАБОТАЕТ</button>
                <button onClick={() => {
                  const element = document.getElementById('reviews');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }} className="text-sm hover:text-primary transition-colors text-left">ОТЗЫВЫ</button>
                <button onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }} className="text-sm hover:text-primary transition-colors text-left">УСЛУГИ</button>
                <button onClick={() => {
                  window.location.href = '#/pricing';
                }} className="text-sm hover:text-primary transition-colors text-left">СТОИМОСТЬ</button>
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

export default BentoGrid;
import { useState } from 'react';
import { MapPin, MessageCircle, Calendar, Clock, Users, Gift, Shield, Wifi, Zap, GamepadIcon } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState<'ru' | 'en'>('ru');

  const content = {
    ru: {
      title: 'День Рождения',
      subtitle: 'Приглашаем вас отпраздновать вместе с нами!',
      date: 'Дата',
      dateValue: '27 декабря',
      time: 'Время',
      timeValue: '12:00',
      location: 'Местоположение',
      locationValue: 'Дача в Варзобе',
      coordinates: '38°46\'39.3"N 68°49\'51.4"E',
      coordinates_org: 'Филиал Агроинвестбанка в Варзобском районе',
      safety: 'Безопасность и информация',
      safety_intro: 'Уважаемые гости, мы уделяем максимальное внимание вашей безопасности и комфорту. Вот подробная информация о мерах защиты:',
      safety_title: 'Безопасность территории',
      safety_items: [
        'Дача расположена высоко над ближайшим ручьём, что исключает риск подтопления',
        'Территория полностью ограждена высокими заборами, предотвращая доступ посторонних',
        'Вход на территорию возможен только для приглашённых гостей',
        'На всей территории установлены безопасные проходы и зоны отдыха'
      ],
      animals_title: 'Защита от животных и опасных существ',
      animals_items: [
        'Опасные животные (змеи, скорпионы, ядовитые пауки) полностью исключены',
        'Специалисты регулярно обрабатывают территорию профилактическими средствами',
        'Благодаря постоянной обработке и контролю, животные избегают дачи'
      ],
      staff_title: 'Персонал и контроль',
      staff_items: [
        'Все меры безопасности обеспечиваются профессиональным персоналом: охранником, садовником и помощницей',
        'Персонал ежедневно следит за состоянием территории, сада, бассейна и всех зон отдыха',
        'На протяжении всего мероприятия персонал контролирует порядок, чистоту и безопасность'
      ],
      infra_title: 'Инфраструктура и комфорт',
      infra_items: [
        'На территории есть бассейн, баня и вилла с помощницей',
        'Все зоны отдыха поддерживаются в идеальном состоянии',
        'Wi-Fi стабильно функционирует на всей территории',
        'Электропитание от солнечных панелей - нет риска отключения света'
      ],
      program_title: 'Программа мероприятия',
      program_items: [
        'Различные игры и развлечения для всех гостей',
        'Баня доступна по желанию',
        'PlayStation и другие видеоигры для любителей',
        'Праздник продлится до 7–8 вечера, но вы можете уйти раньше'
      ],
      contact: 'Связаться с организатором'
    },
    en: {
      // English translations...
    }
  };

  const t = content[language];

  const handleLocation = () => {
    window.open('https://maps.google.com', '_blank');
  };

  const handleContact = () => {
    window.open('https://t.me/username', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-4xl mx-auto px-4 py-8 pb-32">
        {/* Language switcher */}
        <div className="flex justify-end mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
            <button onClick={() => setLanguage('ru')} className="...">RU</button>
            <button onClick={() => setLanguage('en')} className="...">EN</button>
          </div>
        </div>

        {/* Title section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block p-4 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full mb-6 shadow-xl">
            <Gift className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-light">{t.subtitle}</p>
        </div>

        {/* Info cards (Date, Time, Location) */}
        {/* Safety sections */}
        {/* Infrastructure section */}
        {/* Program section */}
      </div>

      {/* Fixed bottom buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <button onClick={handleLocation} className="...">
              <MapPin className="w-5 h-5" />
              <span>{t.location}</span>
            </button>
            <button onClick={handleContact} className="...">
              <MessageCircle className="w-5 h-5" />
              <span>{t.contact}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


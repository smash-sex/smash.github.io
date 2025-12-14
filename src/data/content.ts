import { Content } from '../types/content';

export const russianContent: Content = {
  lang: 'ru',
  header: {
    title: 'Приглашение на День Рождения',
    date: '27 декабря',
    time: '12:00'
  },
  intro: 'Уважаемые гости, приглашаем вас принять участие в праздновании дня рождения на нашей даче. Мы уделяем максимальное внимание безопасности и комфорту гостей.',
  sections: [
    {
      title: 'Безопасность территории',
      items: [
        'Дача расположена высоко над ближайшим ручьём, что исключает риск подтопления',
        'Территория полностью ограждена высокими заборами, предотвращая доступ посторонних',
        'Вход на территорию возможен только для приглашённых гостей',
        'На всей территории установлены безопасные проходы и зоны отдыха'
      ]
    },
    {
      title: 'Защита от животных и опасных существ',
      items: [
        'Опасные животные — змеи, скорпионы, ядовитые пауки — полностью исключены',
        'Специалисты регулярно обрабатывают территорию профилактическими средствами',
        'Благодаря постоянной обработке и контролю территории, животные избегают дачи'
      ]
    },
    {
      title: 'Контроль и ответственность персонала',
      items: [
        'Все меры безопасности обеспечиваются профессиональным персоналом',
        'Персонал ежедневно следит за состоянием территории, сада, бассейна и всех зон отдыха',
        'На протяжении всего мероприятия персонал контролирует порядок, чистоту и безопасность'
      ]
    },
    {
      title: 'Инфраструктура и комфорт',
      items: [
        'На территории есть бассейн, баня и вилла',
        'Вилла и все зоны отдыха поддерживаются в идеальном состоянии',
        'На территории работает стабильный Wi-Fi',
        'Электропитание осуществляется от солнечных панелей — риск отключения света отсутствует'
      ]
    },
    {
      title: 'Программа мероприятия',
      items: [
        'Гостей ждут различные игры и развлечения',
        'По желанию можно посетить баню',
        'Для любителей видеоигр доступна PlayStation и другие игры',
        'Мероприятие продлится до 7–8 вечера, но при желании гости могут уйти раньше'
      ]
    }
  ],
  location: {
    title: 'Место проведения',
    description: 'День рождения будет проходить на даче в Варзобе. Локация: Филиал Агроинвестбанка в Варзобском районе.',
    coordinates: '38°46\'39.3"N 68°49\'51.4"E'
  },
  buttons: {
    location: 'Местоположение',
    contact: 'Связаться с организатором'
  }
};

export const englishContent: Content = {
  lang: 'en',
  header: {
    title: 'Birthday Invitation',
    date: 'December 27th',
    time: '12:00 PM'
  },
  intro: 'Dear guests, you are invited to a birthday celebration at our cottage. We place the highest priority on the safety and comfort of all guests.',
  sections: [
    {
      title: 'Safety of the Location',
      items: [
        'The cottage is situated high above the nearest stream, eliminating any risk of flooding',
        'The entire property is fully enclosed with tall fences, preventing access by outsiders',
        'Only invited guests can enter the property',
        'Safe pathways and designated areas for activities and rest are carefully planned'
      ]
    },
    {
      title: 'Protection from Animals and Hazards',
      items: [
        'Dangerous animals, including snakes, scorpions, and venomous spiders, are completely absent',
        'Specialists regularly treat the area with preventive measures',
        'Thanks to ongoing maintenance and monitoring, wildlife avoids the cottage'
      ]
    },
    {
      title: 'Supervision and Responsibility of Staff',
      items: [
        'All safety measures are managed by professional staff',
        'The staff ensures the property, garden, pool, and all recreational areas are in perfect condition',
        'Throughout the event, staff continuously supervises the guests'
      ]
    },
    {
      title: 'Infrastructure and Comfort',
      items: [
        'The property includes a swimming pool, sauna, and villa',
        'All areas are kept in excellent condition for guests to enjoy a comfortable stay',
        'Wi-Fi is available throughout the property and works reliably',
        'Electricity is supplied by solar panels — no risk of power outages'
      ]
    },
    {
      title: 'Event Program',
      items: [
        'Guests can enjoy various games and activities',
        'The sauna is available upon request',
        'Video game enthusiasts have access to PlayStation and other games',
        'The event lasts until 7–8 PM, but guests may leave earlier if they wish'
      ]
    }
  ],
  location: {
    title: 'Location',
    description: 'The birthday celebration will take place at a cottage in Varzob. Location: Agroinvestbank Branch in the Varzob District.',
    coordinates: '38°46\'39.3"N 68°49\'51.4"E'
  },
  buttons: {
    location: 'Location',
    contact: 'Contact Organizer'
  }
};


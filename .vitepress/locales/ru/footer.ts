import type { CustomConfig } from '../types'

const footer: CustomConfig['footer'] = {
  qrcodeTitle: 'Discord Server',
  qrcodeMessage: 'Contact us on discord',
  qrcodeLink: 'https://discord.gg/aFe57AKZUF',
  navigation: [
    {
      title: 'Информация о продукте',
      items: [
        {
          text: 'Руководство',
          link: '/manual/client/',
        },
        {
          text: 'История обновлений (клиент)',
          link: '/blog/hotupdatelog-client',
        },
        {
          text: 'История обновлений (web)',
          link: '/blog/changelog-web',
        },
      ],
    },
    {
      title: 'О нас',
      items: [
        {
          text: 'Примкнуть к нам',
          link: '/join',
        },
        {
          text: 'Блог',
          link: '/blog',
        },
        {
          text: 'Поддержите нас',
          link: '/support-us',
        },
      ],
    },
    {
      title: 'Правовая информация',
      items: [
        {
          text: 'Отказ от ответственности',
          link: '/disclaimer',
        },
        {
          text: 'Политика конфиденциальности',
          link: '/privacy',
        },
        {
          text: 'Соглашение',
          link: '/agreement',
        },
      ],
    },
    {
      title: 'Подробнее',
      items: [
        {
          text: 'Обратная связь',
          link: '/feedback/',
        },
        {
          text: 'Переводы',
          link: '/translations',
        },
        {
          text: 'Дружественные ресурсы',
          link: '/friends-links',
        },
      ],
    },
  ],
}

export default footer

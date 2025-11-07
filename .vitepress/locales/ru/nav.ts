import type { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: 'Сообщество',
    link: '/community',
  },
  {
    text: 'Поддержите нас',
    link: '/support-us',
  },
  {
    text: 'Информация о продукте',
    items: [
      {
        text: 'Клиент для Windows',
        items: [
          {
            text: 'Скачать',
            link: '/download-client',
          },
          {
            text: 'Руководство',
            link: '/manual/client/',
          },
          {
            text: 'История обновлений',
            link: '/blog/hotupdatelog-client',
          },
        ],
      },
      {
        text: 'Web - версия',
        items: [
          {
            text: 'Перейти',
            link: 'https://v3.yuanshen.site',
          },
          {
            text: 'История изменений',
            link: '/blog/changelog-web',
          },
        ],
      },
    ],
  },
  {
    text: 'Поддержка',
    items: [
      {
        text: 'Обратная связь',
        link: '/feedback/',
      },
      {
        text: 'Предложения по улучшению',
        link: '/feedback/feat',
      },
    ],
  },
  {
    text: 'Подробнее',
    items: [
      {
        text: 'Подробнее о нас',
        items: [
          {
            text: 'Примкнуть к нам',
            link: '/join',
          },
          {
            text: 'Наша команда',
            link: '/team',
          },
          {
            text: 'Блог',
            link: '/blog',
          },
        ],
      },
      {
        text: 'Помощь в развитии',
        items: [
          {
            text: 'Участники',
            link: '/staff',
          },
          {
            text: 'Участники спонсирования',
            link: '/support-us#sponsor-acknowledgement',
          },
          {
            text: 'Благодарности разработчикам',
            link: '/credits',
          },
        ],
      },
      {
        text: 'Другое',
        items: [
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
  },
]

export default nav

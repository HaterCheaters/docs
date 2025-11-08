import type { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.SidebarMulti = {
  '/manual': [
    {
      text: 'Содержание',
      link: '/manual/client/',
    },
    {
      text: 'Руководство',
      collapsed: false,
      items: [
        {
          text: 'Множественный выбор',
          link: '/manual/client/batch-selection',
        },
        {
          text: 'Скрытие/отображение меток',
          link: '/manual/client/hide-show-done',
        },
        {
          text: 'Режив оверлея (наложение)',
          link: '/manual/client/overlay-mode',
        },
        {
          text: 'Отслеживание',
          link: '/manual/client/position-tracking',
        },
        {
          text: 'Постороение маршрутов',
          link: '/manual/client/canvas',
        },
        {
          text: 'Режим полноэкранного окна',
          link: '/manual/client/fullscreen-windowed',
        },
        {
          text: 'Настрочка частоты кадров',
          link: '/manual/client/framerate',
        },
        {
          text: 'Восстановление сохранений',
          link: '/manual/client/save-restore',
        },
        {
          text: 'Пасхалка',
          link: '/manual/client/easter-egg',
        },
      ],
    },
    {
      text: 'Вопросы и ответы',
      collapsed: false,
      items: [
        {
          text: 'Могут ли меня забанить？',
          link: '/manual/faq/accountsafety/acntban',
        },
        {
          text: 'Автоматические оьновление на работает',
          link: '/manual/faq/autoupdate/updater',
        },
        {
          text: 'Ошибки установки',
          items: [
            {
              text: 'ошибка 2503',
              link: '/manual/faq/instlerror/code2503',
            },
            {
              text: 'какой-либо dll не был был найден',
              link: '/manual/faq/instlerror/missingdll',
            },
          ],
        },
        {
          text: 'Ошибки запуска',
          items: [
            {
              text: 'Пустое или зависщее окно',
              link: '/manual/faq/launcherror/emptydialog',
            },
            {
              text: '“Ошибки запроса данных”',
              link: '/manual/faq/launcherror/versioncheck',
            },
          ],
        },
        {
          text: 'Логин',
          items: [
            {
              text: 'Как войти в учётнуб запись',
              link: '/manual/faq/login/accountlogin',
            },
            {
              text: 'Приходиться каждый раз повторно входить',
              link: '/manual/faq/login/clientrepeatedly',
            },
          ],
        },
      ],
    },
  ],
}

export default sidebar

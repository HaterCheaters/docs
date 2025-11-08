import type { CustomConfig } from '../types'

const ui: CustomConfig['ui'] = {
  title: {
    templateMappings: [
      {
        test: /(^|\/?)manual\/client\/?/,
        template: ':title - Руководство | Таверна Kongying',
      },
    ],
  },
  banner: {
    wip: 'Эта страница находится в стадии разработки. Результат отображения не окончательный.',
  },
  button: {
    search: 'Поиск',
    submit: 'Отправить',
    cancel: 'Отмена',
    loading: 'Загрузка',
    close: 'Закрыть',
    all: 'Все',
  },
  sitemap: {
    blog: "Блог",
    manual: "Руководство",
    general: "Основное",
    api: "Докупментация API",
    guide: "Рекомендации",
    community: "Сообщество",
    about: "Подробнее",
  },
}

export default ui

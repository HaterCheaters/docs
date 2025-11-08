import type { CustomConfig } from '../types'

const Changelog: CustomConfig['changelog'] = {
  title: 'История изменений',
  reportIssues: 'Сообщить об ошибке %feedback',
  feedbackPage: 'Обратная связь',
  changeType: {
    features: 'Возможности',
    fixed: 'Исправлено',
    breaking: 'Изменения',
    optimized: 'Оптимизировано',
  },
  action: {
    download: 'Скачать',
    community: 'Сообщество',
  },
}

export default Changelog

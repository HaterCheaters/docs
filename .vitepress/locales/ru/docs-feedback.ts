import type { CustomConfig } from '../types'

const docReaction: CustomConfig['docReaction'] = {
  feedbackMsg: 'Эта ифнормация была полезна?',
  good: 'Да',
  bad: 'Нет',
  feedbackFailMsg: 'Не удалось отправить отзыв. Повторите попытку или свяжитесь с администратором（QQ：1961266616）!',
  feedbackSuccessMsg: 'Отзыв отправлен, спасибо за неравнодушие!',
  badFeedbackSuccessMsg: 'Пожалуйста, сообщите нам подробности',
  form: {
    chooseIssues: 'С какими трудностями вы столкнулись?',
    translationIssue: 'Некорректный перевод',
    typosIssue: 'Опечатки / ошибки пунктуации',
    contentImgLinkIssue: 'Ошибка формулировок, неверные изображения или нерабочие ссылки',
    feedbackDetail: 'Обратная связь / предложение по улучшению',
    feedbackTip: 'Пожалуйста подробно опишите проблему или предложение по улучшению.',
    otherIssue: 'Другие проблемы (пожалуйста, подробно опишите в отзыве)',
    contactWay: 'Контактная информация（опционально）',
    issueOptions: [
      { label: 'Ошибка отображения', value: 'CATA-DISPLAY' },
      { label: 'Опечатки / ошибки пунктуации', value: 'CATA-TYPOS' },
      { label: 'Неверный контент / неработающие ссылки', value: 'CATA-DOCS' },
      { label: 'Другие проблемы', value: 'CATA-OTHER' },
    ],
  },
}

export default docReaction

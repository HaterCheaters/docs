import type { LocaleSpecificConfig } from 'vitepress'
import C from './constants'

const head: LocaleSpecificConfig['head'] = [
  ['meta', { property: 'og:site_name', content: C.META_TITLE }],
  ['meta', { property: 'og:locale', content: C.LOCAL_CODE }],
  ["link", {rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"}],
  ["style", {}, "html:lang(ru) {--vp-font-family-base: 'Roboto';--vp-font-family-subtitle: 'HYWenHei-85W'}"]
]

export default head

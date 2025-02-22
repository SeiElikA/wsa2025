import { createI18n } from 'vue-i18n'
import en from './en';
import tw from './tw';

export const localeMessages = {
  en,
  tw,
}

export const i18n = createI18n({
  legacy: false, // Set legacy to false to use the Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages: localeMessages,
})

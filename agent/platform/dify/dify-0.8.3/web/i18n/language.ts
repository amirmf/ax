import data from './languages.json'
export type Item = {
  value: number | string
  name: string
  example: string
}

export type I18nText = {
  'en-US': string 
  'fa-IR': string
}

export const languages = data.languages

export const LanguagesSupported = languages.filter(item => item.supported).map(item => item.value)

export const getLanguage = (locale: string) => {
  if (locale === 'zh-Hans')
    return locale.replace('-', '_')

  return LanguagesSupported[0].replace('-', '_')
}

export const NOTICE_I18N = {
  title: {
    en_US: 'Important Notice', 
    fa_IR: 'هشدار مهم',
  },
  desc: {
    en_US:
      'Our system will be unavailable from 19:00 to 24:00 UTC on August 28 for an upgrade. For questions, kindly contact our support team (support@dify.ai). We value your patience.',
    fa_IR:
      'سیستم ما از ساعت 19:00 تا 24:00 UTC در تاریخ 28 اوت برای ارتقاء در دسترس نخواهد بود. برای سؤالات، لطفاً با تیم پشتیبانی ما (support@dify.ai) تماس بگیرید. ما برای صبر شما ارزش قائلیم.',
  },
  href: '#',
}

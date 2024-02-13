import { I18n } from 'i18n-js'

const i18n = new I18n({ 'en' : { 'hello_world' : 'Hello World' } })

console.log(i18n.t('hello_world'))

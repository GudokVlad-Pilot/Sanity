import {defineType} from 'sanity'

export default defineType({
  name: 'localeString',
  title: 'Localized String',
  type: 'object',
  fields: [
    {
      name: 'en',
      title: 'English',
      type: 'string',
    },
    {
      name: 'ru',
      title: 'Русский',
      type: 'string',
    },
    {
      name: 'fi',
      title: 'Suomi',
      type: 'string',
    },
  ],
})

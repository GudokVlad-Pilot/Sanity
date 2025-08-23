import {defineType} from 'sanity'

export default defineType({
  name: 'dictionary',
  title: 'Dictionary',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'phrase',
      title: 'Phrase',
      type: 'localeString',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title || 'No title',
      }
    },
  },
})

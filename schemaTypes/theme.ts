import {defineType} from 'sanity'

export default defineType({
  name: 'theme',
  title: 'Theme',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    },
    {
      name: 'colorSet',
      title: 'Color Set',
      type: 'themeColors',
      validation: (rule) => rule.required(),
    },
    
  ],
  preview: {
    select: {
      titleEn: 'title.en',
    },
    prepare(selection) {
      const {titleEn} = selection
      return {
        title: titleEn || 'No English title',
      }
    },
  },
})

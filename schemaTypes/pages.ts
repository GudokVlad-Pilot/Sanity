import {defineType} from 'sanity'

export default defineType({
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeString',
      // validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      // validation: (rule) => rule.required(),
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

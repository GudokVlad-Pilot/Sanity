import {defineType} from 'sanity'

export default defineType({
  name: 'food',
  title: 'Food',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      // validation: (rule) => rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      validation: (rule) => rule.required(),
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'ingredients'}],
        },
      ],
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

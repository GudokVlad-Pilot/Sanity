import {defineType} from 'sanity'

export default defineType({
  name: 'airports',
  title: 'Airports',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: (rule) => rule.required(),
    },
    {
      name: 'iata',
      title: 'IATA code',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'city',
      title: 'City',
      type: 'localeString',
      validation: (rule) => rule.required(),
    },
    {
      name: 'country',
      title: 'Country',
      type: 'localeString',
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

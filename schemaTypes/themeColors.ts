import {defineType} from 'sanity'

export default defineType({
  name: 'themeColors',
  title: 'themeColors',
  type: 'object',
  fields: [
    {
      name: 'primaryLight',
      title: 'Primary Light',
      type: 'color',
      validation: (rule) => rule.required(),
    },
    {
      name: 'primary',
      title: 'Primary',
      type: 'color',
      validation: (rule) => rule.required(),
    },
    {
      name: 'primaryDark',
      title: 'Primary Dark',
      type: 'color',
      validation: (rule) => rule.required(),
    },
    {
      name: 'secondary',
      title: 'Secondary',
      type: 'color',
      validation: (rule) => rule.required(),
    },
    {
      name: 'background',
      title: 'Background',
      type: 'color',
      validation: (rule) => rule.required(),
    },
    {
      name: 'basic',
      title: 'Basic',
      type: 'color',
      validation: (rule) => rule.required(),
    },
  ],
})

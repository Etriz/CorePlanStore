import {defineField, defineType} from 'sanity'

export const productType = defineType({
  title: 'Product',
  name: 'product',
  type: 'document',
  fields: [
    defineField({
      title: 'Product Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Product Images',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      title: 'Product Description',
      name: 'description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Square Feet',
      name: 'sqft',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Floors',
      name: 'floors',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Bedrooms',
      name: 'bedroomNum',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Bathrooms',
      name: 'bathroomNum',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Garage Stalls',
      name: 'garageNum',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Widtn',
      name: 'width',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Depth',
      name: 'depth',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Foundation Type',
      name: 'foundation',
      type: 'text',
      rows: 1,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Kitchen Features',
      name: 'kitchen',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Bedroom Features',
      name: 'bedroom',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Interior Features',
      name: 'interior',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Exterior Features',
      name: 'exterior',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Special Features',
      name: 'special',
      type: 'text',
      rows: 3,
    }),
    defineField({
      title: 'Product Slug',
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {source: 'name'},
    }),
    defineField({
      title: 'Product Price',
      name: 'price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Product Category',
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
      disableNew: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
})

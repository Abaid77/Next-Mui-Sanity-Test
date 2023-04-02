export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      option: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'Brand',
      name: 'brand',
      type: 'string',
      options: {
        list: [
          {title: 'Diamond-Envy', value: 'diamond-envy'},
          {title: 'Rado', value: 'Rado'},
        ],
      },
    },
    {
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Watch', value: 'watch'},
          {title: 'Jewelry', value: 'jewelry'},
          {title: 'Other', value: 'other'},
        ],
      },
    },
  ],
}

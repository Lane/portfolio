

import slugify from 'slugify';

/**
 * Return an array of link objects from a string array
 * @param {Array<string>} items 
 */
export const getLinks = (items) => {
  return items.map(
    (item) => ({ 
      url: '#' + slugify(item, { lower: true }), 
      text: item 
    })
  )
}
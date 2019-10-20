import React from 'react';
import classNames from 'classnames'

const ListItem = ({
  className,
  ...props
  }) => {
  return (
    <li 
      className={
        classNames(
          'list-item',
          className
        )
      } 
      {...props} />
  )
};

const List = ({
  tag = 'ul',
  className,
  links,
  vertical,
  inline,
  comma,
  ...props
  }) => {
  const Tag = tag;

  return (
    <Tag 
      className={
        classNames(
          'list',
          {
            'list--vertical': vertical,
            'list--inline': inline,
            'list--links': links,
            'list--comma': comma
          },
          className
        )
      } 
      {...props} />
  )
};

export default List;
export { List, ListItem };

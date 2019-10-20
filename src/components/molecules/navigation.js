import React from 'react'
import classNames from 'classnames';
import Link from '../atoms/link';
import List, { ListItem } from '../atoms/list';


const Navigation = ({
  links,
  active,
  className,
  LinkProps,
  ListProps,
  ListItemComponent = ListItem,
  ...props
  }) => {
  
  return (
    <nav className={classNames("navigation", className)} {...props}>
      <List {...ListProps} links>
        {
          links.map((link, i) =>
            <ListItemComponent key={i}>
              <Link
                active={active && active === link.text}
                activeClassName="link--active" 
                to={link.url}
                {...LinkProps}
              >
                { link.text }
              </Link>
            </ListItemComponent>
          )
        }
      </List>
    </nav>
  )
};

export default Navigation;

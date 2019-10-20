import React from 'react';
import classNames from 'classnames'

const Text = ({
  tag = 'p',
  size,
  className,
  alt,
  bold,
  light,
  caps,
  ...props
  }) => {
  const Tag = tag;

  return (
    <Tag 
      className={
        classNames(
          'text',
          {
            'text--heading': (tag[0] === 'h'),
            'text--caps': caps,
            'text--bold': bold,
            'text--light': light,
            'text--alt': alt,
            ['text--' + size]: size
          },
          className
        )
      } 
      {...props} />
  )
};

export default Text;

export const Title = (props) => <Text className="title" {...props} />
export const LeadText = (props) => <Text {...props} tag='p' size='bigger' />;
export const Caps = (props) => <Text {...props} caps/>;
export const MetaText = (props) => <Text {...props} size='small' caps/>;
export const Paragraph = (props) => <Text className="paragraph" {...props} />
export const AltParagraph = (props) => <Text {...props} tag='p' alt/>;
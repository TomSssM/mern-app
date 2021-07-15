import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Link as RouterLink } from 'react-router-dom';
import './Link.scss';
import { select } from '../../../shared/utils';

export const LINK_THEMES = ['default', 'none'];

const BaseLink = ({ to, children, ...rest }) => (
  <a {...rest} href={typeof to === 'string' ? to : undefined}>
    {children}
  </a>
);

// todo: use PropTypes and storybook

const Link = ({
  className,
  target,
  onClick: onClickHandler,
  theme: themeRaw,
  type = 'router',
  external = false,
  pseudo = false,
  nofocus = false,
  ...rest
}) => {
  let Tag = RouterLink;

  if (type === 'link' || pseudo) {
    Tag = BaseLink;
  }

  const theme = select(themeRaw, LINK_THEMES, 'default');
  const onClick = useCallback(
    e => {
      if (pseudo) {
        e.preventDefault();
      }
      onClickHandler?.(e);
    },
    [pseudo, onClickHandler],
  );

  return (
    <Tag
      tabIndex={nofocus ? -1 : 0}
      target={external ? '_blank' : target}
      className={classNames('Link', `Link_theme_${theme}`, className)}
      onClick={onClick}
      {...rest}
    />
  );
};

export default Link;

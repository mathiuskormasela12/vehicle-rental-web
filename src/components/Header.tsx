// ========== Header
// import all modules
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { IHeaderProps } from '../interfaces';

export const Header: React.FC<IHeaderProps> = (props) => {
  const { title } = props;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

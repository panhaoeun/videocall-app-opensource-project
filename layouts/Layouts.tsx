import React from 'react';
import { Footer } from './footer/Footer';
import { Headers } from './header/Header';

type Props = {
    title: string,
};

export const Layouts: React.FC<Props> = ({
    title,
    children,
  }) => (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
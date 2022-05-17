// =========== Button
// import all modules
import React from 'react';

interface IProps {
	children: React.ReactNode,
	onClick: any;
}

export const Button = ({ children, onClick }: IProps) => (
  <button type="submit" onClick={onClick}>{children}</button>
);

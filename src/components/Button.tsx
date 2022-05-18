// =========== Button
// import all modules
import React from 'react';

interface IProps {
	children: React.ReactNode,
	onClick: any;
}

export const Button: React.FC<IProps> = ({ children, onClick }) => (
  <button type="submit" onClick={onClick}>{children}</button>
);

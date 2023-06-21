import { ReactNode } from 'react';

export default interface ButtonProps {
  children?: string | JSX.Element | ReactNode | null;
  onClick: any;
}

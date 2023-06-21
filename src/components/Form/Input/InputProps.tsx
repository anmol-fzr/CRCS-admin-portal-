import { ReactNode } from 'react';

interface InputProps {
  icon?: string | JSX.Element | ReactNode | null;
  type: 'text' | 'number' | 'date' | 'password' | 'email';
  placeholder: string;
  label: string;
  name: string;
  register: Function | any;
  error: string | undefined | any;
}

export default InputProps;

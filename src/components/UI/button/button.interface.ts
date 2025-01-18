import { ReactNode } from 'react';

export interface ButtonProps {
  onclick: () => void;
  children: string | ReactNode;
}

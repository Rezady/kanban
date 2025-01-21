import { ComponentPropsWithoutRef, ReactNode } from "react";
import { FormValue } from "../../modules/form/_models";

type SizeTypes = "fit" | "full";

export interface CardProps {
  backgroundColor?: string;
  border?: boolean;
  children?: React.ReactNode;
  className?: string;
  size?: SizeTypes;
  borderColor?: string;
  onClick?: () => void;
}

export interface InputTypes extends ComponentPropsWithoutRef<"input"> {
  leftIcon?: ReactNode;
  error?: string;
  customClassName?: string;
  type?: string;
  label?: string;
  background?: string;
}

export interface ButtonTypes extends ComponentPropsWithoutRef<"button"> {
  title: string;
  background?: string;
  size?: SizeTypes;
}

export interface backgroundColorPropsType {
  gray: string;
  white: string;
  purple: string;
  black: string;
  red: string;
  green: string;
}

export interface DropddownTypes {
  multipleValue?: boolean;
  label?: string;
  data: FormValue[];
  onSelect: (selected: FormValue) => void;
  selected?: FormValue[] | FormValue;
  placeholder?: string;
}

export interface MenuTypes {
  user: string;
  children: ReactNode;
  background: string;
  onLogout: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  onProceed?: () => void;
}

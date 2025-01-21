import { FC } from "react";
import { backgroundColorPropsType, ButtonTypes } from "./core/types";
import clsx from "clsx";
import { backgroundColorProps } from "./core/const";

const Button: FC<ButtonTypes> = ({
  title,
  background = "purple",
  size = "fit",
  ...restProps
}) => {
  return (
    <button
      {...restProps}
      className={clsx(
        `rounded-lg text-white p-4 w-${size}`,
        backgroundColorProps[background as keyof backgroundColorPropsType]
      )}
    >
      {title}
    </button>
  );
};
export default Button;

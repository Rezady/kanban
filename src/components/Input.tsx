import { FC } from "react";
import { backgroundColorPropsType, InputTypes } from "./core/types";
import clsx from "clsx";
import { backgroundColorProps } from "./core/const";

const Input: FC<InputTypes> = ({
  leftIcon,
  error,
  customClassName,
  type = "text",
  label,
  background = "white",
  ...restProps
}) => {
  return (
    <div>
      {label && <p className="text-gray-600 text-sm mb-1">{label}</p>}
      <div
        className={clsx(
          `text-gray-900 w-full flex flex-col items-start justify-start border border-gray-600 rounded-lg p-2`,
          backgroundColorProps[background as keyof backgroundColorPropsType],
          customClassName
        )}
      >
        <div className="w-full">
          {leftIcon}
          <input
            className="w-full bg-transparent outline-none placeholder placeholder-gray00"
            type={type}
            {...restProps}
          />
        </div>
      </div>
      <span className="text-red-400 font-poppins text-sm mt-1">{error}</span>
    </div>
  );
};

export default Input;

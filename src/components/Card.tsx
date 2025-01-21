import clsx from "clsx";
import { FC } from "react";
import { CardProps } from "./core/types";

const Card: FC<CardProps> = ({
  backgroundColor = "bg-white",
  border = false,
  children,
  className,
  size = "fit",
  borderColor = "gray-600",
  onClick,
}) => {
  return (
    <div
      className={clsx(
        `w-${size} p-4 shadow-md rounded-[16px]`,
        backgroundColor,
        border ? `border border-${borderColor}` : "",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;

import clsx from "clsx";
import { FC } from "react";
import { backgroundColorProps } from "./core/const";
import { backgroundColorPropsType, MenuTypes } from "./core/types";
import ArrowDown from "./icons/ArrowDown";

const Menu: FC<MenuTypes> = ({ user, children, background, onLogout }) => {
  return (
    <div className="flex flex-col min-w-[100vw] min-h-[100vh]">
      <div
        className={clsx(
          "flex justify-between p-3",
          backgroundColorProps[background as keyof backgroundColorPropsType]
        )}
      >
        <h4>Kanban</h4>
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={onLogout}
        >
          Logout
          <ArrowDown />
        </div>
      </div>
      <div className="flex grow">
        <div
          className={clsx(
            "flex flex-col gap-4 p-4 min-w-[15vw]",
            backgroundColorProps[background as keyof backgroundColorPropsType]
          )}
        >
          tess
        </div>
        <div className="bg-gray-50 grow p-6">
          <p className="mb-4">Hi {user},</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Menu;

import clsx from "clsx";
import { FC } from "react";
import { backgroundColorProps, ListMenu } from "./core/const";
import { backgroundColorPropsType, MenuTypes } from "./core/types";
import ArrowDown from "./icons/ArrowDown";
import { NavLink, useNavigate } from "react-router-dom";

const Menu: FC<MenuTypes> = ({ user, children, background, onLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-w-[100vw] min-h-[100vh]">
      <div
        className={clsx(
          "flex justify-between py-6 px-3",
          backgroundColorProps[background as keyof backgroundColorPropsType]
        )}
      >
        <h4
          className="text-gray-50 text-3xl font-semibold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Kanban
        </h4>
        <div
          className="flex gap-2 items-center cursor-pointer text-gray-50 text-lg font-semibold"
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
          {ListMenu.map((menu, key) => (
            <NavLink
              to={menu.link}
              style={({ isActive }) => ({
                background: isActive ? "#570987" : "",
                opacity: isActive ? "0.6" : "",
              })}
              key={key}
              className="text-gray-50 text-lg cursor-pointer rounded-lg p-3 font-medium"
            >
              {menu.name}
            </NavLink>
          ))}
        </div>
        <div className="bg-gray-50 grow p-6">
          <p className="mb-4 text-purple-800 font-semibold text-2xl">
            Hi {user},
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Menu;

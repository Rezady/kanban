import { FC, useEffect, useRef, useState } from "react";
import { DropddownTypes } from "./core/types";
import clsx from "clsx";
import ArrowDown from "./icons/ArrowDown";
import { FormValue } from "../modules/form/_models";

const Dropdown: FC<DropddownTypes> = ({
  label,
  data,
  onSelect,
  selected,
  placeholder,
  multipleValue = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      pickerRef.current &&
      !pickerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  const handleDelete = (key: number) => {
    if (!multipleValue) return;
    return (selected as FormValue[]).splice(key, 1);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div ref={pickerRef} className="relative inline-block text-left ">
      {label && <p className="text-gray-600 text-sm mb-1">{label}</p>}
      <div>
        <button
          type="button"
          className={clsx(
            "outline-none border border-gray-600 inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-3 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300",
            (!selected ||
              (!(selected as FormValue[])?.length && multipleValue)) &&
              "text-gray-300"
          )}
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-3">
            {multipleValue && (selected as FormValue[]).length
              ? (selected as FormValue[]).map((value, key) => (
                  <div className="flex gap-1" key={key}>
                    <span>{value.label}</span>
                    <span onClick={() => handleDelete(key)}>X</span>
                  </div>
                ))
              : !multipleValue && selected && selected
              ? (selected as FormValue).label
              : placeholder}
          </div>
          <ArrowDown />
        </button>
      </div>
      {isOpen && (
        <div className="border border-gray-600 absolute right-0 z-10 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="py-1">
            {data.map((each, key) => (
              <span
                key={key}
                className="cursor-pointer block px-4 py-2 text-sm text-gray-700"
                onClick={() => onSelect(each)}
              >
                {each.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

import { create } from "zustand";
import { AuthTypes } from "./core/_models";
import { devtools, persist } from "zustand/middleware";

export const useAuth = create<AuthTypes>()(
  devtools(
    persist(
      (set) => ({
        user: "",
        setUser: (value: string) => set(() => ({ user: value })),
      }),
      { name: "user" }
    )
  )
);

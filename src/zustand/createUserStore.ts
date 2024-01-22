import { create } from "zustand";

type FormStore = {
  id: number;
  setId: (newId: number) => void;
  name: string;
  setName: (newName: string) => void;
  age: number;
  setAge: (newAge: number) => void;
  role: string;
  setRole: (newRole: string) => void;
  isEmployee: boolean;
  setIsEmployee: (newIsEmployee: boolean) => void;
  isUpdate: boolean;
  setIsUpdate: (newIsUpdate: boolean) => void;
};

export const useCounterStore = create<FormStore>((set) => ({
  id: 100,
  setId: (newId: number) => set({ id: newId }),
  name: "User",
  setName: (newName: string) => set({ name: newName }),
  age: 18,
  setAge: (newAge: number) => set({ age: newAge }),
  isEmployee: false,
  setIsEmployee: (newIsEmployee: boolean) => set({ isEmployee: newIsEmployee }),
  role: "Tester",
  setRole: (newRole: string) => set({ role: newRole }),
  isUpdate: false,
  setIsUpdate: (newIsUpdate: boolean) => set({ isUpdate: newIsUpdate }),
}));

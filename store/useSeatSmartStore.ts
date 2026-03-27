import { create } from "zustand";
import type { Classroom } from "../types";

type SeatSmartState = {
  classes: Classroom[];
  selectedClassId: string | null;
  addClass: (name: string) => void;
  selectClass: (id: string) => void;
};

export const useSeatSmartStore = create<SeatSmartState>((set) => ({
  classes: [],
  selectedClassId: null,
  selectClass: (classId) => set({ selectedClassId: classId }),
  addClass: (name) =>
  set((state) => {
    const newClass : Classroom = {
      id: crypto.randomUUID(),
      name,
      layoutType: "grid",
      rows: 5,
      cols: 5,
      frontDirection: "top",
      students: [],
      seats: [],
      charts: [],
    };

    return {
      classes: [...state.classes, newClass],
      selectedClassId: state.selectedClassId ?? newClass.id,
    };
  }),
}));
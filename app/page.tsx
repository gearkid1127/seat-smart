"use client";

import AppShell from "./components/layout/AppShell";
import { useSeatSmartStore } from "../store/useSeatSmartStore";

export default function Home() {
  const classes = useSeatSmartStore((state) => state.classes);
  const selectedClassId = useSeatSmartStore((state) => state.selectedClassId);
  const selectClass = useSeatSmartStore((state) => state.selectClass);
  const addClass = useSeatSmartStore((state) => state.addClass);

    const selectedClass = classes.find(
    (classroom) => classroom.id === selectedClassId
  );

  return (
    <AppShell
      sidebar={
        <div className="p-4">
          <h2 className="text-lg font-semibold">Classes</h2>

          <button
            onClick={() => addClass(`Class ${classes.length + 1}`)}
            className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-sm text-white"
          >
            Add Class
          </button>

          <div className="mt-4 space-y-2">
            {classes.map((classroom) => (
              <div
                key={classroom.id}
                className="rounded-md border border-slate-200 px-3 py-2"
              >
                {classroom.name}
              </div>
            ))}
          </div>
        </div>
      }
      topbar={
        <div className="flex h-full items-center px-4">
          <h1 className="text-xl font-semibold">SeatSmart</h1>
        </div>
      }
    >
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8">
        <p className="text-slate-600">Main workspace</p>
      </div>
    </AppShell>
  );
}
import AppShell from "./components/layout/AppShell";

export default function Home() {
  return (
    <AppShell
      sidebar={
        <div className="p-4">
          <h2 className="text-lg font-semibold">Classes</h2>
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
type AppShellProps = {
  sidebar: React.ReactNode;
  topbar?: React.ReactNode;
  children: React.ReactNode;
};

export default function AppShell({
  sidebar,
  topbar,
  children,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <aside className="w-72 shrink-0 border-r border-slate-200 bg-white">
        {sidebar}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="h-16 border-b border-slate-200 bg-white">
          {topbar}
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
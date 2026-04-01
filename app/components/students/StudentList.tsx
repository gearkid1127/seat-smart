type StudentListProps = {
  className: string;
  studentCount: number;
};

export default function StudentList({
  className,
  studentCount,
}: StudentListProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">Students</h2>
          <p className="text-sm text-slate-500">{className}</p>
        </div>

        <div className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700">
          {studentCount} students
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-dashed border-slate-300 p-6 text-sm text-slate-500">
        No students added yet.
      </div>
    </section>
  );
}
import Sidebar from "@/components/Sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="pt-4 px-2">
      <div className="flex gap-x-7 bg-blue-900 w-64">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;

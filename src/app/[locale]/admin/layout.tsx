import { createClient } from "@/shared/lib/supabase/server";
import { AdminSidebar } from "@/widgets/AdminSidebar";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  // Page login — pas de sidebar
  return (
    <div className="flex min-h-screen ">
      <AdminSidebar locale={locale} userEmail={session?.user?.email} />
      <main className="flex-1 bg-background overflow-auto">
        {children}
      </main>
    </div>
  );
}

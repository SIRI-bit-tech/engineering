import { LenisProvider } from "@/components/layout/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </LenisProvider>
  );
}

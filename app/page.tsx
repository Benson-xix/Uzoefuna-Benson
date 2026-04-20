export const revalidate = 0;
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import MidSection from "./component/MidSection";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <NavBar />

      <div className="container mx-auto px-4 pt-32 pb-0">
        <Hero />
        <MidSection />
      </div>

      <Footer />
    </main>
  );
}
export const revalidate = 0;
import AboutSection from "./component/AboutSection";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import NavBar from "./component/NavBar";
import MidSection from "./component/MidSection";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar/>
    <div className="container mt-[8rem]  mx-auto py-5 px-12">
    <Hero/>
    
    <MidSection/>
    </div>
    
    <Footer/>
    </main>
  )
}

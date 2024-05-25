import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import TypeCourses from "@/components/TypeCourses";
import { MasonryGridGallery } from "@/constant";

export default function Home() {
  return (
    <main className='w-full relative'>
      <Navbar />
      <HeroBanner />
      <TypeCourses />
      <Footer />
    </main>
  );
}

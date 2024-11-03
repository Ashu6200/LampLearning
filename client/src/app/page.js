import Article from "@/components/layout/Article";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/layout/HeroBanner";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className='w-full relative'>
      <Navbar />
      <HeroBanner />
      <Article />
      <Footer />
    </main>
  );
}

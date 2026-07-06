import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Recognition from '@/components/sections/Recognition';
import Process from '@/components/sections/Process';
import Stories from '@/components/sections/Stories';
import Founder from '@/components/sections/Founder';
import Partners from '@/components/sections/Partners';
import Vision from '@/components/sections/Vision';
import Mission from '@/components/sections/Mission';

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Recognition />
      <Process />
      <Stories />
      <Founder />
      <Partners />
      <Vision />
      <Mission />
    </main>
  );
}

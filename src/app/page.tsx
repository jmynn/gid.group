import About from '@/components/views/About';
import Main from '@/components/views/Main';
import Price from '@/components/views/Price';
import Projects from '@/components/views/Projects';
import Services from '@/components/views/Services';
import Stages from '@/components/views/Stages';

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Price />
      <Services />
      <Projects />
      <Stages />
    </>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Menu from './components/Menu';
import Signatures from './components/Signatures';
import Chef from './components/Chef';
import Wine from './components/Wine';
import Reviews from './components/Reviews';
import Visit from './components/Visit';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Menu />
        <Signatures />
        <Chef />
        <Wine />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

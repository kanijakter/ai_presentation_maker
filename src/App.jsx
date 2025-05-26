
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GetStarted from './components/GetStarted';
import Feature from './components/Feature'
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GetStarted />
        <Feature />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
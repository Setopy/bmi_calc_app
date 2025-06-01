import React from 'react';
import Hero from './components/ui/Hero';
import Steps from './components/ui/Steps';
import Aboutus  from './components/ui/Aboutus';
import Blogs from './components/ui/Blogs';
import FAQ from './components/ui/FAQ';
import Footer from './components/ui/Footer';


const App = () => {
  return (
    <div>
      <Hero/>
      <Steps/>
      <Aboutus/>
      <Blogs/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;

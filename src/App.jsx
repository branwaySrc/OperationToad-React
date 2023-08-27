import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react'
import React, { useEffect, useState } from "react";

import {
  MainPage,
  WebSolution,
  DesignSolution,
  MarketingSolution,
  ContactUs,
  Footer
}
from './sections';

import Nav from './components/Nav'


const App = () => {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoaded(true); // Set isLoaded to true when content is ready
    }, 3000); // Adjust the time as needed

    // Fetch your data and perform other async operations here
  }, []);

  return (
    <BrowserRouter>
      <main className="bg-black relative z-0 text-white font-pretendardB break-keep">
        <nav>
          <Nav></Nav>
        </nav>
        <section>
          <MainPage></MainPage>
        </section>
        <section>
          <WebSolution></WebSolution>
        </section>
        <section>
          <DesignSolution></DesignSolution>
        </section>
        <section>
          <MarketingSolution></MarketingSolution>
        </section>
        <section>
          <ContactUs></ContactUs>
        </section>
        <section>
          <Footer></Footer>
        </section>
        <Analytics></Analytics>
      </main>
    </BrowserRouter>
  );
}

export default App;

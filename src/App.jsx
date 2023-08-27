import { BrowserRouter } from 'react-router-dom';

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
      </main>
    </BrowserRouter>
  );
}

export default App;

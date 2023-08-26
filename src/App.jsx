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


const App = () => (
    <main className="bg-black relative text-white font-pretendardB break-keep">
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
);

export default App;

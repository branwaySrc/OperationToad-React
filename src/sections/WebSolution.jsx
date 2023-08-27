import {ContentHeader,EmphasizeWord} from '../components/ContentHeader'
import {StyledNumber,AnchorBtn} from '../components/StyledComponent'
import {Cards,StackList} from '../components/Cards'
import { WsText } from '../components/SectionText'
import ComputersCanvas from '../components/canvas/Computers'

const WebSolution = () => {
  return (
    <div className='mt-[50px] relative flex flex-col items-center'>
      <div>
        <StyledNumber
          bg1='bg-gradient-to-t from-cyan-400 from-10% via-cyan-800 via-25% to-black to-80%'
          bg2='bg-gradient-to-tr from-emerald-400 to-cyan-400'
          number='1'>  
        </StyledNumber>
      </div>
      <div>
        <ContentHeader
          category= {WsText.headerCategory}
          fontColor='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'
          titleRow= {WsText.headerTitle}
          contentRow= {WsText.headerQuote}
          >
        </ContentHeader>
      </div>
      <div className='h-[900px] w-[1380px] mt-[-150px]'>
          <ComputersCanvas></ComputersCanvas>
        </div>
      <div className='relative flex items-center justify-center'>
        <div className='xm:mt-[-00px] sm:mt-[-300px] lg:mt-[-100px] '>
          <section className='flex flex-wrap gap-10 items-center justify-center'>
            <div className='w-[480px]'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#00E1FF62]'
                title={WsText.imTitle}
                logo='../src/assets/img/imweb.svg'
                description={WsText.imDescription}
                price={WsText.imPrice}
                link='자세히보기 >'
                url='javascript:void(0)'
                >
              </Cards>
              <StackList
              layout='mt-7 text-left flex flex-col items-left'
              title={WsText.imContentTitle}
              images={[
                '../src/assets/img/stacks/Figma.svg',
                '../src/assets/img/stacks/illustrator.svg',
                '../src/assets/img/stacks/Photoshop.svg'

              ]}></StackList>
            </div>
            <div className='w-[480px]'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#00E1FF62]'
                title={WsText.gnuTitle}
                logo='../src/assets/img/gnu.svg'
                description={WsText.gnuDescription}
                price= {WsText.gnuPrice}
                link='자세히보기 >'
                url='javascript:void(0)'
                >
              </Cards>
              <StackList
              layout='mt-7 text-left flex flex-col items-left'
              title={WsText.gnuContentTitle}
              images={[
                '../src/assets/img/stacks/Youngcart.png',
                '../src/assets/img/stacks/SQL.png',
                '../src/assets/img/stacks/Cafe24.png',
                '../src/assets/img/stacks/Figma.svg',
                '../src/assets/img/stacks/illustrator.svg',

              ]}></StackList>
            </div>
            <div className='w-[480px]'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#00E1FF62]'
                title={WsText.fullstackTitle}
                logo='../src/assets/img/react.svg'
                description={WsText.fullstackDescription}
                price={WsText.fullstackPrice}
                link='자세히보기 >'
                url='javascript:void(0)'
                >
              </Cards>
              <StackList
              layout='mt-7 text-left flex flex-col items-left'
              title={WsText.fullstackContentTitle}
              images={[
                '../src/assets/img/stacks/Figma.svg',
                '../src/assets/img/react.svg',
                '../src/assets/img/stacks/Nextjs.png',
                '../src/assets/img/stacks/Nodejs.png',
                '../src/assets/img/stacks/Mongodb.png',
                '../src/assets/img/stacks/SQL.png',
                '../src/assets/img/stacks/firebase.png',

              ]}></StackList>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default WebSolution
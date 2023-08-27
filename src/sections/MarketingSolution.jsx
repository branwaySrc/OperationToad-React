import { StyledNumber } from '../components/StyledComponent';
import { ContentHeader } from '../components/ContentHeader';
import { Cards,StackList } from '../components/Cards';
import { MsText } from '../components/textData';

const MarketingSolution = () => {
  return (
    <div className='mt-40'>
      <div>
        <StyledNumber
          bg1='bg-gradient-to-t from-pink-500 from-10% via-amber-800 via-20% to-black to-80%'
          bg2='bg-gradient-to-tr from-amber-500 to-pink-500'
          number='3'>  
        </StyledNumber>
      </div>
      <div>
        <ContentHeader
          category={MsText.headerCategory}
          fontColor='bg-gradient-to-tr from-amber-500 to-pink-500 bg-clip-text text-transparent'
          titleRow={MsText.headerTitle}
          contentRow={MsText.headerQuote}
          >
        </ContentHeader>
      </div>
      <div>
      </div>
      <div className='relative'>
        <div className='flex justify-between max-w-6xl mx-auto my-0'>
          <section className='flex flex-col gap-20 pr-10'>
            <div className='w-[480px] mt-40'>
              <div className='mb-20'>
                <h1>{MsText.contentTitle}</h1>
                <h3>{MsText.contentSubtitle}</h3>
                <p>{MsText.contentInfo}</p>
              </div>
                <Cards
                  hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#FF480062]'
                  title={MsText.instagramCardTitle}
                  logo='./imweb.svg'
                  description={MsText.instagramCardInfo}
                  price={MsText.instagramCardPrice}
                  link='자세히보기 >'
                  url=''
                  >
                </Cards>
            </div>
              <div className='mb-20'>
                <Cards
                  hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#FF480062]'
                  title={MsText.twitterCardTitle}
                  logo='./imweb.svg'
                  description={MsText.twitterCardInfo}
                  price={MsText.twitterCardPrice}
                  link='자세히보기 >'
                  url=''
                  >
                </Cards>
              </div>
          </section>
          <section>
          </section>
        </div>
      </div>
    </div>
  )
}

export default MarketingSolution
import { ContentHeader, EmphasizeWord } from '../components/ContentHeader'
import { StyledNumber,AnchorBtn } from '../components/StyledComponent'
import { Cards,StackList } from '../components/Cards'
import { DsText } from '../components/SectionData'
import MyDesign from '../components/canvas/DesignPlayer'

const DesignSolution = () => {
  return (
    <div className='mt-60'>
      <div>
        <StyledNumber
          bg1='bg-gradient-to-t from-cyan-600 from-10% via-cyan-800 via-25% to-black to-80%'
          bg2='bg-gradient-to-tr from-fuchsia-500 to-cyan-500'
          number='2'/>
      </div>
      <div>
        <ContentHeader
          category={DsText.headerCategory}
          fontColor='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'
          titleRow={DsText.headerTitle}
          contentRow={DsText.headerQuote}
        />
      </div>
      <div className='h-[250px] mt-20 mb-10'>
        <MyDesign></MyDesign>
      </div>
      <div className='relative'>
        <div className='flex justify-center max-w-6xl mx-auto my-0'>
          <section className='flex flex-wrap gap-10 items-center mt-10 justify-center'>
          <div className='w-[480px]'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#B700FF62]'
                title={DsText.catalogCardTitle}
                logo='./imweb.svg'
                description={DsText.catalogCardInfo}
                price={DsText.catalogPrice}
                link='자세히보기 >'
                url=''
                >
              </Cards>
              <StackList
              layout='mt-7 text-right flex flex-col items-end'
              title={DsText.catalogStackTitle}
              images={[
                './Figma.svg',
                './Illustrator.svg',
                './Photoshop.svg'

              ]}></StackList>
            </div>
            <div className='w-[480px]'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#B700FF62]'
                title={DsText.uiuxCardTitle}
                logo='./gnu.svg'
                description={DsText.uiuxCardInfo}
                price={DsText.uiuxCardPrice}
                link='자세히보기 >'
                url=''
                >
              </Cards>
              <StackList
              layout='mt-7 text-right flex flex-col items-end'
              title={DsText.uiuxStackTitle}
              images={[
                './Youngcart.svg',
                './Figma.svg',
                './Cafe24.svg',
                './Figma.svg',
                './Illustrator.svg',

              ]}></StackList>
            </div>
          </section>
        </div>
      </div>
      

    </div>
  )
}

export default DesignSolution
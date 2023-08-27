import { ContentHeader, EmphasizeWord } from '../components/ContentHeader'
import { StyledNumber,AnchorBtn } from '../components/StyledComponent'
import { Cards,StackList } from '../components/Cards'
import { DsText } from '../components/SectionText'

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
      <div className='relative'>
        <div className='flex justify-between max-w-6xl mx-auto my-0'>
          <section></section>
          <section className='flex flex-col gap-20 pr-10'>
          <div className='w-[480px] mt-40'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#B700FF62]'
                title={DsText.catalogCardTitle}
                logo='../src/assets/img/imweb.svg'
                description={DsText.catalogCardInfo}
                price={DsText.catalogPrice}
                link='자세히보기 >'
                url='javascript:void(0)'
                >
              </Cards>
              <StackList
              layout='mt-7 text-right flex flex-col items-end'
              title={DsText.catalogStackTitle}
              images={[
                '../src/assets/img/stacks/Figma.svg',
                '../src/assets/img/stacks/illustrator.svg',
                '../src/assets/img/stacks/Photoshop.svg'

              ]}></StackList>
            </div>
            <div className='w-[480px]'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#B700FF62]'
                title={DsText.uiuxCardTitle}
                logo='../src/assets/img/gnu.svg'
                description={DsText.uiuxCardInfo}
                price={DsText.uiuxCardPrice}
                link='자세히보기 >'
                url='javascript:void(0)'
                >
              </Cards>
              <StackList
              layout='mt-7 text-right flex flex-col items-end'
              title={DsText.uiuxStackTitle}
              images={[
                '../src/assets/img/stacks/Youngcart.png',
                '../src/assets/img/stacks/SQL.png',
                '../src/assets/img/stacks/Cafe24.png',
                '../src/assets/img/stacks/Figma.svg',
                '../src/assets/img/stacks/illustrator.svg',

              ]}></StackList>
            </div>
          </section>
        </div>
      </div>
      

    </div>
  )
}

export default DesignSolution
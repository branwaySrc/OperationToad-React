import {ContentHeader,EmphasizeWord} from '../components/ContentHeader'
import { StyledNumber,AnchorBtn } from '../components/StyledComponent'
import Cards from '../components/Cards'


const WebSolution = () => {
  return (
    <div className='mt-40'>
      <div>
        <StyledNumber
          bg1='bg-gradient-to-t from-cyan-400 from-10% via-cyan-800 via-25% to-black to-80%'
          bg2='bg-gradient-to-tr from-emerald-400 to-cyan-400'
          number='1'>  
        </StyledNumber>
      </div>
      <div>
        <ContentHeader
          category='웹/앱 제작 솔루션'
          fontColor='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'
          titleRow1='온라인 서비스를 개발하는 작전 프로토콜'
          contentRow1='다양한 솔루션을 통해 원하는 서비스를 구현 및 운영 하실 수 있는'
          contentRow2= {
            <>
              <EmphasizeWord>두꺼비만의 가격폭파 작전 프로토콜입니다.</EmphasizeWord>
            </>
            }
          >
        </ContentHeader>
      </div>
      <div className='relative'>
      <div className='bg-white absolute top-[200px] left-1/2 translate-x-[-50%] translate-y-[-50%] h-[200px] w-[200px] '></div>
        <div className='flex justify-between max-w-6xl mx-auto my-0'>
          <section>1</section>
          <section>2</section>
          <section className='flex flex-col gap-20'>
            <div className='w-[480px] mt-40'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#00E1FF62]'
                title='아임웹 솔루션 활용'
                logo=''
                description='아임웹 솔루션을 활용하여 매달 저렴한 고정비용으로 이커머스, 브랜드
                사이트 등, 다양한 장르의 서비스를 운영하실 수 있습니다. 하지만,
                원하시는 디자인 커스터마이징의 제한이 있을 수 있습니다.'
                price='최소 50만원부터~'
                link='자세히보기 >'
                url='javascript:void(0)'
                >
              </Cards>
            </div>
            <div className='w-[480px]'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#00E1FF62]'
                title='그누보드 솔루션 활용'
                logo=''
                description='그누보드 솔루션을 활용하여 보다 넓은 커스터마이징 기능을 구현할 수
                있습니다. 이커머스, 브랜드 사이트 등, 다양한 서비스 운영이 가능합니다.
                하지만, 직접 개발비 및 유지보수 비용이 발생할 수 있습니다.'
                price='최소 100만원부터~'
                link='자세히보기 >'
                url='javascript:void(0)'
                >
              </Cards></div>
            <div className='w-[480px]'>
              <Cards
                hover='transition ease-in hover:drop-shadow-[0px_0px_10px_#00E1FF62]'
                title='풀스택 자체개발'
                logo=''
                description='직접 개발을 통해 원하는 모든 기능들을 구현할 수 있습니다. 기획,
                디자인, 서비스 구현까지 풀패키지 서비스를 운영합니다. 하지만,
                개발언어에 따라 기간이 상이하며, 장기간 소요됩니다.'
                price='최소 300만원부터~'
                link='자세히보기 >'
                url='javascript:void(0)'
                >
              </Cards></div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default WebSolution
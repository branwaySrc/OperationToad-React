import { StyledNumber,AnchorBtn } from '../components/StyledComponent'
import { ContentHeader,EmphasizeWord } from '../components/ContentHeader'

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
          category='마케팅 솔루션'
          fontColor='bg-gradient-to-tr from-amber-500 to-pink-500 bg-clip-text text-transparent'
          titleRow1='인스타그램 브랜드 스토리 마케팅 작전'
          contentRow1='잠재고객은 광고가 아니라 무의식으로 침투해야합니다.'
          contentRow2= {
            <>
              <EmphasizeWord>이해하기 쉬운 콘텐츠로</EmphasizeWord>{''}
              통해 정보를 전달하고 <EmphasizeWord>의지할 수 있는 브랜드로</EmphasizeWord>{''}
              신뢰와 소통을 유지합니다.
            </>
            }
          >
        </ContentHeader>
      </div>
    </div>
  )
}

export default MarketingSolution
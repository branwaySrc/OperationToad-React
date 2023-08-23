import { ContentHeader, EmphasizeWord } from '../components/ContentHeader'
import { StyledNumber,AnchorBtn } from '../components/StyledComponent'

const DesignSolution = () => {
  return (
    <div className='mt-40'>
      <div>
        <StyledNumber
          bg1='bg-gradient-to-t from-cyan-600 from-10% via-cyan-800 via-25% to-black to-80%'
          bg2='bg-gradient-to-tr from-fuchsia-500 to-cyan-500'
          number='2'/>
      </div>
      <div>
        <ContentHeader
          category='디자인 솔루션'
          fontColor='bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent'
          titleRow1='아이디어를 표현하는 디자인 작전 프로토콜'
          contentRow1={
          <>
            서비스 스토리보드, UIUX디자인, 카달로그, 사업계획서, 지원사업 발표자료 등 <EmphasizeWord>두꺼비만의 디자인 작전</EmphasizeWord>으로 표현하다.
            <EmphasizeWord>아이디어는 디자인으로 통해 전달하고 세부내용은 카피라이팅</EmphasizeWord>으로 보는 사람들의 뇌리에 침투합니다.
          </>
          }
        />
      </div>
    </div>
  )
}

export default DesignSolution
import Partners from '../components/Partners'

const MainPage = () => {
  return (
    <main>
      <div className='grid'>
        <div className='mt-[100px] h-[530px] font-pretendardBB text-center flex items-center justify-center flex-col'>
          <h3 className='text-fff text-6xl leading-tight'>우리들의<br></br>작전 프로토콜</h3>
          <h1 className='text-fff mt-5 text-9xl'>선보이다</h1>
          <div className='text-center'>
            <p className='font-pretendardB mt-[80px] text-xl text-gray100'>우리의 작전은 고객이 닿는 모든 곳에 침투하는 것. 
              이것이 바로 작전명 두꺼비 프로토콜입니다.<br></br>
              파트너 뒤에서 기획하고, 만들고, 선보이는 감각적인 센스가 우리만의 전략입니다.
            </p>
          </div>
        </div>
        <div className='h-[450px] flex flex-col gap-24 items-center'>
          <div className='h-16 flex justify-center gap-4 items-center'>
          <button className='px-[80px] h-14 border rounded-lg bg-fff text-gray200 font-pretendardBB'>
            매체소개서 보기 
          </button>
          <div className='flex items-center justify-center 
          bg-gradient-to-br from-[#ae34ff] via-[#FF0000] to-[#FCB045]
          px-[2px] py-[3px] drop-shadow-[0px_0px_20px_#FF000095]
          rounded-lg'>
            <button className='px-[80px] h-[54px] rounded-md bg-black'>
              <p className='text-fff font-pretendardBB'>솔루션 문의하기</p> 
            </button>
          </div>
          </div>
          <div>
            <Partners></Partners>
          </div>
        </div>
      </div>
      
    </main>
  )
}

export default MainPage
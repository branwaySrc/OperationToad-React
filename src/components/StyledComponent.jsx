const StyledNumber = ({ bg1,bg2,number }) => {
  const layoutStyles = 'flex flex-col justify-center items-center text-center';

  return (
    <div className='mb-12'>
      <div className={layoutStyles}>
        <div className={`flex justify-center w-1 h-20 mb-[-1px]
        ${bg1}`}></div>
        <div className={`flex items-center justify-center rounded-full w-[60px] h-[60px] 
        ${bg2}`}>
          <h1 className='text-black text-3xl'>{number}</h1>
        </div>
      </div>
    </div>
  );
};

const AnchorBtn = () => {
  return (
    <div>
      <div className='h-[250px] flex justify-center flex-col text-center gap-8'>
        <p className='text-gray100 tracking-widest'>
          작전명두꺼비의 제공 솔루션 프로토콜을 소개합니다.
        </p>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center text-gray100 px-2 py-2 border-4 rounded-2xl border-gray200'>
            <div className='grid grid-cols-3 gap bg-gray300 rounded-lg border border-gray200'>
              <a className='px-8 py-3 rounded-l-lg
              hover:bg-gray200 transition ease-in hover:text-fff' 
                href='javascript:void(0)'>웹제작 솔루션 보기</a>
              <a className='px-8 py-3
              hover:bg-gray200 transition ease-in hover:text-fff' 
                href='javascript:void(0)'>카달로그 디자인 솔루션 프로토콜</a>
              <a className='px-8 py-3 rounded-r-lg
              hover:bg-gray200 transition ease-in hover:text-fff' 
                href='javascript:void(0)'>인스타그램 관리 솔루션 프로토콜</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export { StyledNumber, AnchorBtn} ;
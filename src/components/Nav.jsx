const Nav = () => {
  return (
    <header className='relative text-sm font-pretendardB'>
      <nav className='fixed z-10 bg-black border-b border-gray200 bg-opacity-80 
        backdrop-blur top-0 left-0 right-0 flex flex-col items-center justify-center'>
        <div className='w-screen max-w-screen-xl'>
        <div className="flex justify-between px-4 py-1 items-center">
          <div className="px-16 py-7 bg-center  bg-contain bg-no-repeat  bg-[url('./public/toad_logo.svg')]"></div>
          <div className="flex text-gray100 gap-8">
            <a className="transition ease-in duration-200 hover:text-fff px-4 py-2" href="javascript:void(0)">개발솔루션</a>
            <a className="transition ease-in duration-200 hover:text-fff px-4 py-2" href="javascript:void(0)">디자인솔루션</a>
            <a className="transition ease-in duration-200 hover:text-fff px-4 py-2" href="javascript:void(0)">마케팅솔루션</a>
          </div>
          <div>
            <div className="flex px-4 py-2 border-solid border border-gray200 rounded-lg text-gray100 gap-8 bg-line">
              <a className="transition ease-in duration-200 hover:text-fff px-4 py-2" href="javascript:void(0)">회사소개</a>
              <a className="transition ease-in duration-200 hover:border-gray100 hover:text-fff hover:bg-gray200 text-gray200 px-4 py-2 border bg-fff rounded-md" href="javascript:void(0)">문의하기</a>
            </div>
          </div>
        </div>
        </div>
      </nav>
      <div className='relative top-[66px] flex z-0 bg-gray200 justify-center p-3'>
        <p className='text-sm'>
          지금은 과부하로 인하여 더이상 서비스를 받을 수 없습니다.
          최대 2주간 예약이 완료되었습니다. 성원에 감사드립니다 :)
        </p>
      </div>
    </header>
  )
}

export default Nav
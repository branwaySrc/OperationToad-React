const Partners = () => {
  return (
    <div className='flex flex-col gap-10 text-center'>
      <p className='text-gray100 tracking-widest'>작전명두꺼비와 함꼐 작전을 펼친 영원한 파트너</p>
      <div className='grid grid-rows-2 h-[150px]'>
        <div className='flex items-center justify-center gap-8'>
          <span className="bg-contain bg-no-repeat px-[80px] py-[20px] bg-center bg-[url('./assets/partners/AlibabaCloud.svg')]"></span>
          <span className="bg-contain bg-no-repeat px-[80px] py-[20px] bg-center bg-[url('./assets/partners/DigitalOcean.svg')]"></span>
          <span className="bg-contain bg-no-repeat px-[80px] py-[20px] bg-center bg-[url('./assets/partners/GoogleCloud.svg')]"></span>
          <span className="bg-contain bg-no-repeat px-[80px] py-[20px] bg-center bg-[url('./assets/partners/IBMCloud.svg')]"></span>
          <span className="bg-contain bg-no-repeat px-[80px] py-[20px] bg-center bg-[url('./assets/partners/Microsoft.svg')]"></span>
        </div>
        <div className='flex items-center justify-center gap-6'>
          <span className="bg-contain bg-no-repeat px-[80px] py-[20px] bg-center bg-[url('./assets/partners/OracleCloud.svg')]"></span>
          <span className="bg-contain bg-no-repeat px-[80px] py-[20px] bg-center bg-[url('./assets/partners/Rackspace.svg')]"></span>
          <span className="bg-contain bg-no-repeat px-[80px] py-[20px] bg-center bg-[url('./assets/partners/Tencent.svg')]"></span>
          <span className="bg-contain bg-no-repeat px-[80px] py-[16px] bg-center bg-[url('./assets/partners/Vultr.svg')]"></span>
        </div>
      </div>
    </div>
  )
}

export default Partners
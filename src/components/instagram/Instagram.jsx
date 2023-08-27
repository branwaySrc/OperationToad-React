import InstagramComponents from './InstagramContents';
import './instagram.css';

const Instagram = () => {
  return (
    <div className='flex items-center justify-center z-0'>
      <div className='bg-[#0e0e0e] h-[927px] w-[468px] border border-gray200 rounded-[78px] flex items-center justify-center'>
        <div className='relative flex flex-col justify-between bg-[#121212] h-[887px] w-[428px] rounded-[60px]'>
          <section className='flex flex-col gap-3 justify-center h-[116px] rounded-t-[60px] border-b border-gray200'>
            <div className='flex items-center justify-center'>
              <div className='flex flex-cols gap-1 items-center h-7 justify-center bg-black w-[140px] border border-gray200 rounded-full mt-2'>
                <div className=' h-3 w-3 m-1 rounded-full bg-[#101010]'> </div>
                <div className=' h-3 w-3 m-1 rounded-full bg-[#101010]'> </div>
                <div className=' h-3 w-3 m-1 rounded-full bg-[#101010]'> </div>
              </div>
            </div>
            <div>
              <div className='items-center flex justify-between w-[428px] h-[60px]'>
                <div className='pl-1'>
                  <div 
                    className='h-10 w-40 bg-no-repeat bg-center bg-contain'
                    style={{
                      backgroundImage: 'url("./public/content/instagram.svg")'
                  }}/>
                </div>
                <div className='flex gap-5 pr-4'>
                <div 
                  className='h-8 w-8 bg-no-repeat bg-center bg-contain'
                  style={{
                    backgroundImage: 'url("./public/content/heart.svg")'
                }}/>
                <div 
                  className='h-8 w-8 bg-no-repeat bg-center bg-contain'
                  style={{
                    backgroundImage: 'url("./public/content/send.svg")'
                }}/>
                </div>
              </div>
            </div>
          </section>
          <section className='instagram-body'>
            <InstagramComponents>

            </InstagramComponents>
          </section>
          <section className='border-t h-[110px] border-gray200 flex flex-col gap-5 justify-between items-center'>
            <div className='flex w-[428px] h-[60px] justify-between items-center pl-6 pr-6 mt-2'>
            <div 
              className='h-9 w-9 bg-no-repeat bg-center bg-contain'
              style={{
                backgroundImage: 'url("./public/content/home.svg")'
            }}/>
            <div 
              className='h-9 w-9 bg-no-repeat bg-center bg-contain'
              style={{
                backgroundImage: 'url("./public/content/search.svg")'
            }}/>
            <div 
              className='h-9 w-9 bg-no-repeat bg-center bg-contain'
              style={{
                backgroundImage: 'url("./public/content/addsquare.svg")'
            }}/>
            <div 
              className='h-9 w-9 bg-no-repeat bg-center bg-contain'
              style={{
                backgroundImage: 'url("./public/content/media.svg")'
            }}/>
            <div 
              className='h-9 w-9 bg-no-repeat bg-center bg-contain rounded-full'
              style={{
                backgroundImage: 'url("./public/content/My.svg")'
            }}/>
            
            </div>
            <div className='h-[16px]'>
              <div className='h-[3px] w-[130px] bg-gray200'></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Instagram
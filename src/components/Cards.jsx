import { Tilt } from 'react-tilt';

const Cards = ({ logo, title, description, price, link, url, hover }) => {

  const Layout = 'grid grid-rows-3 gap-4 h-[340px] max-w-[500px] bg-black backdrop-blur border border-gray200 rounded-lg';
  return (
    <div>
      <Tilt className="Tilt" options={{ max: 10, scale:1 }}>
        <div className={`${Layout} ${hover}`}>
          <div className="flex items-center border-b border-gray200 rounded-t-lg">
            <div className='flex items-center gap-4'>
              <div
                className='p-6 ml-8 border rounded-lg border-gray200 bg-no-repeat bg-contain bg-center'
                style={{
                  backgroundImage: `url(${logo})`,
                  width: '50px',
                  height: '50px'
                }}>
              </div>
              <p className='text-lg ml-2'>{title}</p>
            </div>
          </div>
          <div className="flex items-center max-w-[440px]">
            <div className='ml-8'>
              <div className='text-gray100 font-pretendardB'>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="ml-8 mr-8 flex justify-between items-center max-w-[440px]">
            <div>{price}</div><div><a className='text-blue-400' href={`${url}`}>{link}</a></div>
          </div>
        </div>
      </Tilt>
    </div>
  )
}

const StackList = ({ layout, title, images }) => (
  <div className={`pl-1 ${layout}`}>
  <h1 className='tracking-widest'>{title}</h1>
  <div className="flex mt-4 gap-3">
    {images.map((image, index) => (
      <div
        key={index}
        className="bg-no-repeat bg-center bg-contain rounded-md"
        style={{
        backgroundImage: `url(${image})`,
        width: '50px',
        height: '50px'
        }}
        />
    ))}
  </div>
</div>
);
export { Cards, StackList }
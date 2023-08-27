const InstagramProfile = ({ name, images, borders, bg }) => (
  <div>
    <div className='h-[110px] flex items-center justify-center'>
      <div className='flex flex-col items-center text-center justify-center'>
        {images.map((image, index) => (
          <div key={index}>
            <div className={`rounded-full ${bg} p-[3px]`}>
              <div
                className={`rounded-full border-gray200 bg-no-repeat bg-center bg-contain ${borders} p-1`}
                style={{
                  backgroundImage: `url(${image})`,
                  width: '76px',
                  height: '76px'
                }}
              />
            </div>
            <p className='font-pretendardR mt-2 text-xs'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InstagramPost = ({ name , text , likes , profile , post }) => {
  return (
    <div className='flex flex-col w-[420px] h-[680px] bg-300 pt-2'>
      <div className='flex h-[76px] justify-between items-center pl-4 pr-4'>
        <div className='flex items-center'>
            <div className='rounded-full bg-gradient-to-r from-red-500 to-purple-500 p-[2px]'>
              <div
                className='rounded-full border-gray200 bg-no-repeat bg-center bg-contain border-2'
                style={{
                  backgroundImage: `url(${profile})`,
                  width: '44px',
                  height: '44px'
                }}
              />
            </div>
          <div className='pl-2'>{name}</div>
        </div>
        <div 
          className='h-6 w-6 bg-no-repeat bg-center bg-contain'
          style={{
          backgroundImage: 'url("./content/dot.svg")'
        }}/>
      </div>
      <div>
        <div className='bg-gray200'>
          <div
            className='bg-no-repeat bg-center bg-cover'
            style={{
              backgroundImage: `url(${post})`,
              width: '420px',
              height: '420px'
            }}
          />
        </div>
      </div>
      <div className='flex justify-between h-[48px] items-center pl-3'>
        <div className='flex gap-5'>
          <div 
            className='h-7 w-7 bg-no-repeat bg-center bg-contain'
            style={{
              backgroundImage: 'url("./content/heart.svg")'
            }}/>
          <div 
            className='h-7 w-7 bg-no-repeat bg-center bg-contain'
            style={{
              backgroundImage: 'url("./content/message.svg")'
            }}/>
          <div 
            className='h-7 w-7 bg-no-repeat bg-center bg-contain'
            style={{
              backgroundImage: 'url("./content/send.svg")'
            }}/>
        </div>
        <div className='pr-4'>
          <div 
              className='h-7 w-7 bg-no-repeat bg-center bg-contain'
              style={{
                backgroundImage: 'url("./content/favorite.svg")'
            }}/>
        </div>
      </div>
      <div className='pb-3'>
        <div className='text-ms font-pretendardR pl-3'>
          <h1>좋아요 <span>{likes}</span></h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}


export { InstagramProfile , InstagramPost };
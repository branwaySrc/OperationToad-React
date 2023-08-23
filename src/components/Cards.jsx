const Cards = ({ logo, title, description, price, link, url, hover }) => {

  const Layout = 'grid grid-rows-3 gap-4 h-[340px] max-w-[500px] bg-black backdrop-blur bg-opacity-90 border border-gray200 rounded-lg';
  return (
    <div>
      <div className={`${Layout} ${hover}`}>
        <div className="flex items-center border-b border-gray200 rounded-t-lg">
          <div className='flex items-center gap-4'>
            <div className='p-6 ml-8 border rounded-lg border-gray200'>{ logo }</div><p className='text-lg ml-2'>{title}</p>
          </div>
        </div>
        <div className="flex items-center max-w-[440px]">
          <div className='ml-8'>
            <div className='text-gray100 font-pretendardR'>
              <p>{description}</p>
            </div>
          </div>
        </div>
        <div className="ml-8 mr-8 flex justify-between items-center max-w-[440px]">
          <div>{price}</div><div><a className='text-blue-400' href={`${url}`}>{link}</a></div>
        </div>
      </div>
    </div>
  )
}

export default Cards
const ContentHeader = ({category, titleRow1, titleRow2, contentRow1,contentRow2, fontColor}) => {
  const ContentHeaderStyle = 'flex gap-12 text-center flex-col justify-center items-center text-gray100';
  
  return (
    <div>
      <div className={ContentHeaderStyle}>
        <h3 className={`font-pretendardBB tracking-widest leading-tight text-xl ${fontColor}`}>{category}</h3>
        <div className='bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent'>
          <h3 className='text-5xl leading-tight font-pretendardBB'>{titleRow1}<br></br>{titleRow2}</h3>
        </div>
        <div>
          <h3 className='max-w-[820px] text-lg text-gray100'>{contentRow1}<br></br>{contentRow2}</h3>
        </div>
      </div>  
    </div>
  )
}

const EmphasizeWord = ({ children }) => {
  return (
    <span className="text-fff">{children}</span>
  );
};

export { ContentHeader, EmphasizeWord };
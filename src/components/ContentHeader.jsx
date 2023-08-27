const ContentHeader = ({category, titleRow, contentRow, fontColor}) => {
  const ContentHeaderStyle = 'flex gap-12 text-center flex-col justify-center items-center text-gray100';
  
  return (
    <div>
      <div className={ContentHeaderStyle}>
        <h3 className={`font-pretendardBB tracking-widest leading-tight text-xl ${fontColor}`}>{category}</h3>
        <div className='bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent'>
          <h3 className='text-5xl leading-tight font-pretendardBB'>{titleRow}</h3>
        </div>
        <div>
          <h3 className='max-w-[820px] text-lg text-gray100'>{contentRow}</h3>
        </div>
      </div>  
    </div>
  )
}

const EmphasizeWord = ({ word }) => {
  return (
    <span className="text-fff">{ word }</span>
  );
};

export { ContentHeader, EmphasizeWord };
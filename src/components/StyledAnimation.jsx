import React, { useState, useEffect } from 'react';
import TextAlterStyle from '../style/Animated/textAlter.module.css';


const AlterText = () => {
  const texts = ['기획하고', '제작하고', '선보이다'];
  const classes = ['fill-gradient-red', 'fill-gradient-green', 'fill-gradient-blue'];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(texts[0]);
  const [className, setClassName] = useState(`tit__alternating ${classes[0]}`);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (index + 1) % texts.length;
      setIndex(newIndex);
      setText(texts[newIndex]);
      setClassName(`tit__alternating ${TextAlterStyle[classes[newIndex]]}`);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div>
      <h1 className={`${TextAlterStyle.tit__alternating} mt-5 text-9xl ${className}`}>
        {text}
      </h1>
    </div>
  );
};

export {AlterText};

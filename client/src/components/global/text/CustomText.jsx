import React from 'react';

const CustomText = ({
  as: Tag = 'div', // Default tag is 'div'
  text = 'Default Text',
  color = 'text-black',
  size = 'text-base',
  fontWeight = 'font-normal',
  alignment = 'text-left',
  decoration = 'no-underline',
  onClick = () => {}, // Default no-op function
}) => {
  return (
    <Tag
      className={`${color} ${size} ${fontWeight} ${alignment} ${decoration} cursor-pointer`}
      onClick={onClick}
    >
      {text}
    </Tag>
  );
};



export default CustomText;

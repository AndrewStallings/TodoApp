import React, { MouseEventHandler } from 'react';
import '../renderer/main.css';
interface PrimaryButtonProps {
  text: string;
  clickAction: MouseEventHandler<HTMLButtonElement>;
}

const PrimaryButton = ({ text, clickAction }: PrimaryButtonProps) => {
  return (
    <button onClick={clickAction} type="button" className="primarybtn">
      {text}
    </button>
  );
};

export default PrimaryButton;

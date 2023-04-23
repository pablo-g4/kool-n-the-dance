import React, { useEffect, useState } from 'react'
import "./CustomSwitch.css";

const CustomSwitch = (
{
  value,
  setValue,
  firstLabel,
  secondLabel,
} : {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<void>>;
  firstLabel: string;
  secondLabel: string;
}) => {

  const [statusOnLine, setStatusOnLine] = useState(true);
  const [statusArchive, setStatusArchive] = useState(false);

  const handleDoubleClick = () => {
      setStatusArchive(statusOnLine => !statusOnLine)
      setStatusOnLine(statusArchive => !statusArchive)
      setValue()
  }

  return (
    <>
      <div className='d-flex flex-row'>
        <div
          className={(statusOnLine ? "switch-on" : "switch-off") + ' d-flex align-items-center justify-content-center'}
          onClick={handleDoubleClick}
        >
          {firstLabel}
        </div>
        <div
          className={(statusArchive ? "switch-on" : "switch-off") + ' d-flex align-items-center justify-content-center'}
          onClick={handleDoubleClick}
        >
          {secondLabel}
        </div>
      </div>
    </>
  )
}

export default CustomSwitch;
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
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  firstLabel: string;
  secondLabel: string;
}) => {

  const [statusOnLine, setStatusOnLine] = useState(true);
  const [statusArchive, setStatusArchive] = useState(false);

  return (
    <div>
        <div className='d-flex flex-row'> 
          <div 
            className={statusOnLine ? "switch-on" : "switch-off"}
            onClick={() => {
              if (!statusOnLine) {
                setStatusOnLine(true)
                setStatusArchive(false)
                setValue(true)
              }
            }}
          >
            {firstLabel}
          </div>
          <div 
            className={statusArchive ? "switch-on" : "switch-off"}
            onClick={() => {
              if (!statusArchive) {
                setStatusArchive(true)
                setStatusOnLine(false)
                setValue(false)
              }
            }}
          >
            {secondLabel}
          </div>
        </div>
    </div>
  )
}

export default CustomSwitch;
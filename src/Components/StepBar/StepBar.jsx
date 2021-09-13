import React, { useEffect } from "react";

const StepBar = ({step}) => {

  useEffect(() => {

    document.querySelectorAll('.step').forEach((element => {

      element.id === step ? element.className = 'step-active' : element.className = 'step-disabled';

    }))
    
  }, []);

  return (

    <div className='d-flex flex-row justify-content-center align-items-center'>
      <div id='office' className='step'></div>
      <div id='date' className='step'></div>
      <div id='desk' className='step'></div>
      <div id='review' className='step'></div>
    </div>

  );
};

export default StepBar;

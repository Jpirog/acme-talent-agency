import React from 'react';

const MainPurpose = () => {  

  return (
    <div>
      <select defaultValue="0">
        <option disabled key="0" value="0">Select purpose...</option>
          <option key="1">Business</option>
          <option key="2">Pleasure</option>
          <option key="3">Other</option>
      </select>
    </div>
  )
}

export default MainPurpose;

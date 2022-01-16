import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentTrips } from '../store/trips';

const MainDate = () => {  
//  const dispatch = useDispatch();


  return (
    <div>
      <input type="date" required />
    </div>
  )
}

export default MainDate;
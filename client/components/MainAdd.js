import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentTrips } from '../store/trips';

const MainAdd = ({ formData, setFormData}) => {  
  const dispatch = useDispatch();
  console.log(formData, setFormData)

//  const [recentTrips, setRecentTrips ] = useState([]) 

//   useEffect( () => {
//     const fetchData = () => {
//         dispatch(getRecentTrips());
//     };
//     fetchData();
// //    setRecentTrips(useSelector((state) => state.trips.trips));
//   }, []);

  // const recentTrips = useSelector((state) => state.trips.recentTrips)

  return (
    <div>
        <input type="submit" value="Create" />
      </div>
  )
}

export default MainAdd;
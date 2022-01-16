import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainClients from './MainClients';
import MainDestination from './MainDestination';
import MainDate from './MainDate';
import MainPurpose from './MainPurpose';
import MainAdd from './MainAdd';

const MainForm = () => {  
  const [formData, setFormData] = useState({clientId:'', destinationId:'', tripDate:new Date(), purpose: ''})
  console.log('form: ', formData)

  //const dispatch = useDispatch();

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
      <h1>Add a trip</h1>
        <form>
          <MainClients formData={formData} setFormData={ setFormData }/>
          <MainDestination />
          <MainDate />
          <MainPurpose />
          <MainAdd formData={formData} setFormData={ setFormData }/>
        </form>
    </div>
  )
}

export default MainForm;
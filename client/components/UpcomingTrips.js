import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentTrips } from '../store/trips';

const UpcomingTrips = () => {  
  const dispatch = useDispatch();

//  const [recentTrips, setRecentTrips ] = useState([]) 

  useEffect( () => {
    const fetchData = () => {
        dispatch(getRecentTrips());
    };
    fetchData();
//    setRecentTrips(useSelector((state) => state.trips.trips));
  }, []);

  const recentTrips = useSelector((state) => state.trips.recentTrips)

  return (
    <div>
    <hr />
    <p>TRIPS in 7 days ({recentTrips.length})</p>
  {recentTrips.map(trip => (
    <p key={ trip.id }>{ trip.id } / { trip.tripDate }</p>
  ))}
</div>
  )
}

export default UpcomingTrips;
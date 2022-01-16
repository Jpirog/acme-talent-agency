import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDestinations } from '../store/destinations';

const MainDestination = () => {  
  const dispatch = useDispatch();

//  const [recentTrips, setRecentTrips ] = useState([]) 

  useEffect( () => {
    const fetchData = () => {
        dispatch(getDestinations());
    };
    fetchData();
//    setRecentTrips(useSelector((state) => state.trips.trips));
  }, []);

  const destinations = useSelector((state) => state.destinations.destinations)

  return (
    <div>
      <select defaultValue="0">
        <option disabled key="0" value="0">Select destination...</option>
        { destinations.map(dest => (
          <option key={ dest.id }>{ dest.name }</option>
      ))}
      </select>
    </div>
  )
}

export default MainDestination;
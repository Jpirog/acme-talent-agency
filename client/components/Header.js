import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../store/clients';

const Header = () => {
  const dispatch = useDispatch();

  const total = useSelector((state) => state.clients.clients.length);

  useEffect( () => {
    const fetchData = () => {
        dispatch(getClients());
    };
    fetchData();
//    setRecentTrips(useSelector((state) => state.trips.trips));
  }, []);


  return (
    <h1>Acme Travel Agency ({ total })</h1>
  )
}

export default Header;
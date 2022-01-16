import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../store/clients';

const MainClients = ({ formData, setFormData }) => {  
  const dispatch = useDispatch();

//  const [recentTrips, setRecentTrips ] = useState([]) 

  useEffect( () => {
    const fetchData = () => {
        dispatch(getClients());
    };
    fetchData();
//    setRecentTrips(useSelector((state) => state.trips.trips));
  }, []);

  const clients = useSelector((state) => state.clients.clients)

  return (
    <div>
      <select defaultValue="0" onChange={ (ev) => {
        setFormData({ ...formData, clientId: ev.target.value }) 
      }}>
        <option disabled key="0" value="0" data-id="xxx">Select client...</option>
        { clients.map(client => (
          <option key={ client.id } value={client.id} >{ client.name } ({ client.trips.length })</option>
        ))}
      </select>
    </div>
  )
}

export default MainClients;
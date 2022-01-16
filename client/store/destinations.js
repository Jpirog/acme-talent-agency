import axios from "axios";

// ACTION TYPES
const GET_DESTINATIONS = "GET_DESTINATIONS"

//ACTION CREATORS
export const _getDestinations = (destinations) => ({
    type: GET_DESTINATIONS,
    clients,
});
  
//THUNK ACTION CREATORS
export const getDestinations = () => {
    return async (dispatch) => {
      const { data } = await axios.get("/api/destinations");
      dispatch({ type: GET_DESTINATIONS, destinations: data });
    };
};

// Destinations REDUCER
const destinations = ( state = {destinations: []}, action) => {
    switch(action.type) {
        case GET_DESTINATIONS:
            return { destinations: action.destinations };
        default: 
            return state
    }
}

export default destinations;

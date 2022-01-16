import axios from "axios";

// ACTION TYPES
const GET_RECENT_TRIPS = "GET_RECENT_TRIPS"

//ACTION CREATORS
export const _getRecentTrips = (trips) => ({
    type: GET_RECENT_TRIPS,
    trips,
});
  
//THUNK ACTION CREATORS
export const getRecentTrips = () => {
    return async (dispatch) => {
      const { data } = await axios.get("/api/trips/getrecenttrips");
      dispatch({ type: GET_RECENT_TRIPS, trips: data });
    };
};

// trips REDUCER
const trips = ( state = {recentTrips: []}, action) => {
    switch(action.type) {
        case GET_RECENT_TRIPS:
            return { recentTrips: action.trips }
        default: 
            return state
    }
}

export default trips;

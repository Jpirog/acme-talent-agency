import axios from "axios";

// ACTION TYPES
const GET_CLIENTS = "GET_CLIENTS"

//ACTION CREATORS
export const _getClients = (clients) => ({
    type: GET_CLIENTS,
    clients,
});
  
//THUNK ACTION CREATORS
export const getClients = () => {
    return async (dispatch) => {
      const { data } = await axios.get("/api/clients");
      dispatch({ type: GET_CLIENTS, clients: data });
    };
};

// Clients REDUCER
const clients = ( state = {clients: []}, action) => {
    switch(action.type) {
        case GET_CLIENTS:
            return { clients: action.clients };
        default: 
            return state
    }
}

export default clients;

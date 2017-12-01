'use strict'

import axios from 'axios'
import { BACK_END, setModeRead } from '../../store'


/**
 * ACTION TYPES
 */
const GET_LOCATION = 'GET_LOCATION'
const CREATE_LOCATION = 'CREATE_LOCATION'
const CHANGE_LOCATION = 'CHANGE_LOCATION'
const REMOVE_LOCATION = 'REMOVE_LOCATION'

/**
 * ACTION CREATORS
 */
const getLocation = location => ({ type: GET_LOCATION, location })
const createLocation = location => ({ type: CREATE_LOCATION, location })
// const changeLocation = location => ({ type: CHANGE_LOCATION, location })
// const removeLocation = () => ({ type: REMOVE_LOCATION })

/**
 * THUNK CREATORS
 */
// use POST to send req.body.location
export const fetchLocation = location =>
  dispatch =>
    axios.post(`${BACK_END}/api/locations`, { location })
      .then(res => dispatch(getLocation(res.data)))
      .catch(err => console.log(err))

export const registerLocation = location =>
  dispatch =>
    axios.post(`${BACK_END}/api/locations/register`, { url: location })
      .then(res => {
        dispatch(createLocation(res.data))
        dispatch(setModeRead())
      })
      .catch(err => console.log(err))

// export const editLocation = location =>
//   dispatch =>
//     axios.put(`${BACK_END}/api/locations/${location.id}`, { location })
//       .then(res => dispatch(changeLocation(res.data)))
//       .catch(err => console.log(err))

// export const deleteLocation = locationId =>
//   dispatch =>
//     axios.delete(`${BACK_END}/api/locations/${locationId}`)
//       .then(() => dispatch(removeLocation()))
//       .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    // case CHANGE_LOCATION:
    case GET_LOCATION:
    case CREATE_LOCATION:
      return action.location

    // case REMOVE_LOCATION:
    default:
      return state
  }

}

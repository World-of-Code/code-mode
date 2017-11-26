'use strict'

import axios from 'axios'


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
const changeLocation = location => ({ type: CHANGE_LOCATION, location })
const removeLocation = () => ({ type: REMOVE_LOCATION })

/**
 * THUNK CREATORS
 */
export const fetchLocation = url =>
  dispatch =>
    axios.get('/api/locations', url)
      .then(res => dispatch(getQuestion(res.data)))
      .catch(err => console.log(err))

export const addLocation = location =>
  dispatch =>
    axios.post('/api/locations/', location)
      .then(res => dispatch(createLocation(res.data)))
      .catch(err => console.log(err))

export const editLocation = location =>
  dispatch =>
    axios.put(`/api/locations/${location.id}`, location)
      .then(res => dispatch(changeLocation(res.data)))
      .catch(err => console.log(err))

export const deleteLocation = locationId =>
  dispatch =>
    axios.delete(`/api/locations/${locationId}`)
      .then(() => dispatch(removeLocation()))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    case GET_LOCATION:
    case ADD_LOCATION:
    case CHANGE_LOCATION:
      return action.location

    case REMOVE_LOCATION:
    default:
      return state
  }

}

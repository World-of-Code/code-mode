'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_LOCATION = 'GET_LOCATION'
const CREATE_LOCATION = 'CREATE_LOCATION'
const EDIT_LOCATION = 'EDIT_LOCATION'
const DELETE_LOCATION = 'DELETE_LOCATION'

/**
 * ACTION CREATORS
 */
const getLocation = location => ({ type: GET_LOCATION, location })
const createLocation = location => ({ type: CREATE_LOCATION, location })
const editLocation = location => ({ type: EDIT_LOCATION, location })
const deleteLocation = () => ({ type: DELETE_LOCATION })

/**
 * THUNK CREATORS
 */
export const fetchLocation = locationId =>
  dispatch =>
    axios.get(`/api/locations/${locationId}`)
      .then(res => dispatch(getQuestion(res.data)))
      .catch(err => console.log(err))

export const makeLocation = location =>
  dispatch =>
    axios.post('/api/locations/', location)
      .then(res => dispatch(createLocation(res.data)))
      .catch(err => console.log(err))

export const changeLocation = location =>
  dispatch =>
    axios.put(`/api/locations/${location.id}`, location)
      .then(res => dispatch(editLocation(res.data)))
      .catch(err => console.log(err))

export const removeLocation = locationId =>
  dispatch =>
    axios.delete(`/api/locations/${locationId}`)
      .then(() => dispatch(deleteLocation()))
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default (state = {}, action) => {
  switch (action.type) {

    case GET_LOCATION:
    case CREATE_LOCATION:
    case EDIT_LOCATION:
      return action.location

    case DELETE_LOCATION:
    default:
      return state
  }

}

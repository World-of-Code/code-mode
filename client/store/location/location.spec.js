
import { expect } from 'chai'
import { registerLocation } from './index.js'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => { 
  let store
  let mockAxios

  const initialState = { locations: [], location: {} }

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })


  describe('registerLocation', () => {
    it('eventually dispatches the registerLocation action', () => {
      const fakeLocation = {id: 4, url: 'https://www.youtube.com/'}
      mockAxios.onPost('https://code-mode.herokuapp.com/api/locations/register').replyOnce(201, fakeLocation)
      return store.dispatch(registerLocation(fakeLocation))
        .then(() => {
          const actions = store.getActions()
          expect(actions[0].type).to.be.equal('CREATE_LOCATION')
          expect(actions[0].location).to.be.deep.equal(fakeLocation)

        })
    })
  })

})

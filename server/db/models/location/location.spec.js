const { expect } = require('chai')
const db = require('../../index')
const Location = db.model('location')

describe('Location model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Model', () => {
    describe('url', () => {
      let page;
      const url = 'https://www.youtube.com/watch?v=BMUiFMZr7vk'

      beforeEach(() => {
        return Location.create({url})

        .then(location => {
          page = location
        })
      })

      it('tests model type', () => {
        expect(page.url).to.be.equal('https://www.youtube.com/watch?v=BMUiFMZr7vk')
      })
    })
  })
})

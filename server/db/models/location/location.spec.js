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

  describe('location url type validation', () => {
    let url

    beforeEach(() => {
      url = Location.build({
        url: 'test'
      })
    })

    it('throw an validation error when location is not an url', () => {
      return url.validate()
        .then(() => {
          throw new Error('validation should fail when content is less than 10 words')
        }, (result) => {
          expect(result).to.be.an.instanceOf(Error);
        })
    })
  })
})

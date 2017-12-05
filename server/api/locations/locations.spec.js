const { expect } = require('chai')
const supertest = require('supertest')
const db = require('../../db')
const app = require('../../')
const Location = db.model('location')

describe('Location routes', () => {
    let agent;
    beforeEach(() => {
        agent = supertest(app);
        return db.sync({ force: true })
    })

    describe('/api/locations', () => {
        const url = 'https://www.youtube.com/watch?v=BMUiFMZr7vk'

        beforeEach(() => {
            return Location.create({ url })
        })


        it('POST /api/locations', () => {
            return agent
                .post('/api/locations')
                .send({
                    locations: 'https://www.youtube.com/watch?v=BMUiFMZr7vk'
                })
                .expect(200)
                .then(res => {
                    const createLocations = res.body;
                    //console.log("CREATE", createLocations)
                    return Location.findById(createLocations.id)
                })
                .then(foundLocation => {
                    console.log("FOUND", foundLocation)
                    expect(foundLocation.url).to.be.equal('https://www.youtube.com/watch?v=BMUiFMZr7vk');
                })
        })
    })
})
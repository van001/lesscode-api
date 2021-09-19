const dotenv = require('dotenv').config()
const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require('../config.js')
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe("Auth - Health", function (done) {
    it('GET {{{PREFIX}}}/health returns the valid health check', (done) => {
        chai.request(config[process.env.ENV])
            .get('{{{PREFIX}}}/health')
            .end((err, res) => {
                res.should.have.status(200);
                expect(res).to.have.header('Access-Control-Allow-Origin','*')
                expect(res.body).to.have.own.property('status')
                expect(res.body).to.have.own.property('ts')
                done()
            });
    });
   
});
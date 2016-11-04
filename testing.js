var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app.js');
var expect = chai.expect;

chai.use(chaiHttp);

describe('Route Testing', function(){                               //checks if the website runs at all
    it('should display 200 after doing a get request'), (done) => {
        chai.request(server)
        .get('/')
        .end((err,res) => {
            expect(res.status).to.equal(200);
            done();
        });
    };
});

describe('Route Testing to Profile page', function(){               //checks if bookshelf page is routed 
    it('should display 200 after doing a get request to /bookshelf'),(done) =>{
        chai.request(server)
        .get('/bookshelf')
        .end((err,res) => {
            expect(res.status).to.equal(200);
            done();
        });
    };
});

describe('BookNook Home Page', function(){
it('should show the BookNook Home Page on / get', (done) => {
chai.request(server)
.get('/')
.end((err, res) => {
expect(res.status).to.equal(200);
expect(res.text).to.include('Login');
done();
});
});

describe('BookNook e', function(){
    it('should display the BookShelf'), (done) => {
        chai.request(server)
        .get('/')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.text).to.include('BookShelf');
            done();
        });
    };


    //future it testing statements
    it('should display the HotBooks section on the home page');
    //would be done by testing the word hotbooks or a sample book id
    it('should take you to your BookShelf after hitting Log in');
    //Would test the user action with the onclick function
    it('should display book profile after hitting a hotbook');
    it('should display a search bar on the home page');
    it('should take you to a genre list box/page after pressing genre');
    it('should take you to a list of genre books after hitting a genre');


});
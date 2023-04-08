const { request } = require('http');

const chakram = require('chakram'),
 expect = chakram.expect;

describe("Test Cases", function() {

        it("TC0001 /v2/user", function () {

            var userName = "testqauser";

            const response = chakram.get("https://petstore.swagger.io/v2/user/" + userName);
            expect(response).to.have.status(200);
            return chakram.wait();
        });

        it("TC0002 /v2/user (user Create)", function () {

            const userInfo = {
            "id": 7879978,
            "username": "testqauser2",
            "firstName": "test",
            "lastName": "qa",
            "email": "testqa@udemig.com",
            "password": "test123",
            "phone": "45454554554",
            "userStatus": 1
          };

            const response = chakram.post("https://petstore.swagger.io/v2/user",userInfo);
            expect(response).to.have.status(500);
            return chakram.wait();
        });

    it("TC0003 /v2/user/login", function () {

            const user = {
            "username ": "testqauser2",
            "password": "test123"
          };

            const response = chakram.post("https://petstore.swagger.io/v2/user",{qs:user});
            expect(response).to.have.status(200);
            return chakram.wait();
        });

});
    
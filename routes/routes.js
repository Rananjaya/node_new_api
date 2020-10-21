const { Login } = require('../controllers/loginController');
const Register = require('../controllers/registerController');
const LoginC = require('../controllers/loginController');


const appRouter = function (app) {
    app.get('/', function (req, res) {
        res.status = 200;
        res.send('fitis api running');
    });
    app.post('/register',Register.Register);
    app.post('/login',LoginC.LoginC);
   
  

};
    module.exports = appRouter;
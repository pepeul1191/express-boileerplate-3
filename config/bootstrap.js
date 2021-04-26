var homeController = require('../api/controllers/home_controller');
var userController = require('../api/controllers/user_controller');
var studentController = require('../api/controllers/student_controller');
var loginController = require('../api/controllers/login_controller');
var adminController = require('../api/controllers/admin_controller');
var carrerController = require('../api/controllers/carrer_controller');
var periodController = require('../api/controllers/period_controller');
var errorController = require('../api/controllers/error_controller');

module.exports = (app) => {
  app.use('/', homeController);
  app.use('/user', userController);
  app.use('/student', studentController);
  app.use('/error', errorController);
  app.use('/admin', adminController);
  app.use('/carrer', carrerController);
  app.use('/login', loginController);
  app.use('/period', periodController);
}

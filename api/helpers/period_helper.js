var constants = require('../../config/constants')();

const indexCss = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'bower_components/bootstrap/dist/css/bootstrap.min',
      'bower_components/font-awesome/css/font-awesome.min',
      'assets/css/constants',
      'assets/css/styles',
      'assets/css/period',
    ];
  }
  if(constants.static == 'build'){
    resp = [
      'dist/test.min'
    ];
  }
  return resp;
}

const indexJs = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'bower_components/jquery/dist/jquery.min',
      'bower_components/bootstrap/dist/js/bootstrap.min',
      'assets/js/period',
    ];
  }
  if(constants.static == 'build'){
    resp = [
    ];
  }
  return resp;
}

const addJs = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'bower_components/jquery/dist/jquery.min',
      'bower_components/bootstrap/dist/js/bootstrap.min',
      'assets/js/period',
      'assets/js/period/add',
    ];
  }
  if(constants.static == 'build'){
    resp = [
    ];
  }
  return resp;
}

const editJs = () => {
  var resp = [];
  if(constants.static == 'dev'){
    resp = [
      'bower_components/jquery/dist/jquery.min',
      'bower_components/bootstrap/dist/js/bootstrap.min',
      'assets/js/period',
      'assets/js/period/edit',
    ];
  }
  if(constants.static == 'build'){
    resp = [
    ];
  }
  return resp;
}

exports.indexCss= indexCss;
exports.indexJs= indexJs;
exports.addJs= addJs;
exports.editJs= editJs;

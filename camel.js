angular.module('camelCalcApp', [])
  .controller('CamelCalcController', function() {
    var camelcalc = this;
    camelcalc.age = 22;
    camelcalc.heightincm = 176;

    camelcalc.hairlengths = [{
        id: 1,
        label: 'long'
      }, {
        id: 2,
        label: 'middle'
      },{
        id: 3,
        label: 'short'
      },{
        id: 4,
        label: 'long'
    }];
    camelcalc.haircolors = [{
        id: 1,
        label: 'blonde'
      }, {
        id: 2,
        label: 'brown'
      },{
        id: 3,
        label: 'black'
      },{
        id: 4,
        label: 'red'
      },{
        id: 5,
        label: 'grey'
    }];
    camelcalc.eyecolors = [{
        id: 1,
        label: 'blue'
      }, {
        id: 2,
        label: 'green'
      },{
        id: 3,
        label: 'brown'
      },{
        id: 4,
        label: 'grey'
      }];
    camelcalc.beards = [{
        id: 1,
        label: 'none'
      }, {
        id: 2,
        label: 'small'
      },{
        id: 3,
        label: 'medium'
      },{
        id: 4,
        label: 'large'
      }];
    camelcalc.bodytypes = [{
        id: 1,
        label: 'muscular'
      }, {
        id: 2,
        label: 'normal'
      },{
        id: 3,
        label: 'chubby'
      }];
  });

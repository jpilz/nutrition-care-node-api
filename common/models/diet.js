'use strict';

module.exports = function(Diet) {

  //Validations
  Budgetkey.validatesLengthOf('description', {max: 250, message: {max: 'Por favor ingresa una descripción más corta. Sólo se permite 250 caracteres.'}});

};
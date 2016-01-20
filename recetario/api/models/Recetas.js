/**
* Recetas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    connection: 'recetarioMongodbServer',
    schema:'true',
    tableName: 'recetas',
  attributes: {
      nombre:{
          type:'string',
          required:'true',
          unique:'true'
      },
      cantidad:{
          type:'integer',
          required:'true'
      },
      ingredientes:{
          type: 'array',
          required:"true",
          array:'true'
      },
      tipo:{
          type:'string',
          required:'true'
      },
      id:{
          type:'integer',
          required:'true',
          unique:'true'
      },
      costo:{
          type:'float',
          required:'true'
      }
  }
};

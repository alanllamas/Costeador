/**
* Materia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
    connection: 'recetarioMongodbServer',
    schema:'true',
    tableName: 'materias',
    attributes: {
        nombre:{
            type:'string',
            required:'true',
            unique:'true'
        },
        cantidad:{
            type:'string',
            required:'true'
        },
        id:{
            type:'string',
            required:'true',
            unique:'true'
        },
        precio:{
            type:'string',
            required:'true'
        },
        medicion:{
            type:'string',
            required:'true'
        },
        pesopza:{
            type:'string'
        }
    }
};

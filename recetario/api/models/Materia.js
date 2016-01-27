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
            type:'integer',
            required:'true'
        },
        id:{
            type:'integer',
            required:'true',
            unique:'true'
        },
        precio:{
            type:'float',
            required:'true'
        },
        medicion:{
            type:'string',
            required:'true'
        },
        pesopza:{
            type:'integer'
        }
    }
};

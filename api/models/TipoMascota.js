/**
* TipoMascota.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'Tipomascota',
  attributes: {
    id: {
      primaryKey: true,
      autoincrement: true,
      type: 'integer',
      unique: true,
    },
    nombre: 'string',
    pets: {
      collection: "Pet",
      via: "tipomascota"
    },
  }
};


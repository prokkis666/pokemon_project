#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Monster = require('./models/monster')
var Type = require('./models/type')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var monsters = []
var types = []

function monsterCreate(number, name, type, cb) {
  monsterdetail = {name: name , type: type }
  
  var monster = new Monster(monsterdetail);
       
  monster.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Monster: ' + monster);
    monsters.push(monster)
    cb(null, monster)
  }  );
}

function typeCreate(type, cb) {
  var type = new Type({ type: type });
       
  type.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Type: ' + type);
    types.push(type)
    cb(null, type);
  }   );
}

function createTypes(cb) {
    async.parallel([
		function(callback) {
          typeCreate('Grass', callback);
        },
        function(callback) {
          typeCreate('Water', callback);
        },
		function(callback) {
          typeCreate('Fire', callback);
        },
        ],
        // optional callback
        cb);
}


function createMonsters(cb) {
    async.parallel([
        function(callback) {
          monsterCreate(1, 'Bulbasaur', types[0], callback);
        },
		function(callback) {
          monsterCreate(4, 'Charmander', types[2], callback);
        },
		        function(callback) {
          monsterCreate(7, 'Squirtle', types[1], callback);
        },
        ],
        // optional callback
        cb);
}


async.series([
    createMonsters,
    createTypes,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('MONSTERInstances: '+monsterinstances);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



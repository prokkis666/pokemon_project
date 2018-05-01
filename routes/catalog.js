var express = require('express');
var router = express.Router();

// Require controller modules.
var monster_controller = require('../controllers/monsterController');
var type_controller = require('../controllers/typeController');


/// Monster routes ///

/* GET catalog home page.
router.get('/', monster_controller.index); */

// GET request for one Monster.
router.get('/monster/:id', monster_controller.monster_detail);

// GET request for list of all Book items.
router.get('/monsters', monster_controller.monster_list);

/// Type routes ///

/* GET catalog home page.
router.get('/', type_controller.index); */

// GET request for one Type.
router.get('/type/:id', type_controller.type_detail);

// GET request for list of all Type items.
router.get('/types', type_controller.type_list);


module.exports = router;
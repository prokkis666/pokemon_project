var Monster = require('../models/monster');
var Type = require('../models/type');

// Display list of all Monsters.
exports.monster_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Monster list');
};

// Display detail page for a specific Monster.
exports.monster_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Monster detail: ' + req.params.id);
};
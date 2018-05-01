var Type = require('../models/type');

// Display list of all Types.
exports.type_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Type list');
};

// Display detail page for a specific Type.
exports.type_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Type detail: ' + req.params.id);
};
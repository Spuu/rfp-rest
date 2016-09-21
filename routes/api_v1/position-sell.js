var express = require('express');
var router = express.Router();
var controller = require('../../controllers/position-sell');

/*
 * GET
 */
router.get('/', function(req, res) {
    controller.list(req, res);
});

/*
 * GET
 */
router.get('/:id', function(req, res) {
    controller.show(req, res);
});

router.get('/search/:invoice_id', function(req, res) {
    controller.search(req, res);
});

/*
 * POST
 */
router.post('/', function(req, res) {
    controller.create(req, res);
});

/*
 * PUT
 */
router.put('/:id', function(req, res) {
    controller.update(req, res);
});

/*
 * DELETE
 */
router.delete('/:id', function(req, res) {
    controller.remove(req, res);
});

module.exports = router;
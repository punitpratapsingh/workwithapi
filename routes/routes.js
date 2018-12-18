//routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Working',
        message: 'Welcome ',
    });
});
// Import contact controller
var contactController = require('../controller/controller');
// Contact routes
router.route('/contacts')
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .post(contactController.view)
    .post(contactController.update)
    .post(contactController.delete);
// Export API routes
module.exports = router;

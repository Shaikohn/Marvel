const { Router } = require('express');
const characterRouter = require('./characterRoutes');

const router = Router();

router.use('/characters', characterRouter);

module.exports = router;
var router = require('express').Router();

const gremioCtr = require('../controller/gremio');
router.get('/', gremioCtr.getAllGremio);
router.post('/', gremioCtr.addGremio);
router.put('/:id',gremioCtr.UpdateGremio);
router.delete('/',gremioCtr.DeleteGremio);
router.get('/:id',gremioCtr.getGremio);
router.post('/member', gremioCtr.addMembers)


module.exports = router;
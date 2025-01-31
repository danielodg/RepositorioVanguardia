var router = require('express').Router();

const estudiantesCtr = require('../controller/estudiantes');
router.get('/', estudiantesCtr.getAllEstudiantes);

module.exports = router;
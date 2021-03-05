var express = require('express');
var router = express.Router();

  
let skillsCtrl = require('../controller/skills');

router.get('/', skillsCtrl.printSkills);
router.get('/new', skillsCtrl.newSkills);
router.get('/:id', skillsCtrl.showSkills);

router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.deleteSkills);

router.put('/:id', skillsCtrl.update);

module.exports = router;


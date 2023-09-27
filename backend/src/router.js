const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();
//router.get('/tasks', (req, res) => res.status(200).send("Agora foi"));

router.get('/tasks', tasksController.getAll);

module.exports = router;
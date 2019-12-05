const express = require('express');
const router = express.Router();

const TaskService = require('../services/taskServices');
const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');

router.post('/', checkAuth, async (request, response) => {
    const task = await TaskService.add(request.body);

    response
        .status(200)
        .json(task);
});

router.get('/', (request, response) => {
    response.status(200).json({
      message: 'Handling GET requests to /entregas'
    });
   });   

module.exports = router;
const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
 response.status(200).json({
   message: 'Handling POST requests to /entregas'
 });
});

router.get('/', (request, response) => {
    response.status(200).json({
      message: 'Handling GET requests to /entregas'
    });
   });   

module.exports = router;
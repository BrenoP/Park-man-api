const { Router } = require('express');
const VacancyController = require('./controllers/vacancyController')
const routes = Router();

routes.get('/vacancy', VacancyController.index);
routes.post('/vacancy', VacancyController.store);
routes.put('/vacancy', VacancyController.update)

routes.get('/vacancy/available', VacancyController.available);

module.exports = routes;
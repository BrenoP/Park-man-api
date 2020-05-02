const Vacancy = require('../models/Vacancy');

module.exports = {
   async store(req, res) {
      const { vacancy, idOccupant, sector } = req.body;
      
      await Vacancy.create({
         vacancy,
         idOccupant,
         sector
      });
   
      return res.json(req.body)
   },

   async index(req, res) {
      const vacancies = await Vacancy.find();
      
      var result = {
         vacancies: vacancies,
         sectors: []
      }

      vacancies.map(vacancy => { 
         if(!result.sectors.includes(vacancy.sector)) {
            result.sectors.push(vacancy.sector)
         }
      })

      return res.json(result)
   },

   async available(req, res) {
      const vacancies = await Vacancy.find({
         idOccupant: {
            $gt: 0 
         }
      });

      return res.json(vacancies)
   },

   async update(req, res) {
      const { _id, idOccupant } = req.body;

      const responseVacancy = await Vacancy.findByIdAndUpdate(_id, 
         { idOccupant }, 
         { useFindAndModify: false, new: true }
      ); 
      return res.json(responseVacancy)
   }

}
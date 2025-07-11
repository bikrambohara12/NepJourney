//Imports:
import express from 'express';
import Tour from '../models/Tour.js';
const tourRouter = express.Router();

// getAllTours bhanne async function export gareko ho — sab tour data fetch garna
 tourRouter.get('/', async (req, res) => {
  try {
    // MongoDB ko "tours" collection bata sabai document fetch garxa
    const data = await Tour.find();
    if(!data){
      res.status(500).send({
        message: "Unable To Execute The Query!"
      });
    } else if(data.length === 0){
      res.status(404).send({
        message: "No Data In The DataBase!"
      });
    }
    // Data successfully aayepachi 200 status code sanga JSON response pathauncha
    res.status(200).send({
      status: 'success', // custom status field
      data: data,
      message: "Successfully Retrieved!"        // database bata aayeko tour data
    });

  } catch (err) {
    // Error aayepachi 500 (server error) sanga message pathauncha
    res.status(500).json({
      status: 'fail',       // error status
      message: err.message  // error ko message pathaune
    });
  }
});

export default tourRouter;

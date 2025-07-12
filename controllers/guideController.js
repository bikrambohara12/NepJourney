// Imports:
import express from 'express';
import Guide from '../models/Guide.js';

const guideRouter = express.Router();

// getAllGuides bhanne async function — sab guide data fetch garna
guideRouter.get('/', async (req, res) => {
  try {
    // MongoDB ko "guides" collection bata sabai document fetch garxa
    const data = await Guide.find();

    if (!data) {
      return res.status(500).send({
        message: "Unable To Execute The Query!"
      });
    } else if (data.length === 0) {
      return res.status(404).send({
        message: "No Data In The DataBase!"
      });
    }

    // Data successfully aayepachi 200 status code sanga JSON response pathauncha
    res.status(200).send({
      status: 'success',       // custom status field
      data: data,
      message: "Successfully Retrieved!"  // database bata aayeko guide data
    });

  } catch (err) {
    // Error case ma 500 status code sanga message pathaune
    res.status(500).send({
      status: 'fail',
      message: err.message
    });
  }
});

export default guideRouter;

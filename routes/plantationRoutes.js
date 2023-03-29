import express from 'express';
const router = express.Router();

import {createPlantation, getPlantation, getAllPlantations, updatePlantation, deletePlantation} from '../controllers/PlantationsController.js';

router.route('/').get(getAllPlantations).post(createPlantation);
router.route('/:id').get(getPlantation).patch(updatePlantation).delete(deletePlantation);

export default router;
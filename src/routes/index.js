// src/routes/index.js
import { Router } from 'express';
import {getDailyCare} from '../controllers/dailyCare.controller.js';
import {getFoods, selectFoods} from "../controllers/food.controller.js";
import {getActivity} from "../controllers/activity.controller.js";
import {getGlucoseByUser} from "../controllers/Glucose.controller.js";
import {getMedicineByUser} from "../controllers/medicines.controller.js";
import {getMissionParameters, getMissions} from "../controllers/missions.controller.js";
import {signUp} from "../auth/signUp.js";

const router = Router();

/*
GETS PRINCIPAIS, PARA PREENCHIMENTO DO FRONT
*/
//router.post('/signUp', signUp)

router.get('/dailyCare', getDailyCare); //pega Cuidados diarios (tela do escudo)
router.get('/food', getFoods); //GET alimentos
router.get('/activity', getActivity) //GET Atividade física
router.get('/glucose/user/:id', getGlucoseByUser) //GET histórico de glicemia por usuário
router.get('/medicine/user/:id', getMedicineByUser) //GET remédios por usuário
router.get ('/missions', getMissions) //GET Missões
router.get ('/missions/:id', getMissionParameters) // GET Params da missão (pergunta, alternativas)

router.post('/food/selected', selectFoods);



export default router;
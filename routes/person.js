import express from "express";

const router = express.Router();
import {
  createPerson,
  getAllPersons,
  updatePersonById,
  deletePersonById,
} from "../controllers/personController.js";
import { validateObjectId } from '../middlewares/validation.js';

router.post('/', createPerson);
router.get("/",  getAllPersons);
router.put("/:user_id", validateObjectId, updatePersonById);
router.delete("/:user_id", validateObjectId, deletePersonById);

export default router;

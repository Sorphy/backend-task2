import express from "express";

const router = express.Router();
import {
  createPerson,
  getPersonById,
  updatePersonById,
  deletePersonById,
} from "../controllers/personController.js";
import { validateObjectId } from '../middlewares/validation.js';

router.post('/', createPerson);
router.get("/:user_id", validateObjectId, getPersonById);
router.put("/:user_id", validateObjectId, updatePersonById);
router.delete("/:user_id", validateObjectId, deletePersonById);

export default router;
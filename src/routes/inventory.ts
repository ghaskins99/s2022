import express from 'express';
import {
  deleteItem,
  getItems,
  saveItem,
  updateItem,
} from '../controller/ItemController';

const router = express.Router();

router.get('/', getItems);

router.put('/', saveItem);

router.put('/:uuid', updateItem);

router.delete('/:uuid', deleteItem);

export default router;

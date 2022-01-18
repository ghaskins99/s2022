import express from 'express';
import {
  deleteItem,
  getDeletedItems,
  getItems,
  restoreItem,
  saveItem,
  updateItem,
} from '../controller/ItemController';

const router = express.Router();

router.get('/', getItems);

// put rather than post, as noted in the CRUD resource linked in challenge doc
router.put('/', saveItem);

router.put('/:uuid', updateItem);

router.delete('/:uuid', deleteItem);

router.get('/archive', getDeletedItems);

router.post('/restore/:uuid', restoreItem);

export default router;

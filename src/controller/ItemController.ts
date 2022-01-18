import { Request, Response } from 'express';
import { Item, ItemInfo } from '../entities/Item';
import { DI } from '../server';

export const getItems = async (req: Request, res: Response): Promise<void> => {
  const items = await DI.itemRepository.listItems();
  res.json(items);
};

export const saveItem = async (req: Request, res: Response) => {
  if (!validate(req.body)) {
    return res
      .status(400)
      .json({ message: 'one or more required fields is missing' });
  }

  try {
    const item = new Item(req.body);
    const saved = await DI.itemRepository.saveItem(item);
    return res.json(saved);
  } catch (e) {
    return handleError(e as Error, res);
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const item = await DI.itemRepository.updateItem(req.params.uuid, req.body);

    if (!item) {
      return res.status(404).json({ message: 'item not found' });
    }

    return res.json(item);
  } catch (e) {
    return handleError(e as Error, res);
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const deleted = await DI.itemRepository.deleteItem(
      req.params.uuid,
      req.body?.reason ?? ''
    );

    if (!deleted) {
      return res.status(404).json({ message: 'item not found' });
    }

    return res.status(204).end();
  } catch (e) {
    return handleError(e as Error, res);
  }
};

export const getDeletedItems = async (req: Request, res: Response) => {
  const items = await DI.itemRepository.listItems(true);
  res.json(items);
};

export const restoreItem = async (req: Request, res: Response) => {
  try {
    const restored = await DI.itemRepository.restoreItem(req.params.uuid);

    if (!restored) {
      return res.status(404).json({ message: 'item not found' });
    }

    return res.json(restored);
  } catch (e) {
    return handleError(e as Error, res);
  }
};

const validate = (body: ItemInfo) => {
  return (
    body.name && body.description && body.priceCents && body.inventoryCount
  );
};

const handleError = (e: Error, res: Response) => {
  return res.status(400).json({ message: e.message });
};

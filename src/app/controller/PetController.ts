import type { Request, Response } from 'express';
import PetService from '../service/PetService';

class PetController {
  create(req: Request, res: Response): Response {
    try {
      const { tutorId } = req.params;
      const result = PetService.create(tutorId, req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(error.statusCode).json({
        message: error.name,
        details: error.message,
      });
    }
  }

  put(req: Request, res: Response): Response {
    try {
      const { petId, tutorId } = req.params;
      const result = PetService.put(tutorId, petId, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(error.statusCode).json({
        message: error.name,
        details: error.message,
      });
    }
  }

  delete(req: Request, res: Response): Response {
    try {
      const { petId, tutorId } = req.params;
      PetService.delete(tutorId, petId);
      return res.status(200).json();
    } catch (error) {
      return res.status(error.statusCode).json({
        message: error.name,
        details: error.message,
      });
    }
  }
}

export default new PetController();

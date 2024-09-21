import type { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export default (req: Request, res: Response, next: NextFunction): void => {
  try {
    const schema = Joi.object({
      id: Joi.number().required().integer(),
      name: Joi.string().required().trim(),
      species: Joi.string().required().trim(),
      carry: Joi.string().required().trim(),
      weight: Joi.number().required(),
      date_of_birth: Joi.string().required().trim(),
    });

    const { error } = schema.validate(req.body, {
      abortEarly: false,
      debug: true,
    });

    if (!(error === undefined)) throw error;

    next();
  } catch (error) {
    res.status(400).json({
      message: error.name,
      details: error.details,
    });
  }
};

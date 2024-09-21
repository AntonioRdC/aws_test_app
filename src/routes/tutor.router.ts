import { Router } from 'express';
import TutorController from '../app/controller/TutorController';
import createValidation from '../app/validations/tutor/createAndPut';

const router = Router();

router.post('/tutor', createValidation, TutorController.create);
router.get('/tutors', TutorController.get);
router.put('/tutor/:id', createValidation, TutorController.put);
router.delete('/tutor/:id', TutorController.delete);

export default router;

import type { IPet } from '../interfaces/IPet';
import type { ITutor } from 'app/interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

import NotFoundError from '../error/NotFoundError';
import BadRequestError from '../error/BadRequestError';

class TutorRepository {
  create(tutorId: string, payload: IPet): ITutor {
    const indexTutor = TutorSchema.findIndex((value) => {
      return value.id === Number(tutorId);
    });
    if (indexTutor === -1) throw new NotFoundError('Id Tutor Not exists');

    const tutorPets = TutorSchema[indexTutor].pets;
    if (!(tutorPets === undefined)) {
      tutorPets.forEach((value) => {
        if (value.id === payload.id) throw new BadRequestError('Id Pet exists');
      });

      tutorPets.push(payload);
      TutorSchema[indexTutor] = Object.assign(TutorSchema[indexTutor], {
        pets: tutorPets,
      });
    } else {
      TutorSchema[indexTutor] = Object.assign(TutorSchema[indexTutor], {
        pets: [payload],
      });
    }

    return TutorSchema[indexTutor];
  }

  put(tutorId: string, petId: string, payload: IPet): ITutor {
    const indexTutor = TutorSchema.findIndex((value) => {
      return value.id === Number(tutorId);
    });
    if (indexTutor === -1) throw new NotFoundError('Id Tutor not exists');

    const tutorPets = TutorSchema[indexTutor].pets;
    if (!(tutorPets === undefined)) {
      const indexPet = tutorPets.findIndex((value) => {
        return value.id === Number(petId);
      });
      if (indexPet === -1) throw new NotFoundError('Id Pet not exists');

      tutorPets.forEach((value) => {
        if (
          value.id === payload.id &&
          !(value.id === tutorPets[indexTutor].id)
        ) {
          throw new BadRequestError('Id already exists');
        }
      });

      TutorSchema[indexTutor].pets?.splice(indexPet, 1, payload);
    }
    return TutorSchema[indexTutor];
  }

  delete(tutorId: string, petId: string): void {
    const indexTutor = TutorSchema.findIndex((value) => {
      return value.id === Number(tutorId);
    });
    if (indexTutor === -1) throw new NotFoundError('Id Tutor not exists');

    const tutorPets = TutorSchema[indexTutor].pets;
    if (!(tutorPets === undefined)) {
      const indexPet = tutorPets.findIndex((value) => {
        return value.id === Number(petId);
      });
      if (indexPet === -1) throw new NotFoundError('Id Pet not exists');

      TutorSchema[indexTutor].pets?.splice(indexPet, 1);
    }
  }
}

export default new TutorRepository();

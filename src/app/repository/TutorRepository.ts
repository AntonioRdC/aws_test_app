import type { ITutor } from '../interfaces/ITutor';
import TutorSchema from '../schema/TutorSchema';

import NotFoundError from '../error/NotFoundError';
import BadRequestError from '../error/BadRequestError';

class TutorRepository {
  create(payload: ITutor): ITutor {
    TutorSchema.forEach((value) => {
      if (value.id === payload.id)
        throw new BadRequestError('Id already exists');
    });

    TutorSchema.push(payload);
    return payload;
  }

  get(): ITutor[] {
    return TutorSchema;
  }

  put(id: string, payload: ITutor): ITutor {
    const indexTutor = TutorSchema.findIndex((value) => {
      return value.id === Number(id);
    });
    if (indexTutor === -1) throw new NotFoundError('Id Not exists');

    TutorSchema.forEach((value) => {
      if (
        value.id === payload.id &&
        !(value.id === TutorSchema[indexTutor].id)
      ) {
        throw new BadRequestError('Id already exists');
      }
    });

    TutorSchema[indexTutor] = payload;
    return payload;
  }

  delete(id: string): void {
    const indexTutor = TutorSchema.findIndex((value) => {
      return value.id === Number(id);
    });
    if (indexTutor === -1) throw new NotFoundError('Id Not exists');

    TutorSchema.splice(indexTutor, 1);
  }
}

export default new TutorRepository();

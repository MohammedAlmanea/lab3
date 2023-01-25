import { Request, Response } from 'express';
import person from '../types/person.type';
import { v4 as uuidv4 } from 'uuid';

export class People {
  private people: person[] = [];

  addPerson = (person: person, res: Response, req: Request) => {
    if (person.firstName === undefined) {
      res.status(400);
      res.send('You must provide a person to add');
    } else {
      const newId = uuidv4();
      this.people.push({
        id: newId,
        firstName: person.firstName,
        lastName: person.lastName,
        age: person.age,
        gender: person.gender,
      });
    }
  };

  getPeople = (): person[] => {
    return this.people;
  };
}
export default People;

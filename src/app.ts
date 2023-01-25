import express, { Request, Response } from 'express';
import person from './types/person.type';
import { admin } from './middleware/admin';
import People from './model/people';

export const app = express();
app.use(express.json());

const port = 5500;
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const people = new People();

app.post('/people', admin, (req: Request, res: Response) => {
  const newPerson = req.body as person;
  people.addPerson(newPerson, res, req);
  res.send(people);
});

app.get('/people', admin, (req: Request, res: Response) => {
  res.send(people.getPeople());
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

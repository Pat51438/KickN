// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Event, Location } = initSchema(schema);

export {
  User,
  Event,
  Location
};
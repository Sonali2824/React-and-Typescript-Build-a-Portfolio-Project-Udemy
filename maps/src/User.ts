import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    long: number;
  };
  color: 'red';
  constructor() {
    this.name = faker.name.firstName(); //d.ts file has more info
    //if you do console.log(this.location) you will get undefined

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}

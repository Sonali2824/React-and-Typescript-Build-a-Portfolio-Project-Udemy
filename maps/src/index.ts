/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user: User = new User();
console.log(user);

const company: Company = new Company();
console.log(company);

const customMap: CustomMap = new CustomMap('map');
console.log(customMap);
customMap.addMarker(user);
customMap.addMarker(company);

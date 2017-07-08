import { Address } from "../address/address.model";

export class Registration {
    fName: string ;
    lName: string ;
    email: string;
    addresses: Address[];
    pwd: string ;
    confirmPassword: string;
}
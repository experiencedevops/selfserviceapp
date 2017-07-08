import { Address } from "../address/address.model";
import { User } from "../registration/user.model";

export class Customer {
    id: Number;
    fName: String;
    lName: String;
    addresses: Address[];
    user: User;
}
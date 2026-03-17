import { faker, Faker } from "@faker-js/faker";

export class FakerData{
    static getFirstName(){
       const firstname=faker.person.firstName();
       return firstname;
    }

    static getLastName(){
       const lastname=faker.person.lastName();
       return lastname;
    }

    static getEmail(){
       const email=faker.internet.email();
       return email;
    }

    static getPassword(){
       const password=faker.internet.password();
       return password;
    }
}
export interface FormUser {
    value: any;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    street: string;
    town: string;
    country: string;
    textArea: string;
}

export interface User {
    Name: {
        FirstName: string;
        LastName: string;
    };
    Email: string;
    Address: {
        Street: string;
        Town: string;
        Country: string;
    };
    AdditionalInformation: {
        Gender: string;
        AdditionalData: string;
    };
}
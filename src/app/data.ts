export interface signup {
    name :string,
    email:string,
    password: string
}

export interface login{
    email : String;
    password: String;
}

export interface product{
    name:string,
    Price:number,
    Category:string,
    image: string,
    Description:string,
    id:number,
    quantity: undefined |number
}

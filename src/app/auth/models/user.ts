export interface Authenticate {
    email: string;
    password: string;
}
  
export interface User {   
    email: string;
    password?: string;
}
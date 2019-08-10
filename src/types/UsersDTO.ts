export default interface UserDTO{
    name: string,
    //TODO: Hashed with bcrypt
    passwd: string,
    //TODO: It's possible strong typed for email with regex?
    email:string
    //TODO: What's is jsonwebkey?
    token: JsonWebKey
}
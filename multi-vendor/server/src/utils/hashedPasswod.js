import bcrypt from "bcrypt"
export const hashedPassword = (password) => {
    return bcrypt.hash(password, 10)
}
export const checkPassword = (password,dbPassword) => {
    return bcrypt.compare(password, dbPassword)
}
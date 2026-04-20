import bcrypt from "bcrypt"
export const hashedPassword = (password) => {
    return bcrypt.hash(password, 10)
}

export const orignalPassword = (password,dbPassword) => {
    return bcrypt.compare(password, dbPassword);
}
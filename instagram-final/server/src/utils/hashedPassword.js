import bcrypt from "bcrypt"

export const hashedPassword = (password, salt = 10) => {
    return bcrypt.hash(password, salt)
}

export const checkPassword = (password, dbPassword) => {
    return bcrypt.compare(password, dbPassword)
}
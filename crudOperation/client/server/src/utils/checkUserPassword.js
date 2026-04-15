import bycrpt from "bcrypt"
export const hashedPassword = (password) => {
    return bycrpt.hash(password, 10)
}

export const isSamePassword = (password, oldPassword) => {
    return bycrpt.compare(
        password,
        oldPassword)
}



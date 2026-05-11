import { validateRequest } from "./validation.js";
import { loginValidator, registerValidator } from "./auth.validation.js";
import { postValidation } from "./post.validation.js";
import { commentValidation } from "./comment.validation.js";
import { likeValidation } from "./like.validation.js";
import { bookMarksValidation } from "./bookMarks.validation.js";

export {
    validateRequest,
    registerValidator,
    loginValidator,
    postValidation,
    commentValidation,
    likeValidation,
    bookMarksValidation
}
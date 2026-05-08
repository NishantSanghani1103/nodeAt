import { checkToken } from "./checkToken.js";
import { checkUser, checkUserPassword } from "./databaseMiddleware/auth.middleware.js";
import { checkAddComment } from "./databaseMiddleware/comment.middleware.js";
import { checkFollow, checkIsFollow } from "./databaseMiddleware/follows.middleware.js";

export{
    checkToken,
    checkUser,
    checkUserPassword,
    checkFollow,
    checkIsFollow,
    checkAddComment
}
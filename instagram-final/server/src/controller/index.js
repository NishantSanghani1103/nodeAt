import { loginController, registerController } from "./auth.controller.js";
import { bookMarksAddController, bookMarksViewByUserController } from "./bookMark.controller.js";
import { commentAddController, commentViewPostController } from "./comment.controller.js";
import { followController, unfollowController } from "./follow.controller.js";
import { likeAddController, likeDeleteController, likeViewAllController, likeViewByUserIdController } from "./like.controller.js";
import { postAddController, postAllViewController, postViewController } from "./post.controller.js";
import { userViewController } from "./user.controller.js";

export {
    registerController,
    loginController,
    userViewController,
    followController,
    unfollowController,
    postAddController,
    postViewController,
    postAllViewController,
    commentAddController,
    commentViewPostController,
    likeAddController,
    likeViewByUserIdController,
    likeDeleteController,
    likeViewAllController,
    bookMarksAddController,
    bookMarksViewByUserController
}
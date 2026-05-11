import { loginController, registerController } from "./auth.controller.js";
import { bookMarksAddController, bookMarksViewByUserController } from "./bookMark.controller.js";
import { commentAddController, commentViewPostController } from "./comment.controller.js";
import { followController, unfollowController } from "./follow.controller.js";
import { likeAddController, likeDeleteController, likeViewAllController, likeViewByPostIdController, likeViewByUserIdController } from "./like.controller.js";
import { postAddController, postAllViewController, postViewByIdController, postViewController } from "./post.controller.js";
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
    postViewByIdController,
    commentAddController,
    commentViewPostController,
    likeAddController,
    likeViewByUserIdController,
    likeDeleteController,
    likeViewAllController,
    likeViewByPostIdController,
    bookMarksAddController,
    bookMarksViewByUserController
}
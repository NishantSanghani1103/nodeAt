import { followModel } from "./followModel/follow.model.js";
import { postModel } from "./postModel/post.model.js";
import { userModel } from "./userModels/user.model.js";


// for the post

userModel.hasMany(postModel, {
    foreignKey: "userId",
    as: "posts"
})

postModel.belongsTo(userModel, {
    foreignKey: "userId",
    as: "user"
})


// for the followers following.

userModel.belongsToMany(userModel, {
    as: "followers",
    through: followModel,
    foreignKey: "followingId",
    otherKey: "followerId"
});

userModel.belongsToMany(userModel, {
    as: "followings",
    through: followModel,
    foreignKey: "followerId",
    otherKey: "followingId"
});


followModel.belongsTo(userModel, {
    foreignKey: "followerId",
    as: "Followers"
});

followModel.belongsTo(userModel, {
    foreignKey: "followingId",
    as: "Followings"
});


export { userModel, postModel, followModel }
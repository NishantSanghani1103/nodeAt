import { bookmarkModel, followModel, postModel, userModel } from "./index.js";


// // for the post

userModel.hasMany(postModel, {
    as: "posts",
    foreignKey: "userId"
})

postModel.belongsTo(userModel, {
    as: "user",
    foreignKey: "userId"
})


// for the followers

// followers

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

// for the bookmarks

userModel.hasMany(bookmarkModel, {
    as: "bookMarks",
    foreignKey: "userId"
})

bookmarkModel.belongsTo(userModel, {
    as: "user",
    foreignKey: "userId"
})

// for the bookmarks

postModel.hasMany(bookmarkModel, {
    as: "bookMarks",
    foreignKey: "postId"
})

bookmarkModel.belongsTo(postModel, {
    as:"posts",
    foreignKey:"postId"
})
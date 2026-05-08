import { bookmarkModel, commentModel, followModel, likeModel, postModel, userModel } from "./index.js";


//  for the post

userModel.hasMany(postModel, {
    as: "posts",
    foreignKey: "userId"
})

postModel.belongsTo(userModel, {
    as: "user",
    foreignKey: "userId"
})


postModel.hasMany(commentModel, {
    as: "comments",
    foreignKey: "postId"
})

commentModel.belongsTo(postModel, {
    as: "posts",
    foreignKey: "postId"
})


userModel.hasMany(commentModel, {
    as: "comments",
    foreignKey: "userId"
})

commentModel.belongsTo(userModel, {
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
    as: "posts",
    foreignKey: "postId"
})


// for the like 

userModel.hasMany(likeModel, {
    as: "likes",
    foreignKey: "userId"
})

likeModel.belongsTo(userModel, {
    as: "user",
    foreignKey: "userId"
})

postModel.hasMany(likeModel, {
    as: "likes",
    foreignKey: "postId"
})

likeModel.belongsTo(postModel, {
    as:"posts",
    foreignKey:"postId"
})
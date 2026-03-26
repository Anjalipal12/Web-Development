// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// main()
//    .then(() => console.log("connection successful"))
//    .catch((err) => console.log(err));

// async function main(){
//     await mongoose.connect("mongodb://127.0.0.1:27017//relationDemo");
// }

// const userSchema = new Schema({
//     username: String,
//     email: String
// });

// const postSchema = new Schema({
//     content: String,
//     likes: Number,
//     user: {
//         type: Schema.Types.Objected,
//         ref: "User"
//     },
// });

// const User = mongoose.model("User", userSchema);
// const Post = mongoose.model("Post", postSchema);

// const addData = async () => {
//     let user1 = await User.find({username: "anjalipal"});
        
//     let post2 = new Post({
//         content: "Bye Bye :)",
//         likes: 7,
//     });

//     post2.user = user;

//     await user1.save();
//     await post2.save();
// };

// addData();

const del = async() => {
    await Post.findByAndDelete("651db703119223d32b0c102b");
    await UserActivation.findByIdAndDelete("651db5b552cf598a629e0efg");
};

del();
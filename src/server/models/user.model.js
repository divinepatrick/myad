import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: false,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            default: "https://tse1.explicit.bing.net/th?id=OIP.audMX4ZGbvT2_GJTx2c4GgHaHw&rs=1&pid=ImgDetMain",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
import mongoose from 'mongoose';

const schema = mongoose.Schema({
    
    uid: String,
    posts: [String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})


export default mongoose.model('WishlistModel', schema);

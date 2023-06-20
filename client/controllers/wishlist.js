

import express from 'express';
import WishlistModel from '../models/wishlist.js'
import PostMessage from '../models/postMessage.js';

const router = express.Router();



export const createwishlist = async (req,res) => {
    const [ postid, userid ] = req.body
    var postids = []
    try {
        
        var data = await WishlistModel.find()
        var newposts=[]
        var users = []
        var id=""

        data.forEach((d)=>{
            users.push(d.uid)
        })

        var bool = false
        users.forEach((user)=>{
            if (user === userid) {
                bool = true
            } 
        })

        if( bool ){//old user ' if user found
            data.forEach(async(itr)=>{
                if (itr.uid === userid) {
                    id= itr._id
                    newposts=itr.posts                    
                }
                
            })
            var checkexist = false
            newposts.forEach(element => {
                if (element === postid){
                    checkexist = true;
                }
            })

            if (checkexist === false){
                newposts.push(postid)
            }
            
            const updatedPost = {  _id: id ,uid:userid,posts:newposts};
            const result =await WishlistModel.findByIdAndUpdate(id, updatedPost);

            const alldata = await WishlistModel.find()
            alldata.forEach((d)=>{
            
                if (d.uid === userid) {
                    postids = d.posts
                }
            
            })
            PostMessage.find({
                '_id': { $in: postids}
            }).then((result)=>{
                res.json({ data: result })
            });
        }
        else{//new user
            const result = await WishlistModel.create({uid:userid,posts:[postid]})
            const alldata = await WishlistModel.find()
            alldata.forEach((d)=>{
            
                if (d.uid === userid) {
                    postids = d.posts
                }
            
            })
            await PostMessage.find({
                '_id': { $in: postids}
            }).then((result)=>{
                res.json({ data: result })
            });
        }
        

    } catch (error) {    
        console.log(error);
    }

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fetchwishlist = async (req,res) => {
    const { id } = req.params ;//id is userid
    var postids=[]
    var posts= []
    try {

        const alldata = await WishlistModel.find()
        alldata.forEach((d)=>{
            
            if (d.uid === id) {
                postids = d.posts
            }
        })
        
        
        await PostMessage.find({
            '_id': { $in: postids}
        }).then((result)=>{
            res.json({ data: result })
        }).catch((err)=>console.log(err))
        
    } catch (error) {    
        res.status(404).json({ message: error.message });
    }
} 

export default router


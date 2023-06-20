import express  from "express";

const router = express.Router()

import {createwishlist,fetchwishlist} from '../controllers/wishlist.js'

router.post('/cw',createwishlist)
router.get('/:id',fetchwishlist)

export default router;
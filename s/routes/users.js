import express  from "express";

const router = express.Router()

import { signup,signin,reset} from '../controllers/user.js'

router.post('/signin',signin)
router.post('/signup',signup)
router.post('/reset',reset)

export default router;
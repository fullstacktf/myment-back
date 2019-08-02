import { Router } from 'express';
import UsersDTO from "../../../../types/UsersDTO";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const router: Router = Router();

export const usersController: Router = router;
const SECRET_KEY = "secretkey23456";

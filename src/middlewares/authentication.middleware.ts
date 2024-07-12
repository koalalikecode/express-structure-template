import jwt, { Secret } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import HttpStatusCodes from "../constants/HttpStatusCodes";

async function authenticateToken(
	req: Request,
	res: Response,
	next: NextFunction
) {
	// Get the auth header value

	const authHeader: any = req.header("authorization");

	const token = authHeader && authHeader.split(" ")[1];
	const secret = process.env.SECRET as Secret;

	if (token == null) return res.sendStatus(HttpStatusCodes.UNAUTHORIZED); // if there isn't any token

	const user: any = jwt.verify(token, secret);

	if (!user) return res.sendStatus(HttpStatusCodes.UNAUTHORIZED);

	// const checkUserExist = UserRepository.findById(user.id);

	// if (!checkUserExist) return res.sendStatus(HttpStatusCodes.UNAUTHORIZED);
	res.locals.user = user;

	next();
}

export default authenticateToken;

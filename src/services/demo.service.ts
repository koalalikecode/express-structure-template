import { Response, Request } from "express";
import HttpStatusCodes from "../constants/HttpStatusCodes";

// This file contains a service for handling business logic related to the request and response objects in an Express application.

const DemoService = {
	async getDemoData(req: Request, res: Response) {
		// This function is responsible for handling the logic to retrieve and return demo data.
		// It takes in the request and response objects as parameters.

		let data = {
			message: "Hello World",
		};

		// Set the HTTP status code to 200 (OK) and send the data as a JSON response.
		return res.status(HttpStatusCodes.OK).json(data);
	},
};

export default DemoService;

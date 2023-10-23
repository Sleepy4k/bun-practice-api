import { BunRequest } from "bunrest/src/server/request";
import { BunResponse } from "bunrest/src/server/response";

class UserController {
  static async index(req: BunRequest, res: BunResponse) {
    res.status(200)
      .setHeader('Content-Type', 'application/json')
      .json({
        "status": true,
        "message": "Get all user data",
        "data": []
      })
  }

  static async show(req: BunRequest, res: BunResponse) {
    const uid = req.params?.id || 0;

    res.status(200)
      .setHeader('Content-Type', 'application/json')
      .json({
        "status": true,
        "message": "Get single user data with id " + uid,
        "data": []
      })
  }
}

export default UserController;
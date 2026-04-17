import API from "./API";
import { User } from "../model/User";

class UserService {
   async getAll() {
      const res = await API.get("/users");
      return res.data;
   }

   async add(data) {
      const newUser = new User(
         data.prenom,
         data.login,
         data.password,
         data.role || "User"
      );
      return await API.post("/users", data);
   }
}

export default new UserService();
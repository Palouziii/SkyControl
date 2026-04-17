import api from "./api";

class AuthService {
   async register(data) {
      const res = await api.post("/users", data);
      return res.data;
   }


   async login(login, mdp) {
      const res = await api.post("/users/login", { login, mdp });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("users", JSON.stringify(res.data.users));

      return res.data;
   }

   logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("users");
   }

   getToken() {
      return localStorage.getItem("token");
   }

   getUser() {
      const users = localStorage.getItem("users");
      return users ? JSON.parse(users) : null;
   }

   isConnected() {
      return !!this.getToken();
   }

   isAdmin() {
      return this.getUser()?.role === "ADMIN";
   }
}

export default new AuthService();

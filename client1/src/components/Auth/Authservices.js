import { useState } from "react";
import axios from "axios";

export default function Authservices(initial) {
  const [dataService, setDataService] = useState(initial);

  const services = axios.create({
    baseURL: "http://localhost:5000/auth",
    withCredentials: true,
  });
  const login = (username, password) => {
    services
      .post("/login", { username, password })
      .then((response) => setDataService(response.data));
  };
  return [dataService, login];
}

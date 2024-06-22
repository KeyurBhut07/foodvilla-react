import { createContext } from "react";

const UsertContext = createContext({
  user: {
    name: "Keyur Bhut",
    email: "kb@gmail.com",
  },
});

export default UsertContext;

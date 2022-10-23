import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Minh Khoi Le",
    email: "khoi@exmaple.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tam Nguyen",
    email: "tamnguyen.pdl@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;

import UserManager from "./managers/UserManager.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const usersFilePath = path.join(__dirname, "data", "users.json");

const manager = new UserManager(usersFilePath);

const test = async () => {
	console.log("agregar usuario");
	await manager.addUser({
		nombre: "Francisco",
		apellido: "Boned",
		email: "franboo@lba.com",
		edad: 23,
	});
};

test();

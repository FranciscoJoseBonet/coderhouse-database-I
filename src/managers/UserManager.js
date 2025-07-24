import { promises as fs } from "fs";

export default class UserManager {
	constructor(path) {
		this.path = path;
	}

	async getUsers() {
		try {
			const data = await fs.readFile(this.path, "utf-8");
			return JSON.parse(data);
		} catch (error) {
			if (error.code === "ENOENT") return [];
			console.error("Error en la lectura: ", error);
			return [];
		}
	}

	async addUser(user) {
		try {
			const users = await this.getUsers();
			const newUser = { id: Date.now(), ...user };
			users.push(newUser);

			await fs.writeFile(this.path, JSON.stringify(users, null, 2));
		} catch (error) {
			console.error("Error al cargar el usuario: ", error);
		}
	}

	async deleteUser(userId) {
		try {
			const users = await this.getUsers();
			await fs.writeFile(
				this.path,
				JSON.stringify(
					users.filter((user) => user.id !== userId),
					null,
					2
				)
			);
		} catch (error) {
			console.error("Ocurrió un error al intentar eliminar el usuario: ", error);
		}
	}
}

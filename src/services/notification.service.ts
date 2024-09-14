import { Injectable } from "@nestjs/common";

@Injectable()
export class NotificationService {
  constructor() {}

	async productAdded(name: string) {
		console.log(`Product ${name} Has Been Added Successfully`);
		return `Product ${name} Has Been Added Successfully`;
	}

}
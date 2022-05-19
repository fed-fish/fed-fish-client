import { config } from 'dotenv';

import { FeedingAction, Fish } from '../objects-and-constants';

const enum HttpMethod {
	Get = 'GET',
	Post = 'POST',
	Patch = 'PATCH',
	Delete = 'DELETE',
}

config();

const baseUrl = process.env.PUBLIC_URL;

export async function getFish(): Promise<Fish[]> {
	const fish = await apiFetch<Fish[]>(
		`${baseUrl}/fish`,
	);

	return fish;
}

export async function getFishInfo(id: string): Promise<Fish> {
	const fishInfo = await apiFetch<Fish>(
		`${baseUrl}/fish/${id}`,
	);

	return fishInfo;
}

export async function addFish(fish: Fish): Promise<Fish> {
	const newFish = await apiFetch<Fish>(
		`${baseUrl}/fish`,
		HttpMethod.Post,
		fish,
	);

	return newFish;
}

export async function updateFish(id: string, action: FeedingAction): Promise<Fish> {
	const status = {
		feedingStatus: action === FeedingAction.Feed ? true : false,
	};

	const updateFish = await apiFetch<Fish>(
		`${baseUrl}/fish/${id}`,
		HttpMethod.Patch,
		status,
	);

	return updateFish;
}

export async function deleteFish(id: string): Promise<string> {
	const deletedFishId = await apiFetch<string>(
		`${baseUrl}/fish/${id}`,
		HttpMethod.Delete,
	);

	return deletedFishId;
}

async function apiFetch<T>(url: string, method = HttpMethod.Get, body?: object): Promise<T> {
	const bodyJson = JSON.stringify(body);

	const response = await fetch(
		url,
		{
			method,
			body: bodyJson,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	return await response.json();
}

import { handleAPIError, post, get } from "./requests";

import type { APIResult } from "./requests";

export type User = {
  name: string;
  email: string;
  firstLogin: boolean;
};

export type UserJSON = {
  name: string;
  email: string;
  module: number;
  firstLogin: boolean;
  _id: string;
};

export async function createUser(user: User): Promise<APIResult<UserJSON>> {
  try {
    const response = await post("/api/user/signup", user);
    const json = (await response.json()) as UserJSON;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function updateUser(user: User): Promise<APIResult<UserJSON>> {
  try {
    const response = await post(`/api/user/update/${user.email}`, user);
    const json = (await response.json()) as UserJSON;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

export async function getUser(email: String): Promise<APIResult<UserJSON>> {
  try {
    const response = await get(`/api/user/get/${email}`);
    const json = (await response.json()) as UserJSON;
    return { success: true, data: json };
  } catch (error) {
    return handleAPIError(error);
  }
}

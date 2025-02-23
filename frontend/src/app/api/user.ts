import { handleAPIError, post } from "./requests";

import type { APIResult } from "./requests";

export type User = {
  name: string;
  email: string;
};

export type UserJSON = {
  name: string;
  email: string;
  module: number;
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

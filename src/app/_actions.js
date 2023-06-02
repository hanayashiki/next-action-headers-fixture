'use server';

import { cookies } from "next/headers";

export async function act() {
  return cookies().get('token').value;
}

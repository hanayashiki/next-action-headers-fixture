'use client';

import { act } from "./_actions";

export default function Home() {
  return (
    <button onClick={() => act()}>
      Click this button to throw an "Method expects to have requestAsyncStorage,
      none available" error
    </button>
  );
}

export const runtime = 'edge';
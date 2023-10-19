/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST() {
  revalidateTag('prismic');

  return NextResponse.json({ revalidated: true, now: Date.now() });
}

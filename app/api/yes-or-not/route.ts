import { NextResponse } from "next/server";

export const GET = () => {
  const answer = Math.round(Math.random()) ? 'yes' : 'no'

  return NextResponse.json({
    data: answer,
    error: null,
  })
}
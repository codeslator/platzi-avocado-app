import { NextResponse } from "next/server";
import Database from "@/database/db";

export const GET = async () => {
  const db = new Database();
  const allEntries = await db.getAll();
  return NextResponse.json(allEntries);
}
import { NextRequest, NextResponse } from "next/server";
import Database from "@/database/db";

export const GET = async (request: NextRequest, { params }) => {
  const { id } = params;
  const db = new Database();
  const entry = await db.getById(id);
  if (!entry) return NextResponse.json({});
  return NextResponse.json(entry);
}
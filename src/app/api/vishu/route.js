import axios from "axios";
import { NextResponse } from "next/server";


export async function POST(req) {
  const body = await axios.post('https://vstoreserver.vercel.app/home/getallproduct');

        const response = await body.data;
      console.log("Response from API:", response.data);
  if (!response) {
    return NextResponse.json({ error: "No data found" }, { status: 404 });
  } 

return NextResponse.json(response);
}
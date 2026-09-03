import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const q = searchParams.get("q");

  if (!q || q.trim().length < 3) {
    // Do not make External API Call 
    return NextResponse.json([]);
  }

  const url = new URL(
    "https://nominatim.openstreetmap.org/search"
  );

  url.searchParams.set("q", q);
  url.searchParams.set("format", "jsonv2");
  url.searchParams.set("addressdetails", "1");
  url.searchParams.set("limit", "5");
  url.searchParams.set("countrycodes", "in");
  url.searchParams.set("accept-language", "en");

  try {
    const response = await fetch(url.toString(), {
      headers: {
        "User-Agent": "M_Cart/1.0",
      },
      
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch locations" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Location API error:", error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
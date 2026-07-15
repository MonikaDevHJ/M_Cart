import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import  {prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    const {
      fullName,
      phone,
      houseNo,
      area,
      city,
      state,
      pincode,
    } = body;

    if (
      !fullName ||
      !phone ||
      !houseNo ||
      !area ||
      !city ||
      !state ||
      !pincode
    ) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const address = await prisma.address.create({
      data: {
        userId,
        fullName,
        phone,
        houseNo,
        area,
        city,
        state,
        pincode,
      },
    });

    return NextResponse.json(
      {
        message: "Address saved successfully",
        address,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const address = await prisma.address.findFirst({
      where: {
        userId,
      },
    });

    return NextResponse.json(address, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
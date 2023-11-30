import { NextRequest, NextResponse } from "next/server";

export default async function POST(request: NextRequest) {
    const { name, subject, description } = await request.json();
    console.log(name, subject, description);
    return NextResponse.json({ message: 'Thanks for submitting your issue.'});
}

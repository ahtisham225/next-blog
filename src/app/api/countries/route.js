import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const countries = await prisma.country.findMany();
        return new NextResponse(JSON.stringify(countries, {status: 200})); 
    } catch (error) {
        return new NextResponse(JSON.stringify({message: "Something Wrong"}, {status: 500})
        );
    }
};

    
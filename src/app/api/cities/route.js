import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const queryString = req.url.split('?')[1];
    const queryParams = queryString.split('&');
    const countryIdParam = queryParams.find(param => param.startsWith('countryId='));
    const countryId = countryIdParam.split('=')[1];

    try {
        const cities = await prisma.city.findMany({
            where : {
                countryId: countryId
            }
        });
        return new NextResponse(JSON.stringify(cities, {status: 200})); 
    } catch (error) {
        return new NextResponse(JSON.stringify({message: "Something Wrong"}, {status: 500})
        );
    }
};
  

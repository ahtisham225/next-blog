import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const queryString = req.url.split('?')[1];
    const queryParams = queryString.split('&');
    const cityIdParam = queryParams.find(param => param.startsWith('cityId='));
    const cityId = cityIdParam.split('=')[1];

    try {
        const lawyers = await prisma.lawyer.findMany({
            where : {
                cityId: cityId
            }
        });
        return new NextResponse(JSON.stringify(lawyers, {status: 200})); 
    } catch (error) {
        return new NextResponse(JSON.stringify({message: "Something Wrong"}, {status: 500})
        );
    }
};
  

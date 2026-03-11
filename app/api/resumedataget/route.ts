import { NextResponse } from "next/server";

export async function GET() {
  try {
    let res = await fetch(
      `${process.env.NEXT_PUBLIC_RESUMEAPI_OPERATIONS}/get`,
    );
    let resdata = await res.json();
    if (resdata.status === 200) {
      return NextResponse.json({
        status: 200,
        msg: "resume data :",
        data: resdata?.resumedata,
      });
    }
    if (resdata.status === 404) {
      return NextResponse.json({
        status: 404,
        msg: "resume data is not found",
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: 404,
      msg: "resume data is not found",
    });
  }
}

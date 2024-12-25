import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  // ideally we should check the username and password in the database only if its right we should return the JWT

  const body = await req.json();

  const username = body.username;
  const password = body.password;

  //check in the db
  const userId = 1;
  const token = jwt.sign({ userId }, "SECRET");

  return NextResponse.json({
    token,
  });
}

// this is how we used to do in express

// app.post("/signin", (req, res) => {
//   const { username, passoword } = req.body;
//   const token = jwt.sign({ username }, "secret");
//   return res.json({
//     token,
//   });
// });

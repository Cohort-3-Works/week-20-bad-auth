"use client";
import axios from "axios";

export default function Signin() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="bg-white h-fit w-72 p-5 rounded-lg ">
        <div className="bg-white text-black focus:border">
          Signin Page <br />
          <input className="m-2 w-full" type="text" placeholder="username" />
          <input className="m-2 w-full" type="text" placeholder="password" />
          <button
            onClick={async () => {
              const res = await axios.post("http://localhost:3000/api/signin", {
                username: "skdfhsdlkf",
                password: "sdfkjasdlf",
              });
              localStorage.setItem("token", res.data.token);
            }}
            className="bg-black text-white p-2 rounded-full cursor-pointer"
          >
            send request
          </button>
        </div>
      </div>
    </div>
  );
}

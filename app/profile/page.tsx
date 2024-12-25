// "use client";

import axios from "axios";
// import { useEffect, useState } from "react";

// export default function Profile() {
//   const [profile, setProfile] = useState("");

//   useEffect(() => {
//     const res = axios
//       .get("http://localhost:3000/api/profile", {
//         headers: {
//           authorization: localStorage.getItem("token"),
//         },
//       })
//       .then((res) => {
//         setProfile(res.data.avatarUrl);
//       });
//   }, []);

//   return <div>{profile}</div>;
// }

// // cant use the above approach because it initially sends a empty HTMl page
// // after some time it is send the request to profile
// // of course i am sending the header with it which reads the token from backend
// // but we lose the power of server side rendering coz the first response we only had an empty page
// // the one very subtle problem not getting the user image rendered from the server

// what should we do then we should use server components

export default async function Profile() {
  const res = await axios.get("http://localhost:3000/api/profile", {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });

  const profilePicture = res.data.avatarUrl;
  // const profilePicture = "https://pic.png";

  return <div>{profilePicture}</div>;
}

// now this says localstorage in undefined because it is a server side component

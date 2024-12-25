"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    const res = axios
      .get("http://localhost:3000/api/profile", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setProfile(res.data.avatarUrl);
      });
  }, []);

  return <div>{profile}</div>;
}

// cant use the above approach because it initially sends a empty HTMl page
// after some time it is send the request to profile
// of course i am sending the header with it which reads the token from backend
// but we lose the power of server side rendering coz the first response we only had an empty page

"use client"
import React, { useEffect } from "react";
import Profilee from "../../../components/login/Profile";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";

const Profile =  () => {
  const { currentUser } = useAuth();
  const router = useRouter()
  useEffect(() => {
    if (currentUser === null) {
      router.push("/test/login");
    }
  });
  return (
    <div>
      <Profilee
      />
    </div>
  );
};

export default React.memo(Profile);

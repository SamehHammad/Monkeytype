"use client";
import React, { useEffect } from "react";
import Profilee from "../../../components/login/Profile";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import LoggingLaoding from "../../../components/login/LoggingLaoding";

const Profile = () => {
  const {
    currentUser,
    LogLoading,
    setLogLoading,
  } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (currentUser === null) {
      router.push("/test/login");
    }
  });
  useEffect(() => {
    setLogLoading(true);
    setTimeout(() => setLogLoading(false), 500);
  }, []);
  if (LogLoading) {
    return (<LoggingLaoding children={"Logging in..."}/>)
  }
  return (
    <div>
      <Profilee />
    </div>
  );
};

export default React.memo(Profile);

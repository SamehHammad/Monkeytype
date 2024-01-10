import React from "react";
import Profilee from "../../../components/login/Profile";
import { auth } from "../../../auth";
import { fetchUser } from "../../../lib/fetch";

const Profile = async () => {

  const session = await auth();
  const user = await fetchUser(session?.user?.email);
  return (
    <div>
      <Profilee
        username={user?.username}
        ca={user?.createdAt.toString().slice(4, 15)}
      />
    </div>
  );
};

export default React.memo(Profile);

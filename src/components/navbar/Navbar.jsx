import { auth } from "../../auth";
import Nav from "./Nav";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="flex w-full h-[5vh] items-center pt-12 p-10 justify-between">
      <Nav session={session}/>
    </div>
  );
};

export default Navbar;

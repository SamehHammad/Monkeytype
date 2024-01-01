import { FaCrown } from "react-icons/fa";

const TypingTestTable = ({ sortedUserData }) => {
  
  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 border-b text-softText text-md">#</th>
            <th className="py-2  text-softText text-md">Username</th>
            <th className="py-2 border-b text-softText text-md">WPM</th>
            <th className="py-2  text-softText text-md">Accuracy (%)</th>
          </tr>
        </thead>
        <tbody>
          {sortedUserData.map((user, index) => (
            <tr
              key={user.id}
              className={
                index % 2 === 0
                  ? "bg-bg2Color text-lightText"
                  : "bg-bgColor text-lightText"
              }
            >
              <td className="py-2 px-4 border-b text-center ">
                {index === 0 ? (
                  <FaCrown className="text-scoreColor text-center ms-[40%]" />
                ) : (
                  index + 1
                )}
              </td>
              <td className="py-2 px-4  text-center">{user.username}</td>
              <td className="py-2 px-4 border-b text-center">{user.wpm}</td>
              <td className="py-2 px-4 text-center">{user.accuracy}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TypingTestTable;

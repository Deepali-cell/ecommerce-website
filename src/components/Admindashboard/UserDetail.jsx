import { useContext } from "react";
import myContext from "../context/myContext";

function UserDetail() {
  const context = useContext(myContext);
  const { alluser } = context;
  return (
    <>
      <div className="mt-10  text-pink-500">
        <div className="flex justify-between px-20">
          <h1 className=" text-3xl font-bold">All Users</h1>
        </div>
        <div className="  border-2 border-pink-100 mx-[9em] inline-block mt-10 mb-10 text-left">
          <tabel className="text-left ">
            <tbody>
              <tr className="">
                <th
                  scope="col"
                  className="h-[4em] w-[8em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  S.no
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Uid
                </th>
                <th
                  scope="col"
                  className="h-[4em] w-[20em] px-6 border-b border-r border-pink-100 font-bold text-pink-600"
                >
                  Date
                </th>
              </tr>
              {alluser.map((user, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td className="h-[4em] px-6 border-r border-b border-pink-100">
                        {index + 1}
                      </td>
                      <td className="h-[4em] px-6 border-r border-b border-pink-100">
                        {user.role}
                      </td>
                      <td className="h-[4em] px-6 border-r border-b border-pink-100">
                        {user.name}
                      </td>
                      <td className="h-[4em] px-6 border-r border-b border-pink-100">
                        {user.email}
                      </td>
                      <td className="h-[4em] px-6 border-r border-b border-pink-100">
                        {user.uid}
                      </td>

                      <td className="h-[4em] px-6 border-b  border-pink-100">
                        {user.date}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </tabel>
        </div>
      </div>
    </>
  );
}
export default UserDetail;

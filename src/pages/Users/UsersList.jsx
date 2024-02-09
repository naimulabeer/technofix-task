import { useState } from "react";
import useUsers from "../../hooks/useUsers";
import { Link } from "react-router-dom";

function UsersList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");

  const allUsers = useUsers();

  const filteredUsers = allUsers.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (sortBy === "name") {
      return a.firstName.localeCompare(b.firstName);
    } else if (sortBy === "email") {
      return a.email.localeCompare(b.email);
    } else if (sortBy === "company") {
      return a.company.name.localeCompare(b.company.name);
    } else {
      return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">User List</h1>
      <div className="flex flex-wrap justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 px-4 py-2 input input-bordered input-accent w-full max-w-xs"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="select select-accent w-full max-w-xs mb-10"
        >
          <option value="">Sort by</option>
          <option value="name">Sort by name</option>
          <option value="email">Sort by email</option>
          <option value="company">Sort by company name</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedUsers.map((user) => (
          <div key={user.id} className="rounded-lg shadow-md overflow-hidden">
            <Link to={`/user/${user.id}`} className="block">
              <img
                className="w-full h-48 object-cover"
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
              />
              <div className="p-4 ">
                <h2 className="text-xl font-semibold mb-2">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-slate-500 mb-2">{user.email}</p>
                <p className="text-slate-500 mb-2">
                  <strong>Address:</strong> {user.address.address},{" "}
                  {user.address.city}
                </p>
                <p className="text-slate-500">
                  <strong>Company:</strong> {user.company.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersList;

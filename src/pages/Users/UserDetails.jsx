import { useParams } from "react-router-dom";
import useUsers from "../../hooks/useUsers";
import NoUsersFound from "../../components/NoUsersFound";

function UserDetails() {
  const { userId } = useParams();
  const allUsers = useUsers();
  const user = allUsers.find((user) => user.id === parseInt(userId));

  if (!user) {
    return (
      <>
        <NoUsersFound />
      </>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {`${user.firstName} ${user.lastName}'s`} Details
      </h1>
      <div className="card lg:card-side lg:w-[600px] md:w-96 bg-base-100 shadow-xl">
        <img
          className="w-48 h-48 object-cover"
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Address:</strong> {user.address.address},{" "}
            {user.address.city}
          </p>
          <p className="text-gray-600">
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

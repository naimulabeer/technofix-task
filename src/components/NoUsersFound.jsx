function NoUsersFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        className="w-12 h-12 mb-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 20a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5l2-3h4l2 3h5a1 1 0 011 1v13z"
        />
      </svg>
      <p className="text-gray-500">No users found</p>
    </div>
  );
}

export default NoUsersFound;

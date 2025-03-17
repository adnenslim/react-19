import { useNavigate, useParams } from "react-router-dom";

import { useUsers } from "@/hooks/useUsers";

export const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const users = useUsers();
  const user = users?.find((user) => user.id === parseInt(id || "", 10));

  const navigate = useNavigate();

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="bg-white flex flex-col justify-center items-center p-12 gap-12">
      <button type="button" onClick={() => navigate(-1)}>
        back
      </button>
      <h1>{user.username}</h1>
      <p>{user.email}</p>
      {/* Ajoutez d'autres détails ici */}
    </div>
  );
};

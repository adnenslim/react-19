import { fetchUsers } from "@/utils/api/users/users";

import { useQuery } from "./useQuery";

export const useUsers = () => {
  return useQuery("users", () => fetchUsers());
};

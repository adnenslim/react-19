import { useMemo } from "react";

import { useQuery } from "@/hooks/useQuery";
import { TUser } from "@/types/api/user";
import { fetchUsers } from "@/utils/api/users/users";

import { Card } from "../card/card";

type TCardListProps = { search: string };

export const CardList = ({ search }: TCardListProps) => {
  const users = useQuery("users", fetchUsers);

  const filteredUsers = useMemo(() => {
    return users?.filter((user) =>
      user.username.toLowerCase().includes(search.toLowerCase()),
    );
  }, [users, search]);

  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {filteredUsers?.map((user: TUser) => (
        <li key={user.id}>
          <Card user={user} />
        </li>
      ))}
    </ul>
  );
};

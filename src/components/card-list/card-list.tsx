import { useMemo } from "react";

import { useUsers } from "@/hooks/useUsers";
import { TUser } from "@/types/api/user";

import { Card } from "../card/card";

type TCardListProps = { search: string };

export const CardList = ({ search }: TCardListProps) => {
  const users = useUsers();

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

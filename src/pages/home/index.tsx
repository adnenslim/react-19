import { Suspense, useState } from "react";

import { CardList } from "@/components/card-list/card-list";
import ErrorBoundary from "@/components/error-boundry/error-boundry";
import { InputSearch } from "@/components/search/search";
import { fetchUsers } from "@/utils/api/users/users";
import { refetchQuery } from "@/utils/queryCache";

export const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <div
      className={
        "bg-white flex flex-col justify-center items-center p-12 gap-12"
      }
    >
      <InputSearch setSearch={setSearch} />
      <button type="button" onClick={() => refetchQuery("users", fetchUsers)}>
        🔄 Rafraîchir
      </button>
      <Suspense fallback={<p>Loading users...</p>}>
        <ErrorBoundary>
          <CardList search={search} />
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

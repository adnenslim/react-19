import { TUser } from "@/types/api/user";

/* export const usersPromise: Promise<TUser[]> = fetch(
  "https://jsonplaceholder.typicode.com/users",
)
  .then((response) => {
    if (Math.random() > 0.5) {
      return Promise.reject(new Error("Erreur simulée côté serveur !"));
    }

    if (!response.ok) {
      return Promise.reject(new Error(`API Error: HTTP ${response.status}`));
    }

    return response.json();
  })
  .catch((error) => {
    throw error;
  }); */

//export const usersPromise = fetchUsers();

export const fetchUsers = async (): Promise<TUser[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("API Error");
  const data = await response.json();
  return data;
};

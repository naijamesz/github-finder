import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserCard } from "./components/UserCard";
import { extractLocalUser } from "./components/utils/extract-local-user";
import { isGithubUser } from "./components/utils/typeguards";
import { defaultUser } from "./mock";
import { LocalGihubUser, GithubUser, GithubError } from "./types";

const BASE_URL = "https://api.github.com/users/";

function App() {
  const [user, setUser] = useState<LocalGihubUser | null>(defaultUser);

  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;

    const res = await fetch(url);
    const user = (await res.json()) as GithubUser | GithubError;

    if (isGithubUser(user)) {
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <Search hasError={!user} onSubmit={fetchUser} />
        {user && <UserCard {...user} />}
      </Container>
    </>
  );
}

export default App;

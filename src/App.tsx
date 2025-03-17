import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Header } from "@/components/header/header";
import { Home } from "@/pages/home";
import { UserDetails } from "@/pages/user-details/user-details";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

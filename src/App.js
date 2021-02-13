import "./styles.css";

// components
import Profile from "./components/Profile";
import UserList from "./components/UserList";

// context
import UserState from "./context/Users/UserState";

export default function App() {
  return (
    <UserState>
      <UserList />
      <Profile />
    </UserState>
  );
}

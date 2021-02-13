import "./styles.css";

// components
import Profile from "./components/Profile";
import UserList from "./components/UserList";

// context
import UserState from "./context/Users/UserState";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
}

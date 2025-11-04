import Chatpage from "./components/Chatpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import UserList from "./components/UserList";
import HomepageNav from "./components/Homepage";
import ChatList from "./components/ChatList";
import RoomList from "./components/RoomList";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/chats" element={<Chatpage />} /> */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomepageNav />} />
          <Route path="/chatpage" element={<Chatpage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/chats" element={<ChatList />} />
          <Route path="/rooms" element={<RoomList />} />
        </Route>
        {/*  */}
      </Routes>
    </Router>
  );
}

export default App;

import Chatpage from "./components/Chatpage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chats" element={<Chatpage />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<Chatpage />} />
          <Route path="/users" element={<UserList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

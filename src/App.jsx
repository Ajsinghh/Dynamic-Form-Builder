import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import NewForm from "./pages/NewForm";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/signout" element={<SignOut/>} />
        <Route path="/form/:id" element={<NewForm/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

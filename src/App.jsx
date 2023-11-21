
import { Home, Login, MyHome, SignUp } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header type='login' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/myhome' element={<MyHome />} />

        </Routes>
      </BrowserRouter>
        <Footer />
    </>

  );
}

export default App;

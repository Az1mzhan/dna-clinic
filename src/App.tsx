import { Header } from "./layout/header/Header";
import { Navbar } from "./layout/navbar/Navbar";
import { Footer } from "./layout/footer/Footer";
import { router } from "./Routes";
import { RouterProvider } from "react-router-dom";
import "./App.css?v=1.0.1";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

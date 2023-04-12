import { Route, Routes } from "react-router-dom";

import { About } from "./pages/About";
import Component1 from "./components/Component1";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Store } from "./pages/Store";
import { useState } from "react";

function App() {
  const [name, setName] = useState("met givename");
  function changeName() { setName("Ding a Dong met givename");
  }
  return ( 
           <ShoppingCartProvider>
        <Navbar/>
        <Container className="mb-4">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
  )
}

export default App
  
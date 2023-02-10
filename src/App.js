import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Item from "./pages/Item";
import Layout from "./pages/Layout";


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path=":item" element={<Item/>}/>
      </Route>
    </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Books from './Pages/Books';
import Header from './components/Header';
import Categories from "./Pages/Categories";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />}/>
      <Route path="/categories" element={<Categories/>}/>
      </Routes>
    </>
  );
}

export default App;

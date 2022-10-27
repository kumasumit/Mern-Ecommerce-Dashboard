
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav/>
          {/* ask rahul */}
          {/* ask rahul jab nav mein link de hi diye hain t yaha route ka kya kaam hain yaha */}
          {/* all common route for one routes path for Nav component will come here  */}
          <Routes>
            {/* all routes within a common route defined on Nav will be defined here */}
            <Route path="/" element={<h1>Product Component</h1>} />
            <Route path="/add" element={<h1> AddProduct Component</h1>} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/logout" element={<h1> Logout Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
          </Routes>
        
      </BrowserRouter>
      {/* since we wont be doing any routing for footer, hence it will be outside BrowserRouter */}
      <Footer/>
    </div>
  );
}

export default App;

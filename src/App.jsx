import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import Header from "./components/Header";

const App = () => {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/projects" element={ <Projects /> } />
    <Route path="/projects/:title" element={ <Project /> } />
    <Route path="/profile/:name" element={ <Profile /> } />
    </Routes>
    </BrowserRouter>
  )

}

export default App
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DetailsBlog from './components/DetailsBlog';
import FoundNothing from "./components/FoundNothing";

// const router=new createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />
//   },
//   {
//     path: '/create',
//     element: <Create />
//   }
// ])


function App() {
  return (
      <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blogs/:id' element={<DetailsBlog />} />
            <Route path='*' element={<FoundNothing />}></Route>
          </Routes>
          </div>
      </BrowserRouter>
      </div>
  );
}

export default App;

// Could not find a declaration file for module 'react-router-dom'. 'c:/Users/wp/Desktop/react-projects/dojo/node_modules/react-router-dom/index.js' implicitly has an 'any' type.
//  Try `npm i --save-dev @types/react-router-dom` if it exists or add a new declaration (.d.ts) file containing `declare module 'react-router-dom';`

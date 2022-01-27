
import '../App.css';
// import Main from "./Main.js"
import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom'
import Login from '../Pages/Login'
import User from '../Pages/User'

// function App() {
//   return (
//     <div className="App">s
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     <div> test</div>
//   );
// }

const App = () => {
  return (
    
    <Router>
    
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/User" element={<User />} />
      {/* <Route path="/about" component={} /> */}
    </Routes>
  </Router>
   
 
   
  )

}


export default App;

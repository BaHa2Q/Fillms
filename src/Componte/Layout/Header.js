import { Link } from "react-router-dom";

function App() {

    return (
      <div>
        <ul class="nav navbar  navbar-expand-sm justify-content-end bg-dark navbar-dark ">
        <li class="nav-item float-start">
        <Link to="/exam" class="nav-link" >Test</Link>
        </li>
        <li class="nav-item">
        <Link to="/exam" class="nav-link" >الواجبات</Link>
        </li>
        <li class="nav-item">
        <Link to="/student" class="nav-link" >الملف الشخصية</Link>
        </li>
        <li class="nav-item">
        <Link to="/" class="nav-link" >الرئيسة</Link>
        </li>
      </ul>
      </div>
    );
  }
  
  export default App;
  
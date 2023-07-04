  import './App.css';
  import {Link,Route,Switch,BrowserRouter} from "react-router-dom";
  import Login from "./Login";
  import Tasks from "./Tasks";
  import ForgotPass from "./ForgotPass";
  import Otp from "./Otp";

  function App() {

    return <div className="App">
          <Switch>
            <Route path = {["/Login","/"]} exact component = {Login}/>  
            <Route path = "/Tasks" exact component = {Tasks}/>
            <Route path = "/ForgotPass" exact component = {ForgotPass}/>
            <Route path = "/Otp" exact component = {Otp}/>
          </Switch>

      </div>
      
    ;
  }

  export default App;

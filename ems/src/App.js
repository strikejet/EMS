import './App.css';
import {Link,Route,Switch,BrowserRouter} from "react-router-dom";
import Login from "./Login";
import Tasks from "./Tasks";
import ForgotPass from "./ForgotPass";
import Otp from "./Otp";

import Signin from './pages/signin'
import Forgotpassword from './pages/forgotpassword';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import './App.css';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import  HeaderComponent from './components/HeaderComponent'
import pageNotFound from './pages/pageNotFound';
import EDashboard from './epages/edashboard';

function App() {

return <div className="App">
  <Switch>
    <Route path = {["/Login"]} exact component = {Login}/>  
    <Route path = "/Tasks" exact component = {Tasks}/>
    <Route path = "/ForgotPass" exact component = {ForgotPass}/>
    <Route path = "/Otp" exact component = {Otp}/>
    <Route path="/signin" component={Signin} />
    <Route path="/forgetpassword" component={Forgotpassword} />
    <Route path="/signup" component={Signup} />
    <Route path="/dashboard" component={Dashboard} />
    
    <Route path="/edashboard" component={EDashboard} />
    
    <Route path="*" component={pageNotFound} />
  </Switch>

</div>

;
}

export default App;

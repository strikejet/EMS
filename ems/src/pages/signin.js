import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../commons/constants'
import './cards.css'
import './signup.css'
import {toast} from 'react-toastify'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the history object
  const history = useHistory()

  //regular expression for email validation
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const checkUser = () => {
    if (email.length === 0) {
      toast.error('Invalid Credentials')
     
    } else if (password.length === 0) {
      toast.error('Invalid Credentials')
    } else if (!validateEmail(email)) {
      toast.error('Invalid Credentials')
    } else {
      // when a file needs to be uploaded use FormData
      const data = new FormData()

      // add the data
      data.append('email', email)
      data.append('password', password)

      // send the data to the API
      axios.post(url + '/user/signin', data).then((response) => {
        const result = response.data
        console.log(result)
        if (result.status === 'success') {
          
          
          localStorage.setItem('loginUser', JSON.stringify(result.data));

          const item = localStorage.getItem("loginUser")
          var jsonObj = JSON.parse(item)
          var name= jsonObj.firstName;
          if(name == "admin"){
            history.push('/dashboard/home')
            toast.success(' LogIn Successful')
          }
          else{
            // history.push('/signin')
            history.push('/edashboard/ehome')
            toast.success('Login successful')
            document.title ="Employee side"
          }

          // history.push('/dashboard/home')
        } else {
          toast.error(' LogIn  Failed!!')
          
        }
      })
    }
  }

  return (
    <div className='signin'>
    <div className="card">
      <div className="">
        {/* <h3 className="card-heading">Get started</h3> */}
      </div>

      
      <h1 className="page-title">Login</h1>
      <div className="mb-3">
        <label className="input-label">Email</label><br></br>
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          type="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="">Password</label><br></br>
        <input
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          type="password"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <button onClick={checkUser} className="btn btn-success">
          Login
        </button><br></br><br></br>
        <Link to="/forgetpassword" className="Link">Forgot Password
        </Link> <br></br>
      </div>
    </div>
    </div>
  )
}

export default Signin
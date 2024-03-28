import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customers from "./components/Customers";
import SignUp from "./pages/SignUp";
import io from 'socket.io-client'
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import UserHome from "./pages/UserHome";
import GeneratePLink from './pages/GeneratePLink';
import baseUrl from './helpers/getEnvironment';
import ExpandSideBar from './components/ExpandSideBar';
import CollapseSideBar from './components/CollapseSideBar';
import BottonNav from './components/BottonNav';
let dotEnv = import.meta.env




function App() {
  const [navBarState, setNavBarState] = useState("expand");
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    businessName: "",
    country: "",
    state: "",
    address: "",
    currency: "",
    businessPhone: "",
    businessEmail: ""
  })
  const [due, setDue] = useState("")


  const socket = io(baseUrl)

  useEffect(()=> {
    socket.on("message", (data)=> {
      // console.log(data.dueArr)
      // alert(JSON.stringify(data.message))
      console.log(data)
      if (data.dueArr !== "") {
        // alert(`due: ${JSON.stringify(due)}`)
        // alert(`msg: ${JSON.stringify(data.message)}`)
        if (due === data.message) {
          alert("same")
        } else {
          // alert(data.message[0].customer)
          setDue(data.message)
        }
        // setDue(data.message)
        
        // alert(typeof(data.message))
        // alert(data.message.length)
        // alert("k")
        // alert(JSON.stringify(data.message))
      } else {
        setDue("")
      }
      
    })
  }, [])

 
  let email
    let currentUser = localStorage.getItem("currentUser")
    if (currentUser) {
      currentUser = JSON.parse(currentUser)
      email = currentUser.email
    } else {
      email = ""
      console.log("No Emit Connection")
    }


  // setInterval(()=> {
  //   socket.emit("checkDues", {email})
  // },60000)
 

  return (
    <div>
         <div className="overflow-aut">
      {/* for desktop view */}
      <div className="xs:max-xl:hidden">
        
        {navBarState === "expand" ? (
          <ExpandSideBar
            // navItems={navItems}
            // setNavItems={setNavItems}
            setNavBarState={setNavBarState}
            // getResponse={getResponse}
            // handleTransact={handleTransact}
            // transactNav={transactNav}
            // setCustomersNav={setCustomersNav}
            // handleCreateNew={handleCreateNew}
            // customersNav={customersNav}
          />
        ) : (
          <CollapseSideBar
            // navItems={navItems}
            // setNavItems={setNavItems}
            setNavBarState={setNavBarState}
          />
        )}
      </div>
      {/* for mobile view */}
      <div className="xl:hidden">
        <BottonNav
          // navItems={navItems}
          // setNavItems={setNavItems}
          // setNavBarState={setNavBarState}
        />
      </div>
      </div>
         <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/customers" element={<Customers />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<Login userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/new-user" element={<NewUser userDetails={userDetails} setUserDetails={setUserDetails} />} />
      <Route path="/user/home" element={<UserHome due={due} setDue={setDue} navBarState={navBarState}  />} />
      <Route path="/generate-link" element={<GeneratePLink />} />
    </Routes>
    </div>
 
  )
}

export default App

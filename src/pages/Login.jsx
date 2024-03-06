import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import login_man from "../images/login_man.png";
import login_woman from "../images/login_woman.png";
import login_dots from "../images/login_dots.png";
import login_checked from "../images/login_checked.png";
let dotEnv = import.meta.env;

function Login({ userDetails, setUserDetails }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const [btnState, setBtnState] = useState(false);

  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  let baseUrl;
  if (dotEnv.MODE === "development") {
    baseUrl = dotEnv.VITE_DEV_URL;
  } else {
    baseUrl = dotEnv.VITE_PROD_URL;
  }

  async function handleSubmit(param) {
    if (param === "next") {
      navigate("/new-user");
    }
    if (param === "signIn") {
      try {
        let url = baseUrl + "/itrack/sign-in";
        let response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(signInDetails),
        });
        // alert("k")
        let data = await response.json();
        if (response.status === 200) {
          // alert(data.message)
          localStorage.setItem("currentUser", JSON.stringify(data.message));
          setBtnState(false);
          navigate("/user/home");
        } else {
          alert(data.message);
          setBtnState(false);
          console.log(error);
        }
      } catch (error) {
        alert("Error Signing In.\nPlease try again.");
        setBtnState(false);
        console.log(error);
      }
    }
  }
  return (
    <div className="fixed top-0 right-0 left-0 bg-slate-50 w-full h-full">
      <div className="flex ">
        <div className="w-2/3 xs:max-xl:w-full p-10 xs:max-xl:p-5 bg-yellow-40">
          <div
            onClick={() => navigate("/")}
            className="group flex gap-5 xs:max-xl:gap-2 items-center"
          >
            <div className="xs:max-xl:hidden">
              <ArrowBackIcon />{" "}
            </div>
            <div className="xl:hidden">
              <ArrowBackIcon />{" "}
            </div>
            <p className="font-semibold text-slate-700 text-xl xs:max-xl:text-base group-hover:text-red-600">
              <button>Go back</button>{" "}
            </p>
          </div>

          <div className="my-20 xs:max-xl:my-10">
            {newUser ? (
              <div className="">
                <h1 className="font-bold text-black text-2xl">
                  Lets's get started!
                </h1>
                <form
                  name="signUpForm"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit("next");
                  }}
                  className="mt-10 space-y-5"
                >
                  <div className="flex xs:max-xl:flex-col xs:max-xl:space-y-5 justify-between">
                    <div className="relative w-[48%] xs:max-xl:w-full">
                      <label
                        htmlFor="firstName"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        First Name
                      </label>
                      <input
                        required
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={userDetails.firstName}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full xs:max-xl:max-w-[400px] p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="relative w-[48%] xs:max-xl:w-full">
                      <label
                        htmlFor="lastName"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Last Name
                      </label>
                      <input
                        required
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={userDetails.lastName}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full xs:max-xl:max-w-[400px] p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <label
                        htmlFor="email"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Your Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={userDetails.email}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <div className="absolute right-5 top-4">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPassword(!showPassword);
                          }}
                          className="text-purple-700 xs:max-xl:text-sm font-medium"
                        >
                          {showPassword ? "HIDE" : "SHOW"}
                        </div>
                      </div>
                      <label
                        htmlFor="password"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Create a Password
                      </label>
                      <input
                        required
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={userDetails.password}
                        onChange={(e) =>
                          setUserDetails({
                            ...userDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg xs:max-xl:placeholder:text-transparent"
                        placeholder="Password (Minimum of 8 characters)"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="my-5 flex gap-4 items-center">
                      <input
                        type="checkbox"
                        onChange={() => setChecked(!checked)}
                        className="w-4 h-4"
                      />
                      <p className="xs:max-xl:text-xs">
                        I agree to iTrack's{" "}
                        <span className="font-light text-purple-900">
                          Privacy Policy
                        </span>{" "}
                        and{" "}
                        <span className="font-light text-purple-900">
                          Terms and Conditions
                        </span>
                      </p>
                    </div>
                    <div>
                      {checked ? (
                        <button className="hover:bg-green-600 active:bg-green-800 p-2 text-center w-full bg-purple-600 text-white text-lg rounded-lg">
                          Get Started!
                        </button>
                      ) : (
                        <button
                          className="p-2 text-center text-slate-100 w-full bg-gray-200 rounded-lg"
                          disabled
                        >
                          Get Started!
                        </button>
                      )}
                       <div className="xl:hidden">
                        <button onClick={() => setNewUser(true)} className="text-center w-full text-slate-500 font-semibold my-5">Already have an account ? <span className="text-blue-600">Sign In</span></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            ) : 
              // Welcome back
            (
              <div className="">
                <h1 className="font-bold text-black text-2xl">Welcome back!</h1>
                <p className="font-light text-lg">Sign in to your account</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit("signIn");
                  }}
                  className="mt-10 space-y-5"
                >
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <label
                        htmlFor="email"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Your Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        value={signInDetails.email}
                        onChange={(e) =>
                          setSignInDetails({
                            ...signInDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full xs:max-xl:max-w-[400px] p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <div className="absolute right-5 top-4">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPassword(!showPassword);
                          }}
                          className="text-purple-700 xs:max-xl:text-sm font-medium"
                        >
                          {showPassword ? "HIDE" : "SHOW"}
                        </div>
                      </div>

                      <label
                        htmlFor="password"
                        className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Enter Password
                      </label>
                      <input
                        required
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={signInDetails.password}
                        onChange={(e) =>
                          setSignInDetails({
                            ...signInDetails,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="w-full xs:max-xl:max-w-[400px] p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg xs:max-xl:placeholder:text-transparent"
                        placeholder="Password (Minimum of 8 characters)"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="my-2 flex gap-4 items-center">
                      <input
                        type="checkbox"
                        onChange={() => setChecked(!checked)}
                        className="w-4 h-4"
                      />
                      <p>Remain signed in </p>
                      
                    </div>
                    <p className="my-5 text-red-500">* Forgot password ?</p>
                    <div>
                      {!btnState ? (
                        <button
                          onClick={() => {
                            signInDetails.password && setBtnState(!btnState);
                            handleSubmit("signIn");
                          }}
                          className="relative hover:bg-green-600 active:bg-green-800 p-2 text-center w-full bg-purple-600 text-white text-lg rounded-lg"
                        >
                          {btnState && (
                            <div className="top-0 left-0 absolute w-full h-full bg-[rgba(200,200,200,0.6)] flex items-center justify-center rounded-lg">
                              <div className="w-5 h-5 rounded-full animate-spin border-t-2 border-white"></div>
                            </div>
                          )}
                          Continue
                        </button>
                      ) : (
                        <button
                          disabled
                          onClick={() => setBtnState(!btnState)}
                          className="relative p-2 text-center w-full bg-purple-600 text-white text-lg rounded-lg"
                        >
                          {btnState && (
                            <div className="top-0 left-0 absolute w-full h-full bg-[rgba(200,200,200,0.6)] flex items-center justify-center rounded-lg">
                              <div className="w-5 h-5 rounded-full animate-spin border-t-2 border-white"></div>
                            </div>
                          )}
                          Continue
                        </button>
                      )}
                      <div className="xl:hidden">
                        <button onClick={() => setNewUser(true)} className="text-center w-full text-slate-500 font-semibold my-5">Don't have an account ? <span className="text-blue-600">Create one</span></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        {newUser ? (
          <div className="fixed right-0 h-full w-1/3 bg-[#ECE3FE] p-10 xs:max-xl:hidden">
            <div className="font-bold text-right text-purple-700 underline">
              <button
                onClick={() => setNewUser(false)}
                className="underline hover:text-green-600"
              >
                Sign In
              </button>
            </div>

            <div className="relative mt-20 w-[80%] mx-auto bg-red-200 h-1/2 ">
              <div className="w-full h-full overflow-hidden rounded-r-xl">
                <img src={login_woman} />
              </div>
              <div className="flex pt-2 pl-2 gap-2 absolute left-20 bottom-5  h-14 rounded-l-lg w-full bg-white shadow shadow-slate-400">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-50">
                  <img src={login_checked} />
                </div>
                <div className="w-[80%]">
                  <p className="font-semibold text-purple-800 ">
                    Invoice Created
                  </p>
                  <p className="text-[10px] bg-red-20 text-purple-600 font-normal">
                    Your invoice has been successfully created!
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 w-[80%] mx-auto">
              <p className="text-black font-black text-center text-lg">
                Seamless Payments!
              </p>
              <p className="text-center font-light text-slate-950">
                iTrack helps you manage all customer payments related to your
                small business! Send invoices and debt reminders while avoiding
                misleading double entries
              </p>
            </div>
          </div>
        ) :
        // welcome back
        (
          <div className="fixed right-0 h-full w-1/3 bg-[#ECE3FE] p-10 xs:max-xl:hidden">
            <div className="font-bold text-right text-purple-700 underline">
              <button
                onClick={() => setNewUser(true)}
                className="underline hover:text-green-600"
              >
                Sign Up
              </button>
            </div>
            <div className="relative mt-20 w-[80%] mx-auto bg-red-200 h-1/2 ">
              <div className="w-full h-full overflow-hidden rounded-r-xl">
                <img src={login_man} />
              </div>

              <div className="flex pt-2 pl-2 gap-2 absolute left-20 bottom-5  h-14 rounded-l-lg w-full bg-white shadow shadow-slate-400">
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-purple-50">
                  <img src={login_checked} />
                </div>
                <div className="w-[80%]">
                  <p className="font-semibold text-purple-800 ">
                    Invoice Created
                  </p>
                  <p className="text-[10px] bg-red-20 text-purple-600 font-normal">
                    Your invoice has been successfully created!
                  </p>
                </div>
              </div>
            </div>
            <div className="my-3 w-[80%] mx-auto">
              <p className="text-black font-black text-center text-lg">
                Seamless Payments!
              </p>
              <p className="text-center font-light text-slate-950">
                iTrack helps you manage all customer payments related to your
                small business! Send invoices and debt reminders while avoiding
                misleading double entries
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;

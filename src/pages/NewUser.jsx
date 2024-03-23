import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login_man from "../images/login_man.png"
import itrack_logo from "../images/itrack_logo.png"
let dotEnv = import.meta.env

function NewUser({ userDetails, setUserDetails }) {
  const [introPage, setIntroPage] = useState(true);
  const [btnState, setBtnState] = useState(false)

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  let baseUrl;
  if (dotEnv.MODE === "development") {
    baseUrl = dotEnv.VITE_DEV_URL;
  } else {
    baseUrl = dotEnv.VITE_PROD_URL;
  }

  async function handleNext(param) {
    setBtnState(true)
          try {
            let url = baseUrl + "/itrack/create-user";
            // alert(url);
            let response = await fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(userDetails),
            });
            let data = await response.json();
            if (response.status === 200) {
              alert("User Created Successfully!")
              localStorage.setItem("currentUser", JSON.stringify(data.message));
            } else{
              alert(data.message)
            }
            navigate("/log-in");
          } catch (error) {
            console.log("errorKKL");
            alert("Error Creating User");
            navigate("/log-in");
          }
          setBtnState(false)
         
       
      }
    
  return (
    <div>
      {introPage ? (
        <div className="fixed top-0 left-0 flex h-full w-full bg-slate-100 items-center justify-center">
          <div className="w-1/3 xs:max-xl:w-full h-60 xs:max-xl:h-auto mx-auto bg-blue-30">
            <div className="w-[90%] mx-auto p-5 bg-slate-50 rounded-lg shadow shadow-slate-300 space-y-3">
              <div className="flex justify-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-80 flex items-center justify-center">
                  <img src={itrack_logo} />
                </div>
                <p className="font-semibold text-xl">iTrack</p>
              </div>
              <p className="font-semibold text-center">
                Before you continue, we'd like to know how you intend to use
                iTrack.
              </p>
              <p className="font-light text-slate-800 text-center">
                We'll use that information to personalize the App so you can
                have a more seamless experience! You can decide to skip and
                continue with this step later.
              </p>
              <div className="flex justify-between">
                <div className="w-[48%]">
                  <button
                    onClick={() => handleNext("skip")}
                    className="p-1 w-full text-center bg- rounded-md border border-slate-500 hover:border-white hover:text-red-500 "
                  >
                    Skip
                  </button>
                </div>
                <div className="w-[48%]">
                  <button
                    onClick={() => setIntroPage(false)}
                    className="p-1 w-full text-center bg-purple-600 text-slate-100 rounded-md border hover:bg-white hover:text-purple-600"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed xs:max-xl:overflow-scroll top-0 right-0 left-0 bg-slate-50 w-full h-full">
          <div className="flex">
            <div className="w-2/3 xs:max-xl:w-full p-10 xs:max-xl:p-5 bg-yellow-40">
              <div className="flex gap-5 items-center">
                <p className="font-semibold text-slate-700 text-xl">
                  <button onClick={() => navigate("/")}>
                    <div className="flex justify-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-80 flex justify-center items-center">
                        <img src={itrack_logo} />
                      </div>
                      <p className="font-semibold text-xl">iTrack</p>
                    </div>
                  </button>
                </p>
              </div>

              <div className="my-20">
                <div className="">
                  <h1 className="font-bold text-black text-2xl">
                    You're almost done!
                  </h1>
                  <p className="font-light text-lg">
                    We'd like to know more about your Business!
                  </p>
                  <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                    <div className="flex justify-between">
                      <div className="relative w-full">
                        <label
                          htmlFor="businessName"
                          className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                        >
                          Business Name
                        </label>
                        <input
                          required
                          spellCheck={false}
                          id="businessName"
                          name="businessName"
                          type="text"
                          value={userDetails.businessName}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                          placeholder="Enter Business Name"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="relative w-[48%]">
                        <label
                          htmlFor="country"
                          className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                        >
                          Country
                        </label>
                        <input
                          required
                          spellCheck={false}
                          id="country"
                          name="country"
                          type="text"
                          value={userDetails.country}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                          placeholder="Choose country"
                        />
                      </div>
                      <div className="relative w-[48%]">
                        <label
                          htmlFor="state"
                          className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                        >
                          State/Region
                        </label>
                        <input
                          required
                          spellCheck={false}
                          id="state"
                          name="state"
                          type="text"
                          value={userDetails.state}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                          placeholder="Select state or origin"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="relative w-full">
                        <label
                          htmlFor="address"
                          className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                        >
                          Address
                        </label>
                        <textarea
                          required
                          spellCheck={false}
                          id="address"
                          name="address"
                          type="text"
                          value={userDetails.address}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                          placeholder="Enter your business location"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="relative w-full">
                        <label
                          htmlFor="currency"
                          className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                        >
                          Currency
                        </label>
                        <input
                          required
                          spellCheck={false}
                          id="currency"
                          name="currency"
                          type="text"
                          value={userDetails.currency}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                          placeholder="Choose Currency"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap xs:max-xl:gap-5 justify-between">
                      <div className="relative w-[48%] xs:max-xl:w-full">
                        <label
                          htmlFor="businessPhone"
                          className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                        >
                          Business Phone
                        </label>
                        <input
                          required
                          spellCheck={false}
                          id="businessPhone"
                          name="businessPhone"
                          type="text"
                          maxLength={11}
                          value={userDetails.businessPhone}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                          placeholder="Enter Business phone"
                        />
                      </div>
                      <div className="relative w-[48%] xs:max-xl:w-full">
                        <label
                          htmlFor="businessEmail"
                          className="absolute bg-slate-50 px-2 ml-3 py-1 text-sm -top-3"
                        >
                          Business Mail
                        </label>
                        <input
                          required
                          spellCheck={false}
                          id="businessEmail"
                          name="businessEmail"
                          type="email"
                          value={userDetails.businessEmail}
                          onChange={(e) =>
                            setUserDetails({
                              ...userDetails,
                              [e.target.name]: e.target.value,
                            })
                          }
                          className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md text-lg"
                          placeholder="Enter Business mail"
                        />
                      </div>
                    </div>
                    <div>
                      <div>
                        <button
                           onClick={() => handleNext("skip")}
                           disabled={btnState}
                          className={`p-2 text-center w-full ${btnState ? "bg-white text-slate-300" : "bg-purple-600 text-white" }   text-lg rounded-lg hover:bg-transparent hover:text-purple-600 hover:font-medium`}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="xs:max-xl:hidden fixed right-0 h-full w-1/3 bg-purple-200 p-10">
              <p className="font-bold text-right text-red-500 underline">
                <button className="">Log out</button>
              </p>
              <div className="relative mt-20 w-[80%] mx-auto bg-red-200 h-1/2 ">
              <div className="w-full h-full overflow-hidden rounded-r-xl">
                <img src={login_man} />
              </div>
                <div className="flex pt-2 pl-2 gap-5 absolute left-20 bottom-10 h-14 rounded-l-lg w-full bg-slate-100">
                  <div className="w-7 h-7 rounded-full bg-purple-500"></div>
                  <div>
                    <p className="font-semibold text-purple-800 ">
                      Invoice Created
                    </p>
                    <p className="text-[.6rem] text-purple-600 font-normal">
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
                  small business! Send invoices and debt reminders while
                  avoiding misleading double entries
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewUser;

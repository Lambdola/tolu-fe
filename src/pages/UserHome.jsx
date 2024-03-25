import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";


import BottonNav from "../components/BottonNav";
import Transactions from "../components/Transactions";
import Customers from "../components/Customers";
import NewCustomer from "../components/NewCustomer";
import Invoices from "../components/Invoices";
import NewInvoice from "../components/NewInvoice";
import Dashboard from "../components/Dashboard";
import CollapseSideBar from "../components/CollapseSideBar";
import ExpandSideBar from "../components/ExpandSideBar";
import postHook from "../fetchHooks/postHook";
import Notifications from "../components/Notifications";
import NewCustomerAlert from "../components/NewCustomerAlert";

let dotEnv = import.meta.env;

function SideBar({ due, setDue }) {
  const navigate = useNavigate();
  const [navItems, setNavItems] = useState("Dashboard");
  const [showDues, setShowDues] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [user, setUser] = useState("");

  const [customersNav, setCustomersNav] = useState("");
  const [transactNav, setTransactNav] = useState("all");
  const [navBarState, setNavBarState] = useState("expand");
  const [navRes, setNavRes] = useState({
    dashboard: "",
    customers: "",
    transaction: "",
    invoices: "",
    createNew: "",
  });
  const [customerDetails, setCustomerDetails] = useState({
    firstName: "",
    lastName: "Doe",
    email: "",
    phone: "",
    country: "",
    state: "Oyo",
    address: "",
    zipCode: "",
    description: "",
    imageUrl: "",
  });

  const [loadingState, setLoadingState] = useState(false);
  const [createNewOptions, setCreateNewOptions] = useState({
    customer: false,
    transaction: false,
    invoice: false,
  });
  const [newCustomer, setNewCustomer] = useState("");
  const [product, setProduct] = useState([]);
  const [item, setItem] = useState({
    itemName: "",
    itemPrice: "",
    itemQty: "",
  });

  const [dbItems, setDbItems] = useState("Invoices");

  let baseUrl, url;
  if (dotEnv.MODE === "development") {
    baseUrl = dotEnv.VITE_DEV_URL;
  } else {
    baseUrl = dotEnv.VITE_PROD_URL;
  }

  function handleAddItem(e) {
    e.preventDefault();
    let newProduct;
    try {
      if (product.length < 1) {
        newProduct = [];
      } else {
        newProduct = [...product];
      }
    } catch (error) {
      newProduct = [];
    }

    newProduct.push(item);
    setProduct((n) => newProduct);
    setItem({
      itemName: "",
      itemPrice: "",
      itemQty: "",
    });
  }

  async function handleInvoiceSubmit() {
    let seller,
      customer,
      products,
      amountTotal,
      dateIssued,
      dateDue,
      paidStatus,
      debt;
    seller = JSON.stringify(user);
    customer = document.getElementById("selectCustomer").value;
    products = JSON.stringify(product);
    amountTotal = 0;
    for (let items of product) {
      amountTotal += parseFloat(items.itemPrice) * parseFloat(items.itemQty);
    }
    dateIssued = document.getElementById("dateIssue").value;
    dateDue = document.getElementById("dateDue").value;
    if (!dateIssued || !dateDue) {
      return 1;
    }
    let paidAmt = parseFloat(document.getElementById("paidStatus").value);

    if (paidAmt >= amountTotal) {
      paidStatus = "paid";
      debt = "0";
    } else {
      paidStatus = "unpaid";
      debt = (amountTotal - paidAmt).toString();
    }

    let invoiceDetails = {
      seller: seller,
      customer: customer,
      products: products,
      amountTotal: amountTotal.toString(),
      dateIssued: dateIssued,
      paidStatus: paidStatus,
      duePayDate: dateDue,
      debt: debt,
    };

    try {
      url = baseUrl + "/itrack/invoice-payment-link";
      let response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(invoiceDetails),
      });
      let data = await response.json();
      if (response.status === 200) {
        alert("Invoice Created for Customer Successfully");
        setNavItems("Customers");
        setCreateNewOptions({ ...createNewOptions, invoice: false });
      }
    } catch (error) {
      console.log(error);
      alert("Error Creating Invoice");
    }
  }

  // handleInvoiceSubmit()

  useEffect(() => {
    let currentUser;
    try {
      currentUser = localStorage.getItem("currentUser");
      currentUser = JSON.parse(currentUser);
      if (!currentUser.firstName) {
        navigate("/log-in");
      }
      setUser(currentUser);
    } catch (error) {
      navigate("/log-in");
    }

    async function getDashboard() {
      let response, data;
      let dbHold = {
        dashboard: "",
        customer: "",
        transaction: "",
      };
      try {
        url = baseUrl + "/itrack/dashboard";
        let response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: currentUser.email }),
        });
        data = await response.json();

        dbHold.dashboard = data.message;
      } catch (error) {
        console.log(error);
      }

      try {
        url = baseUrl + "/itrack/customers";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: currentUser.email }),
        });
        data = await response.json();
        setLoadingState(false);
        if (response.status === 200) {
          dbHold.customer = data.message;
        } else {
          dbHold.customer = "";
        }
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, customers: "" });
      }

      try {
        url = baseUrl + "/itrack/transactions";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: currentUser.email }),
        });
        data = await response.json();
        setLoadingState(false);
        localStorage.setItem("transactions", JSON.stringify(data.message));
        if (response.status === 200) {
          dbHold.transaction = data.mesage;
        } else {
          data.message = "";
        }
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, transaction: "" });
      }
      setNavRes({
        ...navRes,
        dashboard: dbHold.dashboard,
        customers: dbHold.customer,
        transaction: data.message,
      });
    }
    getDashboard();
  }, []);

  async function getResponse(param) {
    setNewCustomer("");
    setCreateNewOptions({ ...createNewOptions, invoice: false });
    // setLoadingState(true);
    let response, data;
    // if (param === "Dashboard") {
    //   try {
    //     url = baseUrl + "/itrack/dashboard";
    //     let response = await postHook(url, { sellerEmail: user.email }  )
    //     if (response.sucess) {
    //       setNavRes({ ...navRes, dashboard: data.message });
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    // if (param === "Customers") {
    //   setNewCustomer("");
    //   try {
    //     url = baseUrl + "/itrack/customers";
    //     response = await fetch(url, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ sellerEmail: user.email }),
    //     });
    //     data = await response.json();
    //     if (response.status === 200) {
    //       setLoadingState(false);
    //       setNavRes({ ...navRes, customers: data.message });
    //     } else {
    //       setLoadingState(false);
    //       setNavRes({ ...navRes, customers: "" });
    //     }
    //   } catch (error) {
    //     setLoadingState(false);
    //     setNavRes({ ...navRes, customers: "" });
    //   }
    // }
    // if (param === "Transactions") {
    //   try {
    //     url = baseUrl + "/itrack/transactions";
    //     response = await fetch(url, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ sellerEmail: user.email }),
    //     });
    //     data = await response.json();
    //     if (response.status === 200) {
    //       setLoadingState(false);
    //       localStorage.setItem("transactions", JSON.stringify(data.message));
    //       setNavRes({ ...navRes, transaction: data.message });
    //     } else {
    //       setLoadingState(false);
    //       // localStorage.setItem("transactions", JSON.stringify(data.message));
    //       setNavRes({ ...navRes, transaction: "" });
    //     }
    //   } catch (error) {
    //     setLoadingState(false);
    //     setNavRes({ ...navRes, transaction: "" });
    //   }
    // }
    // if (param === "Invoices") {
    //   let hold = { customer: "", transaction: "" };

    //   try {
    //     url = baseUrl + "/itrack/customers";
    //     response = await fetch(url, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ sellerEmail: user.email }),
    //     });
    //     data = await response.json();
    //     if (response.status === 200) {
    //       setLoadingState(false);
    //       hold.customer = data.message;
    //     } else {
    //       setLoadingState(false);
    //       data.message = "";
    //     }
    //   } catch (error) {
    //     setLoadingState(false);
    //     setNavRes({ ...navRes, customers: "" });
    //   }

    //   try {
    //     url = baseUrl + "/itrack/transactions";
    //     response = await fetch(url, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify({ sellerEmail: user.email }),
    //     });
    //     data = await response.json();
    //     setLoadingState(false);
    //     localStorage.setItem("transactions", JSON.stringify(data.message));
    //     hold.transaction = data.mesage;
    //     setNavRes({
    //       ...navRes,
    //       customers: hold.customer,
    //       transaction: data.message,
    //     });
    //   } catch (error) {
    //     setLoadingState(false);
    //     setNavRes({ ...navRes, invoices: "" });
    //   }
    // }
  }

  function handleCreateNew(param) {
    let createNewDiv = document.getElementById("createNewDiv");
    createNewDiv.style.visibility = "hidden";

    setCustomersNav(param);
    setNavItems("CreateNew1");
  }

  function handleTransact(param) {
    if (param === "all") {
      let localTransactions = localStorage.getItem("transactions");
      if (localTransactions) {
        localTransactions = JSON.parse(localTransactions);
        setNavRes({ ...navRes, transaction: localTransactions });
      }
    }
    if (param === "unpaidDebts") {
      let localTransactions = localStorage.getItem("transactions");
      let newTransact;
      if (
        localTransactions &&
        JSON.parse(localTransactions) !== "No Transaction Recorded"
      ) {
        localTransactions = JSON.parse(localTransactions);
        newTransact = localTransactions.filter(
          (items) => items.paidStatus === "unpaid"
        );
        setNavRes({ ...navRes, transaction: newTransact });
      }
    }
    if (param === "completedPayments") {
      let localTransactions = localStorage.getItem("transactions");
      let newTransact;
      if (
        localTransactions &&
        JSON.parse(localTransactions) !== "No Transaction Recorded"
      ) {
        localTransactions = JSON.parse(localTransactions);
        newTransact = localTransactions.filter(
          (items) => items.paidStatus === "paid"
        );
        setNavRes({ ...navRes, transaction: newTransact });
      }
    }
    // return
    setTransactNav(param);
  }

  async function handleCustomerFormChange(e) {
    let file = document.getElementById("file");
    // file.value = "";
    let name = e.target.name;
    let val = e.target.value;
    if (name === "imageUrl") {
      // val = e.target.files[0]
      try {
        let customerPhoto = new FormData();
        val = e.target.files[0];
        customerPhoto.append("file", val);
        customerPhoto.append("upload_preset", dotEnv.VITE_PRESET_NAME);
        customerPhoto.append("cloud_name", dotEnv.VITE_CLOUD_NAME);
        let response = await fetch(dotEnv.VITE_CLOUDINARY_URL, {
          method: "POST",
          body: customerPhoto,
        });

        let data = await response.json();
        // alert(data.url);
        if (data.url) {
          val = data.url;
        } else {
          val =
            "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Ffree-avatar-370-456322.png%3Ff%3Dwebp&tbnid=1rGRKqJOEIn0XM&vet=12ahUKEwiW_sajxt6CAxXMT6QEHazrC-AQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Ficonscout.com%2Ffree-icon%2Favatar-370&docid=7dU_SDvjQWqpFM&w=256&h=256&q=avatar%20icon&ved=2ahUKEwiW_sajxt6CAxXMT6QEHazrC-AQMygAegQIARB0";
        }
      } catch (error) {
        val =
          "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Ffree-avatar-370-456322.png%3Ff%3Dwebp&tbnid=1rGRKqJOEIn0XM&vet=12ahUKEwiW_sajxt6CAxXMT6QEHazrC-AQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Ficonscout.com%2Ffree-icon%2Favatar-370&docid=7dU_SDvjQWqpFM&w=256&h=256&q=avatar%20icon&ved=2ahUKEwiW_sajxt6CAxXMT6QEHazrC-AQMygAegQIARB0";
      }
    }
    setCustomerDetails({ ...customerDetails, [name]: val });
  }

  async function handleCustomerFormSubmit(e) {
    e.preventDefault();
    url = baseUrl + "/itrack/create-customer";
    let response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...customerDetails, sellerEmail: user.email }),
    });
    let data = await response.json();
    if (response.status === 200 && data.message.firstName) {
      alert("Customer Created Successfully");
      setNewCustomer(data.message);
      setNavItems("Customers");
    } else {
      alert(data.message);
    }
  }
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className="overflow-aut">
      {/* for desktop view */}
      <div className="xs:max-xl:hidden">
        {navBarState === "expand" ? (
          <ExpandSideBar
            navItems={navItems}
            setNavItems={setNavItems}
            setNavBarState={setNavBarState}
            getResponse={getResponse}
            handleTransact={handleTransact}
            transactNav={transactNav}
            setCustomersNav={setCustomersNav}
            handleCreateNew={handleCreateNew}
            customersNav={customersNav}
          />
        ) : (
          <CollapseSideBar
            navItems={navItems}
            setNavItems={setNavItems}
            setNavBarState={setNavBarState}
          />
        )}
      </div>
      {/* for mobile view */}
      <div className="xl:hidden">
        <BottonNav
          navItems={navItems}
          setNavItems={setNavItems}
          setNavBarState={setNavBarState}
        />
      </div>

      <div
        className={` fixed xs:max-xl:relative bg-red-40 z-10 h-full xs:max-xl:h-screen overflow-auto right-0 top-0 ${
          navBarState === "expand"
            ? "left-[20%] bg-green-40 xs:max-xl:left-0"
            : "left-[5%] bg-yellow-40 xs:max-xl:left-0"
        }`}
      >
        {/* header details */}
        <div className="bg-slate-100 h-28 xs:max-xl:h-auto px-2 flex justify-between p-5 w-full">
          {/* Olalekan Oladimeji Header Div */}
          <div className="flex xs:max-xl:flex-col w-[50%] xs:max-xl:w-2/3 ml-5 xs:max-xl:ml-2 xs:max-xl:gap-0 gap-5 items-center bg-red-40">
            <div className="w-[50%] xs:max-xl:w-full">
              <h2 className="font-semibold text-xl xs:max-xl:text-lg text-gray-950">
                Hello, {user.firstName + " " + user.lastName}!
              </h2>
              <p className="text-slate-500 font-normal text-base xs:max-xl:hidden">
                Manage your payments today!
              </p>
            </div>
            <div className="relative bg-red-20 w-[40%] xs:max-xl:w-full">
              <div className="absolute w-5 h-5 rounded-full bg-blue-600 top-2 left-2"></div>
              <input
                type="text"
                className="w-full px-10 py-2 xs:max-xl:py-1 rounded-lg bg-slate-200"
                placeholder="Search (Ctrl+/)"
              />
            </div>
          </div>

          <div className="relative flex xs:max-xl:hidden items-center gap-3 justify-end bg-red-40 w-[35%]">
            {newCustomer && (
             <NewCustomerAlert newCustomer={newCustomer} />
            )}

            <Notifications
              setShowDues={setShowDues}
              showDues={showDues}
              due={due}
            />

            <div className="relative w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
              <div className="absolute -bottom-0 -right-1 w-5 h-5 p-1 rounded-full bg-slate-100">
                <div className="w-full h-full bg-green-600 rounded-full"></div>
              </div>
              {user && (
                <p className="text-3xl text-slate-500">
                  {user.firstName[0] + user.lastName[0]}{" "}
                </p>
              )}
            </div>
            <div>
              <h2 className="font-semibold text-xl text-gray-950">
                {user.firstName + " " + user.lastName}!
              </h2>
              <div className="text-slate-500 font-normal text-base">
                {user.businessName ? (
                  <p>{user.businessName}</p>
                ) : (
                  "Finesse Store"
                )}
              </div>
            </div>
            <div></div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* main content */}
        <div className={`relative bg-white h-full flex pt-0 justify-center`}>
          {/* dashboard route */}
          {navItems === "Dashboard" && (
            <Dashboard
              setNavItems={setNavItems}
              setNavRes={setNavRes}
              navRes={navRes}
              setDbItems={setDbItems}
              dbItems={dbItems}
            />
          )}

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* customers route */}
          {navItems === "Customers" &&  (
            <div className="bg-red-40 w-full h-full">
                <Customers
                  navRes={navRes}
                  setNavItems={setNavItems}
                  setNewCustomer={setNewCustomer}
                  setLoadingState={setLoadingState}
                  setNavRes={setNavRes}
                />
            </div>
          )}
          {/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* New Customer Added Info Display */}
          {navItems === "Customers" && newCustomer.firstName && (
            <NewCustomer newCustomer={newCustomer} />
          )}

          {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
          {/* transactions route */}
          {navItems === "Transactions" && (
            <Transactions
              loadingState={loadingState}
              setLoadingState={setLoadingState}
              navRes={navRes}
              navBarState={navBarState}
              setCreateNewOptions={setCreateNewOptions}
              createNewOptions={createNewOptions}
              setNavItems={setNavItems}
            />
            // <p>ola</p>
          )}

          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

          {/* create invoice and no customers yet */}
          {navItems === "Transactions" &&
            createNewOptions.invoice &&
            navRes.customers === "" && (
              <div className="bg-slate-50 absolute top-28 left-0 h-full w-full overflow-scroll p-3 flex flex-col gap-2 text-xl items-center xs:max-xl:justify-start -mt-32 font-bold justify-center">
                <p className="xs:max-xl:pt-40 xs:max-xl:text-slate-500">
                  No customer yet
                </p>
                <p className="text-slate-900">Add a customer</p>
                <button
                  onClick={() => {
                    setNavItems("CreateNew");
                    setCreateNewOptions({
                      ...createNewOptions,
                      customer: true,
                    });
                  }}
                  className="hover:bg-green-600 active:bg-green-800 p-3 rounded-mg bg-purple-600 text-xl xs:max-xl:text-base text-slate-200 rounded-md"
                >
                  Create New Customer
                </button>
              </div>
            )}
          {/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          {navItems === "Invoices" &&
            createNewOptions.invoice &&
            (navRes.customers === "" ||
              navRes.customers !== "No Customers Created") && (
              <NewInvoice
                navRes={navRes}
                product={product}
                handleAddItem={handleAddItem}
                item={item}
                setItem={setItem}
                handleInvoiceSubmit={handleInvoiceSubmit}
                setNavItems={setNavItems}
                setProduct={setProduct}
                setCreateNewOptions={setCreateNewOptions}
                createNewOptions={createNewOptions}
              />
            )}
          {navItems === "Invoices" && !createNewOptions.invoice && (
            <div className="">
              {loadingState && <Loading navBarState={navBarState} />}
              {navRes.transaction === "No Transaction Recorded" ||
              navRes.transaction === "" ? (
                <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3">
                  <div className="w-full h-full flex pt-[20%] justify-center">
                    <div className="text-center space-y-2">
                      <p className="font-black text-xl">No Invoices Yet</p>
                      <p className="text-slate-600 font-normal">
                        You have not created an invoice yet !
                      </p>
                      <div>
                        <button
                          onClick={() =>
                            setCreateNewOptions({
                              ...createNewOptions,
                              invoice: true,
                            })
                          }
                          className="hover:bg-green-500 p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-lg"
                        >
                          Create Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Invoices
                  setCreateNewOptions={setCreateNewOptions}
                  createNewOptions={createNewOptions}
                  navRes={navRes}
                  showInvoice={showInvoice}
                  setShowInvoice={setShowInvoice}
                />
              )}
            </div>
          )}

          {navItems === "CreateNew" && customersNav === "createCustomer" && (
            <div className="bg-blue-40 absolute top-0 left-0 h-full w-full z-50 p-3">
              <div>
                <div className="inline-block">-</div>
                <p className="font-bold text-gray-800 text-2xl inline-block">
                  Create Customer
                </p>
              </div>
              <div className="rounded-lg shadow shadow-slate-600 my-5 p-5 bg-gray-100 ">
                <div className="flex items-center gap-5">
                  <div>
                    <div className="w-20 h-20 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="mt-2">
                    <div>
                      <input
                        id="file"
                        name="imageUrl"
                        onChange={handleCustomerFormChange}
                        type="file"
                        className="absolute w-32 p-2 opacity-0"
                      />
                      <button className="p-2 w-32 rounded-md text-slate-200 font-light bg-purple-700">
                        Upload photo
                      </button>
                    </div>
                    <p className="font-normal text-slate-700 text-sm">
                      Allowed JPG, GIF or PNG. Max size of 800KB
                    </p>
                  </div>
                </div>

                <form
                  onSubmit={handleCustomerFormSubmit}
                  className="mt-10 space-y-5"
                >
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="firstName"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstName"
                        required
                        name="firstName"
                        value={customerDetails.firstName}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="lastName"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastName"
                        required
                        name="lastName"
                        value={customerDetails.lastName}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="email"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        required
                        name="email"
                        value={customerDetails.email}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="phone"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        required
                        name="phone"
                        value={customerDetails.phone}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="country"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        value={customerDetails.country}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="state"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        State
                      </label>
                      <input
                        id="state"
                        name="state"
                        value={customerDetails.state}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="address"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        value={customerDetails.address}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                    <div className="relative w-[48%]">
                      <label
                        htmlFor="zipCode"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Zip Code
                      </label>
                      <input
                        id="zipCode"
                        name="zipCode"
                        value={customerDetails.zipCode}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="relative w-full">
                      <label
                        htmlFor="description"
                        className="absolute bg-gray-100 px-2 ml-3 py-1 text-sm -top-3"
                      >
                        Short note about customer (Optional)
                      </label>
                      <input
                        id="description"
                        name="description"
                        value={customerDetails.description}
                        onChange={handleCustomerFormChange}
                        type="text"
                        className="w-full p-3 bg-transparent border-[1px] border-slate-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="relative w-[10%]">
                      <button
                        type="submit"
                        className=" p-2 w-32 rounded-md text-slate-200 font-light bg-purple-700 hover:bg-purple-800 active:bg-green-600"
                      >
                        Save Changes
                      </button>
                    </div>
                    <div className="relative w-[10%]">
                      <button
                        onClick={() => {
                          setNavItems("Dashboard");
                        }}
                        className="p-2 w-24 rounded-md text-slate-400 font-light bg-transaprent border-[2px] border-slate-300 hover:bg-slate-300"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default SideBar;

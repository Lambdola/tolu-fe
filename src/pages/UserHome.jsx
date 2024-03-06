import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import customer_created from "../images/customer_created.png";
import itrack_logo from "../images/itrack_logo.png";
import dashboard_logo from "../images/dashboard_logo.png";
import customer_logo from "../images/customer_logo.png";
import transaction_logo from "../images/transaction_logo.png";
import invoice_logo from "../images/invoice_logo.png";
import createnew_logo from "../images/createnew_logo.png";
import drawer_handle from "../images/drawer_handle.png";
import dashboard_multi from "../images/dashboard_multi.png";
import user_octagon from "../images/user_octagon.png";
import transaction_minus from "../images/transaction_minus.png";
import buy_crypto from "../images/buy_crypto.png";
import logo_blue from "../images/logo_blue.png";
import BottonNav from "../components/BottonNav";

let dotEnv = import.meta.env;

function ExpandSideBar({
  navItems,
  setNavItems,
  setNavBarState,
  getResponse,
  handleTransact,
  transactNav,
  setCustomersNav,
  handleCreateNew,
  customersNav,
}) {
  let baseUrl, url;
  if (dotEnv.MODE === "development") {
    baseUrl = dotEnv.VITE_DEV_URL;
  } else {
    baseUrl = dotEnv.VITE_PROD_URL;
  }

  return (
    <div className="fixed z-20 left-0 top-0 h-full w-[20%] bg-slate-50">
      {/* name, logo */}
      <div className="relative border-b-[1px] border-slate-200">
        <div className="relative w-[70%] ml-5 flex items-center justify-start gap-[5%] bg-yellow-40 my-8 ">
          <div>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-400 rounded-xl cursor-pointer">
              <img src={itrack_logo} />
            </div>
          </div>
          <p className="text-black font-bold text-[1.8rem]">iTrack</p>
        </div>
        <div
          onClick={() => setNavBarState("collapse")}
          className="absolute -right-5 top-0  bg-red-40 h-full mt-[2%]"
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50">
            <img src={drawer_handle} />
          </div>
        </div>
      </div>

      {/* items */}
      <ul className="mx-5 space-y-5 my-5 bg-red-30">
        <li
          onClick={() => {
            getResponse("Dashboard");
            setNavItems("Dashboard");
            setCustomersNav("");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "Dashboard") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={dashboard_logo} />
          </div>
          <p className="text-xl font-light">Dashboard</p>
          {navItems === "Dashboard" && (
            <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            setNavItems("Customers");
            getResponse("Customers");
            setCustomersNav("");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "Customers") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={customer_logo} />
          </div>
          <p className="text-xl font-light">Customers</p>
          {navItems === "Customers" && (
            <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            setNavItems("Transactions");
            getResponse("Transactions");
            setCustomersNav("");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "Transactions") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={transaction_logo} />
          </div>
          <p className="text-xl font-light">Transactions</p>

          {navItems === "Transactions" && (
            <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
          )}
        </li>
        {navItems === "Transactions" && (
          <div className="ml-5 space-y-5 bg-red-60 w-full">
            <div
              onClick={() => handleTransact("all")}
              className="flex gap-5 items-center"
            >
              {transactNav === "all" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                // <p className="font-light text-base">All</p>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "all" ? (
                <p className="font-bold text-base">All</p>
              ) : (
                <p className="font-light text-base">All</p>
              )}
            </div>
            <div
              onClick={() => handleTransact("unpaidDebts")}
              className="flex gap-5 items-center"
            >
              {transactNav === "unpaidDebts" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "unpaidDebts" ? (
                <p className="font-bold text-base">Unpaid Debts</p>
              ) : (
                <p className="font-light text-base">Unpaid Debts</p>
              )}
            </div>
            <div
              onClick={() => handleTransact("completedPayments")}
              className="flex gap-5 items-center"
            >
              {transactNav === "completedPayments" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "completedPayments" ? (
                <p className="font-bold text-base">Completed Payments</p>
              ) : (
                <p className="font-light text-base">Completed Payments</p>
              )}
            </div>
          </div>
        )}
        <li
          onClick={() => {
            setNavItems("Invoices");
            getResponse("Invoices");
            setCustomersNav("");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "Invoices") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={invoice_logo} />
          </div>
          <p className="text-xl font-light">Invoices</p>
          {navItems === "Invoices" && (
            <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            setNavItems("CreateNew");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "CreateNew") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex ml-2 items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={createnew_logo} />
          </div>
          <p className="text-xl font-light">Create New</p>

          {navItems === "CreateNew1" && (
            <div>
              <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
              <p className="text-xl">Create New</p>
              <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
            </div>
          )}

          {navItems === "CreateNew" && (
            <>
              <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
              <div
                id="createNewDiv"
                className={`absolute top-0 w-2 h-full bg-red-60 -right-5 rounded-l-lg`}
              >
                <div className="relative left-2 bg-slate-200 w-60 shadow-md shadow-slate-600 rounded-md">
                  <div className="px-5 py-2 flex flex-col">
                    <div
                      onClick={() => {
                        handleCreateNew("createCustomer");
                      }}
                      className="py-3 text-left flex items-center gap-2 border-b border-slate-500"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <p className="text-slate-700 hover:text-purple-800 hover:font-semibold font-medium">
                        <button>Create Customer</button>
                      </p>
                    </div>
                    <div className="group py-3 text-left flex items-center gap-2  bg-red-20 w-60">
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <p className="text-slate-700 font-medium hover:text-purple-800 hover:font-semibold grou">
                        Create Invoice
                        <div className="absolute bg-slate-200 w-60 left-full top-16 hidden group-hover:block px-5 py-2 shadow-md shadow-slate-600 rounded-r-md ">
                          <div className="py-3 text-left flex items-center gap-2 border-b border-slate-500">
                            <div className="w-10 h-10 rounded-full bg-red-200"></div>
                            <p className="text-slate-700 font-medium">
                              <button>From Existing Debt</button>
                            </p>
                          </div>
                          <div className="py-3 text-left flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-red-200"></div>
                            <p className="text-slate-700 font-medium">
                              <button>New Invoice</button>
                            </p>
                          </div>
                        </div>
                      </p>

                      <div className="ml-5">=</div>
                    </div>
                    <div className="py-3 flex items-center gap-2 text-left border-t border-slate-500">
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <p className="text-slate-700 font-medium hover:text-purple-800 hover:font-semibold">
                        Record Transaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* { navItems === "CreateNew" && 
            <div className="absolute w-52 h-20 left-full bg-green-400">
                    ggg
            </div>} */}
        </li>
      </ul>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function CollapseSideBar({ navItems, setNavItems, setNavBarState }) {
  return (
    <div className="fixed z-20 left-0 top-0 h-full w-[5%] bg-slate-50">
      {/* name, logo */}
      <div className="relative border-b border-slate-900">
        <div className="relative w-[70%] mx-2 flex justify-start gap-[5%] bg-yellow-40 my-8 ">
          <div>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-40 rounded-xl">
              <img src={itrack_logo} />
            </div>
          </div>
          {/* <p className="text-black text-[2rem]">iTrack</p> */}
        </div>
        <div
          onClick={() => setNavBarState("expand")}
          className="absolute -right-5 top-0  bg-red-40 h-full mt-[2%]"
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50">
            <img src={drawer_handle} />
          </div>
        </div>
      </div>

      {/* items */}
      <ul className="mx-1 space-y-5 my-5 bg-red-30">
        <li
          onClick={() => setNavItems("Dashboard")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={dashboard_logo} />
          </div>
          {/* <p className="text-md">Dashboard</p> */}
          {navItems === "Dashboard" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => setNavItems("Customers")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={customer_logo} />
          </div>
          {/* <p className="text-xl">Customers</p> */}
          {navItems === "Customers" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => setNavItems("Transactions")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={transaction_logo} />
          </div>
          {/* <p className="text-xl">Transactions</p> */}
          {navItems === "Transactions" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => setNavItems("Invoices")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={invoice_logo} />
          </div>
          {/* <p className="text-xl">Invoices</p> */}
          {navItems === "Invoices" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => setNavItems("CreateNew")}
          className={`relative flex items-center gap-[5%] p-2 rounded-lg`}
        >
          <div className="flex ml-2 items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={createnew_logo} />
          </div>
          {/* <p className="text-xl">Create New</p> */}
          {navItems === "CreateNew" && (
            <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
          )}
        </li>
      </ul>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------------------------------------------------------

function SideBar({ due, setDue }) {
  const navigate = useNavigate();
  const [showDues, setShowDues] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  const [user, setUser] = useState("");
  const [navItems, setNavItems] = useState("Dashboard");
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

  // alert(JSON.stringify(due))

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
    // alert("g")
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
    setLoadingState(true);
    let response, data;
    if (param === "Dashboard") {
      try {
        url = baseUrl + "/itrack/dashboard";
        let response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        let data = await response.json();
        setNavRes({ ...navRes, dashboard: data.message });
      } catch (error) {
        console.log(error);
      }
    }
    if (param === "Customers") {
      setNewCustomer("");
      try {
        url = baseUrl + "/itrack/customers";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        data = await response.json();
        if (response.status === 200) {
          setLoadingState(false);
          setNavRes({ ...navRes, customers: data.message });
        } else {
          setLoadingState(false);
          setNavRes({ ...navRes, customers: "" });
        }
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, customers: "" });
      }
    }
    if (param === "Transactions") {
      try {
        url = baseUrl + "/itrack/transactions";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        data = await response.json();
        if (response.status === 200) {
          setLoadingState(false);
          localStorage.setItem("transactions", JSON.stringify(data.message));
          setNavRes({ ...navRes, transaction: data.message });
        } else {
          setLoadingState(false);
          // localStorage.setItem("transactions", JSON.stringify(data.message));
          setNavRes({ ...navRes, transaction: "" });
        }
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, transaction: "" });
      }
    }
    if (param === "Invoices") {
      let hold = { customer: "", transaction: "" };

      try {
        url = baseUrl + "/itrack/customers";
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        data = await response.json();
        if (response.status === 200) {
          setLoadingState(false);
          hold.customer = data.message;
        } else {
          setLoadingState(false);
          data.message = "";
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
          body: JSON.stringify({ sellerEmail: user.email }),
        });
        data = await response.json();
        setLoadingState(false);
        localStorage.setItem("transactions", JSON.stringify(data.message));
        hold.transaction = data.mesage;
        setNavRes({
          ...navRes,
          customers: hold.customer,
          transaction: data.message,
        });
      } catch (error) {
        setLoadingState(false);
        setNavRes({ ...navRes, invoices: "" });
      }
    }
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
    <div className="overflow-scroll">
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
      <div className="xl:hidden">
        <BottonNav
          navItems={navItems}
          setNavItems={setNavItems}
          setNavBarState={setNavBarState}
        />
      </div>

      <div
        className={` fixed z-10 h-full overflow-scroll right-0 top-0 ${
          navBarState === "expand"
            ? "left-[20%] bg-green-500 xs:max-xl:left-0"
            : "left-[5%] bg-yellow-500 xs:max-xl:left-0"
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
              <div className=" flex items-center justify-evenly absolute w-full h-14 rounded-lg z-50 bg-slate-50 shadow shadow-slate-400 top-10 right-80">
                <div className="w-[15%] bg-red-30 flex items-center justify-center">
                  <div className="w-2/3 h-1/2">
                    <img src={customer_created} />
                  </div>
                </div>
                <div className="w-[85%] bg-red-30 text-green-500">
                  <p className="text-[15px] font-bold">Customer created</p>
                  <p className="text-[11px]">
                    A new customer "
                    {newCustomer.firstName + " " + newCustomer.lastName}" has
                    been created{" "}
                  </p>
                </div>
              </div>
            )}

            <div className="z-50 relative w-10 h-10 bg-red-40 flex items-center justify-center">
              <div
                onClick={() => setShowDues(!showDues)}
                className="relative w-full h-full bg-slate-100 hover:bg-slate-300 flex items-center justify-center rounded-full shadow shadow-slate-400"
              >
                {!(due === "") && (
                  <div className="top-2 right-2 absolute w-3 h-3 rounded-full bg-red-700"></div>
                )}
                <NotificationsNoneIcon sx={{ fontSize: 30 }} />
              </div>
              <div className="absolute -bottom-16 -right-28 z-50">
                {showDues &&
                  due !== "" &&
                  due.map((item) => {
                    return (
                      <div className="flex w-80 justify-between h-10 items-center p-2 text-xl bg-slate-50">
                        <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center">
                          !
                        </div>
                        <div>
                          <p classNme="text-red-600">Unpaid Invoices</p>
                          <p className=" text-red-600 text-[15px]">
                            You still have unpaid invoices for {item.customer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>

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
              <p className="text-slate-500 font-normal text-base">
                {user.businessName ? (
                  <p>{user.businessName}</p>
                ) : (
                  "Finesse Store"
                )}
              </p>
            </div>
            <div></div>
          </div>
        </div>

        {/* main content */}
        <div
          className={`relative bg-gray-100 h-full flex pt-20 justify-center`}
        >
          {/* dashboard route */}
          {navItems === "Dashboard" && (
            <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-40 p-3">
              <div className="w-full h-full relative">
                <div className=" bg-yellow-30 gap-5 flex xs:max-xl:flex-col">
                  {/* multi color design */}
                  <div className="w-[25%] xs:max-xl:w-full h-96 flex flex-col rounded-md overflow-hidden bg-slate-50 shadow shadow-slate-300">
                    <div className="bg-[#8347E7] h-36">
                      <img
                        src={dashboard_multi}
                        className="h-full w-full object-fit xs:max-xl:object-cover"
                      />
                    </div>
                    <div className="pt-2 px-5">
                      <p className="text-black font-bold text-xl">Welcome!</p>
                      <p className="font-light text-base text-gray-600">
                        iTrack helps you manage all customer payments related to
                        your small business! Send Invoices and debt reminders
                        while avoiding misleading double entries!
                      </p>
                    </div>
                    <div className="py-4 px-5">
                      <div className="float-right w-1/2">
                        <button
                          onClick={() => {
                            setNavItems("CreateNew");
                          }}
                          className="p-2 bg-[#8347E7] w-full text-slate-200 font-light"
                        >
                          Create New
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* analytics count; customers, paid, debt */}
                  <div className="w-[72%] xs:max-xl:w-full bg-red-30">
                    <div className="flex xs:max-xl:flex-col xs:max-xl:gap-3 items-center justify-between">
                      <div className="xl:hidden w-full flex justify-evenly bg-red-40">
                        {[
                          {
                            title: "Total Customers",
                            data: navRes.dashboard.totalCustomers,
                          },
                          {
                            title: "Total Payment",
                            data: navRes.dashboard.totalPaid,
                          },
                        ].map((items) => {
                          return (
                            <div className="w-[45%] h-32 bg-slate-50 rounded-lg py-5 px-4 space-y-2">
                              <p className="font-light text-sm">
                                {items.title}
                              </p>
                              <p className="font-bold">{items.data}</p>
                              <p className="text-lime-400">0% </p>
                            </div>
                          );
                        })}
                      </div>

                      <div className="xl:hidden w-full flex justify-evenly bg-red-40">
                        {[
                          {
                            title: "Total active Invoices",
                            data: navRes.dashboard.totalInvoice,
                          },
                          {
                            title: "Total Debt",
                            data: navRes.dashboard.totalDebt,
                          },
                        ].map((items) => {
                          return (
                            <div className="w-[45%] h-32 bg-slate-50 rounded-lg py-5 px-4 space-y-2">
                              <p className="font-light text-sm">
                                {items.title}
                              </p>
                              <p className="font-bold">{items.data}</p>
                              <p className="text-lime-400">0% </p>
                            </div>
                          );
                        })}
                      </div>

                      {[
                        {
                          title: "Total Customers",
                          data: navRes.dashboard.totalCustomers,
                        },
                        {
                          title: "Total Payment",
                          data: navRes.dashboard.totalPaid,
                        },
                        {
                          title: "Total active Invoices",
                          data: navRes.dashboard.totalInvoice,
                        },
                        {
                          title: "Total Debt",
                          data: navRes.dashboard.totalDebt,
                        },
                      ].map((items) => {
                        return (
                          <div className="w-[23%] h-32 bg-slate-50 rounded-lg py-5 px-4 space-y-2 xs:max-xl:hidden">
                            <p className="font-light text-sm">{items.title}</p>
                            <p className="font-bold">{items.data}</p>
                            <p className="text-lime-400">0% </p>
                          </div>
                        );
                      })}
                    </div>

                    {/*  What would you like to get started with ? */}
                    <div>
                      <p className="py-2 text-black font-bold text">
                        What would you like to get started with ?
                      </p>
                      <div className="flex xs:max-xl:flex-col justify-between h-full relative">
                        {[
                          {
                            icon: user_octagon,
                            title: "New Customer",
                            text: "Quickly create profiles for your customers!",
                            path: "CreateNew",
                          },
                          {
                            icon: transaction_minus,
                            title: "Get Paid",
                            text: "Send an invoice to a owing customer!",
                            path: "Invoices",
                          },
                          {
                            icon: buy_crypto,
                            title: "Just made a sale ?",
                            text: "Quickly record transaction!",
                            path: "Invoices",
                          },
                        ].map((items) => {
                          return (
                            <div className="relative w-[32%] xs:max-xl:flex xs:max-xl:w-full h-[13.5rem] bg-slate-500 rounded-lg py-4 xs:max-xl:p-0">
                              <div className="flex justify-center items-center w-10 xs:max-xl:w-[20%] h-10 rounded bg-red-300 right-3 xs:max-xl:inset-0 absolute xs:max-xl:relative">
                                <img
                                  src={items.icon}
                                  className="xs:max-xl:w-10 xs:max-xl:h-10 xs:max-xl:object-cover"
                                />
                              </div>
                              <div className="xs:max-xl:w-[80%] rounded bg-red-500 left-3 right-3 absolute xs:max-xl:relative bottom-5 xs:max-xl:inset-0 ">
                                <div>
                                  <p className="font-bold text-base">
                                    {items.title}
                                  </p>
                                  <div className="flex h-10">
                                    <div className="w-[80%] bg-red-80">
                                      <p className="font-light text-red-90">
                                        {items.text}
                                      </p>
                                    </div>
                                    {items.title === "Just made a sale ?" ? (
                                      <div
                                        onClick={() => {
                                          setNavItems("CreateNew");
                                        }}
                                        className="flex justify-center items-center w-[20%] bg-blue-40"
                                      >
                                        <img src={logo_blue} />
                                      </div>
                                    ) : (
                                      <div
                                        onClick={() => {
                                          setNavItems(items.path);
                                        }}
                                        className="flex justify-center items-center w-[20%] bg-blue-40"
                                      >
                                        <img src={logo_blue} />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-52 bg-red-30">
                  <div className="relative flex justify-between bg-red-20 p-2">
                    <div
                      onClick={() => {
                        setDbItems("Invoices");
                      }}
                      className={`w-[20%] border-b-2 py-1 ${
                        dbItems === "Invoices"
                          ? "border-purple-700"
                          : "border-transparent"
                      } flex justify-center gap-1 items-center`}
                    >
                      <p className="text-gray-400">Invoices</p>
                      <div className="w-5 h-5 text-gray-400 bg-gray-200 rounded flex items-center justify-center">
                        <p>{navRes.transaction.length}</p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setDbItems("Transactions");
                      }}
                      className={`w-[20%] border-b-2 py-1 ${
                        dbItems === "Transactions"
                          ? "border-purple-700"
                          : "border-transparent"
                      } flex justify-center gap-1 items-center`}
                    >
                      <p className="text-gray-400">Transactions</p>
                      <div className="w-5 h-5 text-gray-400 bg-gray-200 rounded flex items-center justify-center">
                        <p>{navRes.transaction.length}</p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setDbItems("Debts");
                      }}
                      className={`w-[20%] border-b-2 py-1 ${
                        dbItems === "Debts"
                          ? "border-purple-700"
                          : "border-transparent"
                      } flex justify-center gap-1 items-center`}
                    >
                      <p className="text-gray-400">Debts</p>
                      <div className="w-5 h-5 text-gray-400 bg-gray-200 rounded flex items-center justify-center">
                        <p>{navRes.dashboard.totalDebtCount}</p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setDbItems("Payments");
                      }}
                      className={`w-[20%] border-b-2 py-1 ${
                        dbItems === "Payments"
                          ? "border-purple-700"
                          : "border-transparent"
                      } flex justify-center gap-1 items-center`}
                    >
                      <p className="text-gray-400">Payments</p>
                      <div className="w-5 h-5 text-gray-400 bg-gray-200 rounded flex items-center justify-center">
                        <p>{navRes.dashboard.totalPaidCount}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    {!(navRes.transaction === "") &&
                    dbItems === "Invoices" &&
                    navRes.dashboard.totalCustomers !== 0 ? (
                      <div className="h-40 overflow-scroll">
                        <div className="flex justify-between my-5 px-5">
                          <div className="w-[30%]">
                            <input
                              type="search"
                              className="w-full py-1 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                              placeholder="Search Customers"
                            />
                          </div>
                          <div className="flex gap-5">
                            <div>
                              <button
                                onClick={() => {
                                  setNavItems("Invoices");
                                  setCreateNewOptions({
                                    ...createNewOptions,
                                    invoice: true,
                                  });
                                }}
                                className="hover:bg-green-500 p-1 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-base"
                              >
                                Create Invoice
                              </button>
                            </div>
                            <div>
                              <button className="p-1 w-40 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 text-base flex justify-between items-center">
                                <p className="text-black text-base">Actions</p>
                                <div className="w-5 h-5 bg-red-200"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                          <div>
                            <input type="checkbox" />
                          </div>
                          <div className="bg-red-20 w-[14%]">
                            <p className="border-r border-slate-400 px-5 ">
                              #ID
                            </p>
                          </div>
                          <div className="bg-red-20 w-[25%] ">
                            <p className="border-r border-slate-400 px-5 ">
                              CUSTOMER
                            </p>
                          </div>
                          <div className="bg-red-20 w-[10%]">
                            <p className="border-r border-slate-400 px-5 ">
                              TOTAL
                            </p>
                          </div>
                          <div className="bg-red-20 w-[15%]">
                            <p className="border-r border-slate-400 px-5 ">
                              ISSUED DATE
                            </p>
                          </div>
                          <div className="bg-red-20 w-[15%]">
                            <p className="border-r border-slate-400 px-5 ">
                              BALANCE
                            </p>
                          </div>
                          <div className="bg-red-20 w-[10%]">
                            <p className="border-r border-slate-400 px-5 ">
                              ACTION
                            </p>
                          </div>
                        </div>
                        {navRes.transaction.map((items, index) => {
                          return (
                            <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                              <div>
                                <input type="checkbox" />
                              </div>
                              <div className="bg-red-20  w-[14%]">
                                {/* <div className="w-5 h-5 rounded-full bg-red-400"></div> */}
                                <p className="border- border-slate-400 px-5 text-lef">
                                  {items.invoiceId}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[25%] flex items-center justify-start pl-2">
                                <div className="w-5 h-5 rounded-full bg-red-900"></div>
                                <div className="border- border-slate-400 pl-2 flex justify-center flex-col w-[70%]">
                                  <p>{items.customer}</p>
                                  <p className=" bg-red-20">
                                    {/* {JSON.parse(items.customer).email}{" "} */}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%] pl-3">
                                <div className="">
                                  <p className="font-mono text-red-60 text-lg">
                                    # {items.amountTotal}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[15%] ml-2 pl-5">
                                <p className="border- border-slate-400 truncate text-ellipsis text-base ">
                                  {items.dateIssued
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[15%] ml-3">
                                <div className="border- border-slate-400 px-5">
                                  {items.paidStatus === "paid" ? (
                                    <span className="px-2 text-center py-1 bg-lime-200 text-green-500 text-sm rounded">
                                      {items.paidStatus}
                                    </span>
                                  ) : (
                                    <p className="font-mono text-red-600 text-lg">
                                      {items.debt}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%]">
                                <div className="h-full flex bg-blue-60 px-2 justify-between">
                                  <div>
                                    <DeleteOutlineIcon />
                                  </div>
                                  <div>
                                    <RemoveRedEyeOutlinedIcon />
                                  </div>
                                  <div>
                                    <MoreVertOutlinedIcon />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}{" "}
                      </div>
                    ) : (
                      <div className="w-full h-full pt-5 flex justify-center">
                        <div className="text-center space-y-2">
                          <p className="font-semibold text-xl">
                            No Invoices Yet
                          </p>
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
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {navItems === "Customers" && !newCustomer.firstName && (
            <div className="">
              {loadingState && <Loading navBarState={navBarState} />}
              {navRes.customers === "No Customers Created" ||
              navRes.customers === "" ? (
                <div>
                  <p className="text-xl font-bold">No Customers Created</p>

                
                </div>
              ) : (
                <div>
                  <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
                    {navRes.customers.length}
                    {/* ol */}
                    <div className="bg-gray-100 rounded-lg shadow shadow-slate-600 overflow-scroll ">
                      <div className="py-5 px-3 border-b border-slate-800">
                        <p className="text-slate-700 text-xl font-semibold">
                          Customers
                        </p>
                      </div>
                      <div className="flex justify-between my-5 px-5">
                        <div className="w-[30%]">
                          <input
                            type="search"
                            className="w-full py-2 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                            placeholder="Search Customers"
                          />
                        </div>
                        <div className="flex gap-5">
                          <div>
                            <button
                              onClick={() => setNavItems("CreateNew")}
                              className="p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 hover:bg-green-600 active:bg-green-800 text-lg"
                            >
                              Create Customer
                            </button>
                          </div>
                          <div>
                            <button className="p-2 w-40 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 text-lg flex justify-between items-center">
                              <p className="text-black text-xl">Actions</p>
                              <div className="w-5 h-5 bg-red-200"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div className="bg-red-20 w-[16%]">
                          <p className="border-r border-slate-400 px-5 ">
                            CUSTOMERS
                          </p>
                        </div>
                        <div className="bg-red-20 w-[16%] ">
                          <p className="border-r border-slate-400 px-5 ">
                            PHONE
                          </p>
                        </div>
                        <div className="bg-red-20 w-[16%]">
                          <p className="border-r border-slate-400 px-5 ">
                            EMAIL
                          </p>
                        </div>
                        <div className="bg-red-20 w-[20%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ADDRESS
                          </p>
                        </div>
                        <div className="bg-red-20 w-[16%]">
                          <p className="border-r border-slate-400 px-5 ">
                            TOTAL DEBT
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ACTIONS
                          </p>
                        </div>
                      </div>
                      <div className="h-80 overflow-scroll">
                        {navRes.customers.map((items, index) => {
                          return (
                            <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40 border-b-[1px]  border-slate-300">
                              <div>
                                <input type="checkbox" />
                              </div>
                              <div className="bg-red-20 w-[16%] flex items-center justify-center ml-5">
                                <div className="w-[20%] flex items-center justify-center">
                                  <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center overflow-hidden">
                                    <img
                                      src={items.imageUrl}
                                      className="w-full h-full"
                                    />
                                  </div>
                                </div>

                                <p className="w-[80%] border-slate-400 pl-1 truncate text-ellipsis ">
                                  {items.firstName + " " + items.lastName}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[16%] ">
                                <p className="border- border-slate-400 ">
                                  {items.phone}{" "}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[16%]">
                                <p className="border- border-slate-400 truncate text-ellipsis ">
                                  {items.email}{" "}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[20%]">
                                <p className="border- border-slate-400 px-2 truncate text-ellipsis ">
                                  {items.address}{" "}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[16%]">
                                <p className="border- border-slate-400 px-5 flex gap-1 ">
                                  # {items.debt ? <p>{items.debt}</p> : 0}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[10%]">
                                <div className="h-full w-full flex justify-start bg-blue-00 ml-5">
                                  <div>
                                    <MoreVertOutlinedIcon />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {navItems === "Customers" && newCustomer.firstName && (
            <div className=" bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
              <div className="relative h-16 bg-red-300 rounded-t-lg rainbo overflow-hidden">
                <div className="absolute top-0 -left-5 bg-emerald-400 w-[30%] h-full -skew-x-12"></div>
                <div className="absolute top-0 left-[28%] bg-emerald-300 w-[20%] h-full -skew-x-12"></div>
                <div className="absolute top-0 left-[48%] bg-orange-200 w-[10%] h-full -skew-x-12"></div>
                <div className="absolute top-0 left-[55%] bg-red-400 w-full h-full -skew-x-12"></div>
              </div>
              <div className="h-20 rounded-b-lg bg-red-60 shadow-md shadow-slate-400">
                <div className="absolute w-24 h-24 top-14 left-10 rounded-lg bg-white p-1">
                  <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                    <img src={newCustomer.imageUrl} />
                  </div>
                </div>
                <div className="ml-32 p-4 h-full bg-yellow-30 flex justify-between">
                  <div>
                    <p className="text-lg font-bold">
                      {newCustomer.lastName + "   " + newCustomer.firstName}
                    </p>
                    <div className="flex gap-5">
                      <div className="flex bg-red-20">
                        <div classsName="w-10 h-10 bg-red-300"></div>
                        <p className="text-slate-400 text-base font-semibold">
                          {newCustomer.country}{" "}
                        </p>
                      </div>
                      <div className="flex bg-red-20">
                        <div classsName="w-5 h-5 bg-red-300"></div>
                        <p className="text-slate-400 text-base font-semibold">
                          {newCustomer.country}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-60 flex items-end">
                    <button className="px-5 py-1 border-2 text-base font-semibold border-purple-800 rounded-lg">
                      EDIT
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative mt-5">
                <div className="absolute left-0 w-[25%] bg-red-40 top-0">
                  <div className="py-2 px-2 rounded-lg bg-slate-100 shadow-md shadow-slate-400 space-y-2 ">
                    <p className="monospace text-slate-400 text-sm">ABOUT</p>
                    <div>
                      <p className="text-slate-500 font-semibold">
                        Full Name:{" "}
                        {newCustomer.lastName + "   " + newCustomer.firstName}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold">
                        Status: ....{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold">
                        Total Debt: ....{" "}
                      </p>
                    </div>
                    <div>
                      <p className="monospace text-slate-400 text-sm">
                        CONTACTS
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold text-sm">
                        Contacts: {newCustomer.phone}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold text-sm">
                        Email: {newCustomer.email}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="monospace text-slate-400 text-sm">
                        ADDRESS
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold text-sm">
                        Location:{" "}
                        {newCustomer.zipCode +
                          ", " +
                          newCustomer.state +
                          ", " +
                          newCustomer.country}{" "}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 font-semibold">
                        Home: {newCustomer.address}{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute left-[30%] bg-red-500 h-full w-[50%]">
                  <div className="w-full h-full bg-slate-700"></div>
                </div>
              </div>
            </div>
          )}

          {navItems === "Transactions" && (
            <p className="">
              {loadingState && <Loading navBarState={navBarState} />}
              {navRes.transaction === "No Transaction Recorded" ||
              navRes.transaction === "" ? (
                <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3">
                  <div className="w-full h-full flex pt-[20%] justify-center">
                    <div className="text-center space-y-2">
                      <p className="font-black text-xl">No Transaction Yet</p>
                      <p className="text-slate-600 font-normal">
                        You have not created an invoice yet !
                      </p>
                      <div>
                        <button
                          onClick={() => {
                            // setNavItems("Invoices");
                            setCreateNewOptions({
                              ...createNewOptions,
                              invoice: true,
                            });
                          }}
                          className="hover:bg-green-500 p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-lg"
                        >
                          New Transaction
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>
                  <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
                    {navRes.transaction.length}
                    {/* ol */}
                    <div className="bg-gray-100 rounded-lg shadow shadow-slate-600 overflow-scroll ">
                      <div className="py-5 px-3 border-b border-slate-800">
                        <p className="text-slate-700 text-xl font-semibold">
                          Customers
                        </p>
                      </div>
                      <div className="flex justify-between my-5 px-5">
                        <div className="w-[30%]">
                          <input
                            type="search"
                            className="w-full py-2 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                            placeholder="Search Customers"
                          />
                        </div>
                        <div className="flex gap-5">
                          <div>
                            <button
                              onClick={() => {
                                setNavItems("Invoices");
                                setCreateNewOptions({
                                  ...createNewOptions,
                                  invoice: true,
                                });
                              }}
                              className="p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 hover:bg-green-600 active:bg-green-800 text-lg"
                            >
                              New Transaction
                            </button>
                          </div>
                          <div>
                            <button className="p-2 w-40 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 text-lg flex justify-between items-center">
                              <p className="text-black text-xl">Actions</p>
                              <div className="w-5 h-5 bg-red-200"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div className="bg-red-20 w-[14%]">
                          <p className="border-r border-slate-400 px-5 ">#ID</p>
                        </div>
                        <div className="bg-red-20 w-[20%] ">
                          <p className="border-r border-slate-400 px-5 ">
                            CUSTOMER
                          </p>
                        </div>
                        <div className="bg-red-20 w-[20%]">
                          <p className="border-r border-slate-400 px-5 ">
                            DESCRIPTION
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            TOTAL
                          </p>
                        </div>
                        <div className="bg-red-20 w-[15%]">
                          <p className="border-r border-slate-400 px-5 ">
                            DATE
                          </p>
                        </div>
                        <div className="bg-red-20 w-[12%]">
                          <p className="border-r border-slate-400 px-5 ">
                            STATUS
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ACTION
                          </p>
                        </div>
                      </div>
                      <div className="h-80 overflow-scroll">
                        {navRes.transaction.map((items, index) => {
                          return (
                            <div className="border-b-[1px] border-slate-300 px-5 py-2 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                              <div>
                                <input type="checkbox" />
                              </div>
                              <div className="bg-red-20  w-[14%]">
                                {/* <div className="w-5 h-5 rounded-full bg-red-400"></div> */}
                                <p className="border- border-slate-400 px-5 text-lef">
                                  {items.invoiceId}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[20%] flex items-center pl-3">
                                <div className="w-5 h-5 rounded-full bg-red-900">
                                  {/* <img src={} /> */}
                                </div>
                                <div className="border- border-slate-400 pl-2 flex justify-center flex-col w-[90%] bg-blue-40">
                                  {/* <p>{JSON.parse(items.customer).name}</p> */}
                                  <p className="truncate text-ellipsis bg-red-20">
                                    {items.customer}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[20%] ml-3 pl-3">
                                <div className="">
                                  <p>
                                    {JSON.parse(items.products).length > 1 ? (
                                      <p className="text-lg text-black font-semibold">
                                        {JSON.parse(items.products).length}{" "}
                                        items
                                      </p>
                                    ) : (
                                      <p className="text-lg font-semibold">
                                        {JSON.parse(items.products).length} item
                                      </p>
                                    )}
                                  </p>
                                  <div className="flex gap-1">
                                    {JSON.parse(items.products).map((items) => (
                                      <p className="p-[2px] rounded font-light text-black">
                                        {items.itemName},
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%] ml-3 pl-1">
                                <p className="border- border-slate-400 truncate text-ellipsis text-base ">
                                  #{items.amountTotal}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[15%] ml-3 pl-2">
                                <p className="border- border-slate-400">
                                  {items.dateIssued
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[12%]">
                                <div className="border- border-slate-400 flex ml-3 ">
                                  {items.paidStatus === "paid" ? (
                                    <span className="px-2 text-center py-1 bg-lime-200 text-green-500 text-sm rounded">
                                      {items.paidStatus}
                                    </span>
                                  ) : (
                                    <span className="px-2 py-1 text-center bg-pink-200 text-red-500 text-sm rounded">
                                      {items.paidStatus}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%]">
                                <div className="h-full flex  bg-blue-60  justify-between">
                                  {items.paidStatus === "paid" ? (
                                    <div className="h-full w-full flex bg-blue-60 px-4 justify-between">
                                      <div>
                                        <DeleteOutlineIcon />
                                      </div>
                                      <div>
                                        <MoreVertOutlinedIcon className="text-slate-300" />
                                      </div>{" "}
                                    </div>
                                  ) : (
                                    <div className="h-full w-full flex bg-blue-60 px-4 justify-between">
                                      <div>
                                        <DeleteOutlineIcon />
                                      </div>
                                      <div>
                                        <MoreVertOutlinedIcon />
                                      </div>{" "}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </p>
              )}
            </p>
          )}
          {navItems === "Transactions" &&
            createNewOptions.invoice &&
            navRes.customers === "" && (
              <div className="bg-slate-50 absolute top-28 left-0 h-full w-full overflow-scroll p-3 flex flex-col gap-2 text-xl items-center -mt-32 font-bold justify-center">
                <p>No customer yet.</p>

                <p>Add a customer.</p>
                <button
                  onClick={() => {
                    setNavItems("CreateNew");
                    setCreateNewOptions({
                      ...createNewOptions,
                      customer: true,
                    });
                  }}
                  className="hover:bg-green-600 active:bg-green-800 p-3 rounded-mg bg-purple-600 text-xl text-slate-200 rounded-md"
                >
                  Create New Customer
                </button>
              </div>
            )}
          {navItems === "Invoices" &&
            createNewOptions.invoice &&
            (navRes.customers === "" ||
              navRes.customers !== "No Customers Created") && (
              <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3">
                <div className="relative w-full h-full overflow-scroll">
                  <p className="text-slate-700 text-xl font-semibold mb-1">
                    Create Invoice
                  </p>
                  <div className="absolute w-full bg-gray-100 shadow-md shadow-slate-400 h-[70vh] overflow-scroll">
                    <div className="flex justify-between items-center bg-red-40 border-b-2 border-slate-400 p-5">
                      <div className="w-[45%] space-y-2">
                        <div className="flex gap-2 items-center">
                          <div className="w-8 h-8 rounded-md bg-purple-600"></div>
                          <p className="text-slate-600 font-bold">
                            Lena Stores
                          </p>
                        </div>
                        <p className="font-light text-slate-600">
                          (903) 545-2453 11953 County Rd #247 Oakwood,
                          Texas(TX), 75855
                        </p>
                      </div>
                      <div className="w-[45%] space-y-3 bg-red-30">
                        <div className="flex justify-evenly">
                          <p className="font-light text-slate-700 w-[40%] text-right">
                            Date Issued:
                          </p>
                          <div className="relative w-32 p-4 bg-red-20 rounded-md">
                            <input
                              type="date"
                              name="dateIssue"
                              id="dateIssue"
                              className="top-0 left-0 absolute w-full h-full p-2 bg-transparent border border-slate-400"
                            />
                          </div>
                        </div>
                        <div className="flex justify-evenly">
                          <p className="font-light text-slate-700 w-[40%] text-right">
                            Date Due:
                          </p>
                          <div className="relative w-32 p-4 bg-red-20 rounded-md">
                            <input
                              type="date"
                              name="dateDue"
                              id="dateDue"
                              className="top-0 left-0 absolute w-full h-full p-2 bg-transparent border border-slate-400"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="w-full px-5">
                        <p className="text-lg font-semibold my-1">
                          Invoice To:
                        </p>
                        <select
                          required
                          id="selectCustomer"
                          name="selectCustomer"
                          className="p-2 w-full my-2 text-lg"
                        >
                          <option selected disabled>
                            Select
                          </option>

                          {navRes.customers &&
                            navRes.customers.map((items) => {
                              return (
                                <option
                                  value={items.email}
                                  className=" text-[5px] bg-red-400 h-10"
                                >
                                  <div className=" bg-red-600 h-10">
                                    <p className="text-lg h-10">
                                      {items.email}
                                    </p>
                                  </div>
                                </option>
                              );
                            })}
                        </select>
                        <span>Amount Paid: </span>
                        <input
                          id="paidStatus"
                          name="paidStatus"
                          type="text"
                          className="p-2 w-full border-[1px] border-slate-400 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="m-3 border-[1px] border-slate-400 p-2 rounded-md ">
                      {product.length >= 1 && (
                        <div>
                          <div className="flex justify-between px-5 py-2 text-sm border-b border-slate-400">
                            <p className="w-[40%]">ITEM</p>
                            <p className="w-[20%]">PRICE</p>
                            <p className="w-[20%]">QUANTITY</p>
                          </div>
                          {product.map((items) => {
                            return (
                              <div className="flex justify-between px-5">
                                <p className="w-[40%]">{items.itemName} </p>
                                <p className="w-[20%]">{items.itemPrice}</p>
                                <p className="w-[20%]">{items.itemQty}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="">
                        <div className="flex justify-between px-5">
                          <p className="w-[40%]">Item</p>
                          <p className="w-[20%]">Unit Price</p>
                          <p className="w-[20%]">Quantity</p>
                        </div>
                        <form
                          onSubmit={handleAddItem}
                          className="flex flex-wrap justify-between p-5 mx-5 borde-[1px] border-slate-400 rounded-md bg-transparent"
                        >
                          <input
                            name="itemName"
                            value={item.itemName}
                            onChange={(e) =>
                              setItem({
                                ...item,
                                [e.target.name]: e.target.value,
                              })
                            }
                            className="w-[40%] py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent "
                            placeholder="Item name"
                          />
                          <input
                            name="itemPrice"
                            value={item.itemPrice}
                            onChange={(e) =>
                              setItem({
                                ...item,
                                [e.target.name]: e.target.value,
                              })
                            }
                            className="w-[20%] py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent"
                            placeholder="Item price"
                          />
                          <input
                            name="itemQty"
                            value={item.itemQty}
                            onChange={(e) =>
                              setItem({
                                ...item,
                                [e.target.name]: e.target.value,
                              })
                            }
                            className="w-[20%] py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent"
                            placeholder="Item quantity"
                          />
                          {/* <input className="my-2 w-full py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent" placeholder="Item name" /> */}
                          <div className="w-full text-right">
                            <button
                              type="submit"
                              className="hover:bg-green-500 p-1 my-2 w-28 rounded text-slate-200 font-normal bg-purple-700 text-lg"
                            >
                              Add Item
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="flex gap-2 p-3">
                        <div>
                          <button
                            onClick={() => handleInvoiceSubmit()}
                            className="hover:bg-green-500 p-1 my-2 w-20 rounded text-slate-200 font-normal bg-purple-700 text-lg"
                          >
                            SAVE
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              setNavItems("Dashboard");
                              setProduct([]);
                              setCreateNewOptions({
                                ...createNewOptions,
                                invoice: false,
                              });
                            }}
                            className="hover:bg-gray-800 p-1 my-2 w-20 rounded text-slate-400 font-normal text-lg border-[1px] border-slate-400 "
                          >
                            CANCEL
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="absolute left-[72%] w-[27%] bg-gray-100 shadow-md shadow-slate-400 p-5">
                </div> */}
                </div>
              </div>
            )}
          {navItems === "Invoices" && !createNewOptions.invoice && (
            <p className="">
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
                <p>
                  <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
                    {navRes.transaction.length}
                    {/* ol */}
                    <div className="bg-gray-100 rounded-lg shadow shadow-slate-600 overflow-scroll ">
                      <div className="py-5 px-3 border-b border-slate-800">
                        <p className="text-slate-700 text-xl font-semibold">
                          Customers
                        </p>
                      </div>
                      <div className="flex justify-between my-5 px-5">
                        <div className="w-[30%]">
                          <input
                            type="search"
                            className="w-full py-2 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                            placeholder="Search Customers"
                          />
                        </div>
                        <div className="flex gap-5">
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
                          <div>
                            <button className="p-2 w-40 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 text-lg flex justify-between items-center">
                              <p className="text-black text-xl">Actions</p>
                              <div className="w-5 h-5 bg-red-200"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                        <div>
                          <input type="checkbox" />
                        </div>
                        <div className="bg-red-20 w-[14%]">
                          <p className="border-r border-slate-400 px-5 ">#ID</p>
                        </div>
                        <div className="bg-red-20 w-[25%] ">
                          <p className="border-r border-slate-400 px-5 ">
                            CUSTOMER
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            TOTAL
                          </p>
                        </div>
                        <div className="bg-red-20 w-[15%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ISSUED DATE
                          </p>
                        </div>
                        <div className="bg-red-20 w-[15%]">
                          <p className="border-r border-slate-400 px-5 ">
                            BALANCE
                          </p>
                        </div>
                        <div className="bg-red-20 w-[10%]">
                          <p className="border-r border-slate-400 px-5 ">
                            ACTION
                          </p>
                        </div>
                      </div>
                      <div className="h-80 overflow-scroll">
                        {navRes.transaction.map((items, index) => {
                          return (
                            <div className="border-b-[1px] border-slate-300 px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                              {showInvoice && (
                                <div
                                  onClick={() => setShowInvoice(false)}
                                  className="absolute flex items-center justify-center bg-red-200 left-0 h-full w-full"
                                >
                                  <div>
                                    <div classNmae="flex justify-between bg-red-800">
                                      <div>
                                        <p>
                                          Seller Name:{" "}
                                          {
                                            JSON.parse(items.seller)
                                              .businessName
                                          }{" "}
                                        </p>
                                        <p>
                                          Seller Mail:{" "}
                                          {JSON.parse(items.seller).email}{" "}
                                        </p>
                                      </div>
                                      <div>
                                        <p>Invoice No: {items.invoiceId} </p>
                                        <p>Date Issues: {items.dateIssued}</p>
                                        <p>Date Due: {items.duePayDate} </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <div>
                                <input type="checkbox" />
                              </div>
                              <div className="bg-red-20  w-[14%]">
                                {/* <div className="w-5 h-5 rounded-full bg-red-400"></div> */}
                                <p className="border- border-slate-400 px-5 ">
                                  {items.invoiceId}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[25%] flex items-center justify-start pl-2">
                                <div className="w-5 h-5 rounded-full bg-red-900"></div>
                                <div className="border- border-slate-400 pl-2 flex justify-center flex-col w-[70%]">
                                  <p>{items.customer}</p>
                                  <p className=" bg-red-20">
                                    {/* {JSON.parse(items.customer).email}{" "} */}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%] pl-3">
                                <div className="">
                                  <p className="font-mono text-red-60 text-lg">
                                    # {items.amountTotal}
                                  </p>
                                </div>
                              </div>
                              <div className="bg-red-20 w-[15%] ml-2 pl-5">
                                <p className="border- border-slate-400 truncate text-ellipsis text-base ">
                                  {items.dateIssued
                                    .split("-")
                                    .reverse()
                                    .join("-")}
                                </p>
                              </div>
                              <div className="bg-red-20 w-[15%] ml-3">
                                <div className="border- border-slate-400 px-5">
                                  {items.paidStatus === "paid" ? (
                                    <span className="px-2 text-center py-1 bg-lime-200 text-green-500 text-sm rounded">
                                      {items.paidStatus}
                                    </span>
                                  ) : (
                                    <div className="flex items-center gap-3">
                                      <p className="font-mono text-red-600 text-lg">
                                        {items.debt}
                                      </p>
                                      <div
                                        onClick={() => {
                                          window.location.href = `${items.paymentLink}`;
                                        }}
                                      >
                                        <OpenInNewIcon className="text-blue-600" />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="bg-red-20 w-[10%]">
                                <div className="h-full flex  bg-blue-60 justify-between">
                                  <div className="h-full w-full flex bg-blue-60 px-1 justify-between">
                                    <div>
                                      <DeleteOutlineIcon />
                                    </div>
                                    <div onClick={() => setShowInvoice(true)}>
                                      <RemoveRedEyeOutlinedIcon />
                                    </div>
                                    <div>
                                      <MoreVertOutlinedIcon />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </p>
              )}
            </p>
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

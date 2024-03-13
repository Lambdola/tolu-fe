import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import React from "react";

function Customers({ navRes, setNavItems }) {
  return (
    <div>
      <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3 xs:max-xl:p-0">
        <div className="bg-gray-100  xs:max-xl:bg-white rounded-lg shadow shadow-slate-600  xs:max-xl:shadow-transparent overflow-scroll ">
          <div className="py-5 px-3 border-b border-slate-800 xs:max-xl:border-slate-300 xs:max-xl:fixed xs:max-xl:w-full">
            <p className="text-slate-700 text-xl font-semibold">Customers</p>
          </div>
          <div className="flex xs:max-xl:bg-white bg-red-40 justify-between my-5 px-5 xs:max-xl:fixed xs:max-xl:mt-24">
          <div className="w-[30%] xs:max-xl:w-10 bg-red-30 flex items-center justify-center">
              <input
                type="search"
                className="xs:max-xl:hidden w-full py-2 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                placeholder="Search Customers"
              />
              <input type="checkbox" className="xl:hidden" />
            </div>
            <div className="flex gap-5">
              <div>
                <button
                  onClick={() => setNavItems("CreateNew")}
                  className="p-2 w-40 xs:max-xl:w-32 xs:max-xl:max-w-sm rounded-md text-slate-200 font-normal bg-purple-700 hover:bg-green-600 active:bg-green-800 text-lg  xs:max-xl:text-sm"
                >
                  Create Customer
                </button>
              </div>
              <div> 
                  <button className="p-2 w-40  xs:max-xl:w-28 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 xs:max-xl:border-slate-500 text-lg flex justify-between items-center">
                    <p className="text-black text-xl  xs:max-xl:text-sm">Actions</p>
                    <div className="w-5 h-5 bg-red-200  xs:max-xl:w-3  xs:max-xl:h-3"></div>
                  </button>
                </div>
            </div>
          </div>
          {/* =========================== */}
          <div className="xs:max-xl:bg-white bg-red-40 px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm xs:max-xl:mt-40">
            <div>
              <input type="checkbox" />
            </div>
            <div className="bg-red-20 w-[16%] xs:max-xl:min-w-[10rem]">
              <p className="border-r border-slate-400 px-5  xs:max-xl:pl-5 ">CUSTOMERS</p>
            </div>
            <div className="bg-red-20 w-[16%]  xs:max-xl:min-w-[8rem]">
              <p className="border-r border-slate-400 px-5 xs:max-xl:pl-5">PHONE</p>
            </div>
            <div className="bg-red-20 w-[16%]  xs:max-xl:min-w-[10rem]">
              <p className="border-r border-slate-400 px-5 xs:max-xl:pl-5">EMAIL</p>
            </div>
            <div className="bg-red-20 w-[20%]  xs:max-xl:min-w-[8rem]">
              <p className="border-r border-slate-400 px-5 xs:max-xl:pl-5 ">ADDRESS</p>
            </div>
            <div className="bg-red-20 w-[16%]  xs:max-xl:min-w-[8rem]">
              <p className="border-r border-slate-400 px-5 xs:max-xl:pl-5">TOTAL DEBT</p>
            </div>
            <div className="bg-red-20 w-[10%]  xs:max-xl:min-w-[8rem]">
              <p className="border-r border-slate-400 px-5 xs:max-xl:pl-5 ">ACTIONS</p>
            </div>
          </div>
          <div className="">
            {navRes.customers.map((items, index) => {
              return (
                <div className="px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40 border-b-[1px]  border-slate-300  xs:max-xl:border-transparent">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="bg-red-20 w-[16%]  xs:max-xl:min-w-[10rem] flex items-center justify-center  xs:max-xl:justify-start ml-5  xs:max-xl:ml-0 xs:max-xl:pl-5">
                    <div className="w-[20%] xs:max-xl:w-auto flex items-center justify-center">
                      <div className="w-5 h-5 rounded-full bg-red-40 flex items-center justify-center overflow-hidden">
                        <img src={items.imageUrl} className="w-full h-full" />
                      </div>
                    </div>

                    <p className="w-[80%] xs:max-xl:w-auto border-slate-400 pl-1 truncate text-ellipsis ">
                      {items.firstName + " " + items.lastName}
                    </p>
                  </div>
                  <div className="bg-red-20 w-[16%]  xs:max-xl:min-w-[8rem] xs:max-xl:pl-5 ">
                    <p className="border- border-slate-400 ">{items.phone} </p>
                  </div>
                  <div className="bg-red-20 w-[16%]  xs:max-xl:min-w-[10rem]  xs:max-xl:pl-5">
                    <p className="border- border-slate-400 truncate text-ellipsis ">
                      {items.email}{" "}
                    </p>
                  </div>
                  <div className="bg-red-20 w-[20%]  xs:max-xl:pl-5  xs:max-xl:min-w-[8rem]">
                    <p className="border- border-slate-400 px-2 truncate text-ellipsis ">
                      {items.address}{" "}
                    </p>
                  </div>
                  <div className="bg-red-20 w-[16%]  xs:max-xl:min-w-[8rem]">
                    <p className="border- border-slate-400 px-5 flex gap-1 ">
                      # {items.debt ? <p>{items.debt}</p> : 0}
                    </p>
                  </div>
                  <div className="bg-red-20 w-[10%] xs:max-xl:w-auto">
                    <div className="h-full w-full flex justify-start bg-blue-00 ml-5">
                      <div>
                        <MoreVertOutlined />
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
  );
}

export default Customers;

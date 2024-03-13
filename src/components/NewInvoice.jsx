import React from "react";

function NewInvoice({
  navRes,
  product,
  handleAddItem,
  item,
  setItem,
  handleInvoiceSubmit,
  setNavItems,
  setProduct,
  setCreateNewOptions,
  createNewOptions,
}) {
  return (
    <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3">
      <div className="relative w-full h-full overflow-scroll">
        <p className="text-slate-700 text-xl font-semibold mb-1 xs:max-xl:text-base">
          Create Invoice
        </p>
        <div className="absolute w-full bg-gray-100 xs:max-xl:bg-white shadow-md shadow-slate-400 xs:max-xl:shadow-transparent  h-[70vh] xs:max-xl:h-auto overflow-scroll">
          <div className="flex xs:max-xl:flex-col xs:max-xl:space-y-5 justify-between xs:max-xl:justify-start xs:max-xl:items-start items-center bg-red-40 border-b-2 border-slate-400 xs:max-xl:border-transparent p-5 xs:max-xl:p-0">
            <div className="w-[45%] xs:max-xl:w-full space-y-2">
              <div className="flex gap-2 items-center">
                <div className="w-8 h-8 rounded-md bg-purple-600"></div>
                <p className="text-slate-600 font-bold">Lena Stores</p>
              </div>
              <p className="font-light text-slate-600 xs:max-xl:text-slate-900 xs:max-xl:font-normal">
                (903) 545-2453 11953 County Rd #247 Oakwood, Texas(TX), 75855l
              </p>
            </div>
            <div className="w-[45%] xs:max-xl:w-full space-y-3 xs:max-xl:space-y-3 bg-red-30">
              <div className="flex justify-evenly xs:max-xl:justify-start">
                <p className="font-light text-slate-700 xs:max-xl:text-slate-900 xs:max-xl:font-normal w-[40%] xs:max-xl:w-1/3 xs:max-xl:text-left text-right">
                  Date Issued:
                </p>
                <div className="relative w-32 p-4 bg-red-20 rounded-md">
                  <input
                    type="date"
                    name="dateIssue"
                    id="dateIssue"
                    className="top-0 left-0 absolute w-full h-full p-2 bg-transparent border border-slate-400 xs:max-xl:border-slate-200"
                  />
                </div>
              </div>
              <div className="flex justify-evenly xs:max-xl:justify-start">
              <p className="font-light text-slate-700 xs:max-xl:text-slate-900 xs:max-xl:font-normal w-[40%] xs:max-xl:w-1/3 xs:max-xl:text-left text-right">
                  Date Due:
                </p>
                <div className="relative w-32 p-4 bg-red-20 rounded-md">
                  <input
                    type="date"
                    name="dateDue"
                    id="dateDue"
                    className="top-0 left-0 absolute w-full h-full p-2 bg-transparent border border-slate-400 xs:max-xl:border-slate-200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-full px-5 xs:max-xl:px-2 bg-red-40">
              <p className="text-lg font-semibold xs:max-xl:font-bold my-1">Invoice To:</p>
              <select
                required
                id="selectCustomer"
                name="selectCustomer"
                className="p-2 w-full my-2 xs:max-xl:my-0 text-lg"
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
                          <p className="text-lg h-10">{items.email}</p>
                        </div>
                      </option>
                    );
                  })}
              </select>
              <span className="xs:max-xl:block xs:max-xl:mt-5 xs:max-xl:font-bold">Amount Paid: </span>
              <input
                id="paidStatus"
                name="paidStatus"
                type="text"
                className="p-2 w-full border-[1px] border-slate-400 rounded-md"
              />
            </div>
          </div>

          <div className="m-3 border-[1px] border-slate-400 xs:max-xl:border-transparent p-2 rounded-md ">
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
              <div className="flex justify-between px-5 xs:max-xl:px-1">
                <p className="w-[40%]">Item</p>
                <p className="w-[20%] xs:max-xl:w-[40%]">Unit Price</p>
                <p className="w-[20%]">Quantity</p>
              </div>
              <form
                onSubmit={handleAddItem}
                className="flex flex-wrap justify-between p-5 mx-5 xs:max-xl:p-0 xs:max-xl:mx-0 bg-red-400 borde-[1px] border-slate-400 rounded-md bg-transparent"
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
                  className="w-[20%] xs:max-xl:w-[40%] py-1 px-2 border-[1px] border-slate-400 rounded-md bg-transparent"
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
                    className="hover:bg-green-500 p-1 my-2 w-28 rounded text-slate-200 font-normal bg-green-700 text-lg"
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
  );
}

export default NewInvoice;

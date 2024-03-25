import NotificationsNone from '@mui/icons-material/NotificationsNone';
import React from 'react';

function Notifications({setShowDues, showDues, due}) {
  return (
    
    <div className="z-50 relative w-10 h-10 bg-red-40 flex items-center justify-center">
    <div
      onClick={() => setShowDues(!showDues)}
      className="relative w-full h-full bg-slate-100 hover:bg-slate-300 flex items-center justify-center rounded-full shadow shadow-slate-400"
    >
      {!(due === "") && (
        <div className="top-2 right-2 absolute w-3 h-3 rounded-full bg-red-700"></div>
      )}
      <NotificationsNone sx={{ fontSize: 30 }} />
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
  )
}

export default Notifications
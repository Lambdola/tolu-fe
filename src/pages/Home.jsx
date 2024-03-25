import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import itrack_logo from "../images/itrack_logo.png";
import business_people from "../images/flutter.jfif";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TagIcon from "@mui/icons-material/Tag";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function Home() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {load && <Loading />}
      <header className="fixed top-0 left-0 w-full flex justify-start gap-5 items-center px-5 xl:px-10 py-5 bg-white bg-opacity-80">
        {/* logo */}
        <div className="flex items-center justify-center bg-blue-30 w-14 h-14">
          <img src={itrack_logo} />
        </div>
        <nav className="bg-red-30 w-20">
          <p className="font-bold text-3xl">iTrack</p>
        </nav>
      </header>

      <div className="pt-32 xl:px-10 bg-red-70">
        <div className="xl:flex xl:items-center">
          <div className="xl:w-1/2">
            <div className="px-4">
              <p className="text-orange-500 font-serif text-4xl font-bold">
                Record and keep track of
              </p>
              <p className="text-black font-serif text-2xl font-bold">
                all issued invoices
              </p>
              <div className="font-light text-base mt-5">
                {/* <AcUnitIcon /> */}
                <p>
                  As a business owner, take control and keep track of all issued
                  invoices - paid or unpaid.
                </p>
                <p>
                  No more unaccounted sales and unsolicited payments. Watch
                  where and how your money moves by tracking issued invoices.
                </p>
              </div>
            </div>
            <div className="bg-red-30 my-10 px-4">
              <button
                onClick={() => navigate("/log-in")}
                className="w-full text-2xl bg-gray-950 p-3 rounded-md text-slate-100 hover:bg-green-600 active:bg-green-800"
              >
                Create an account
              </button>
            </div>
          </div>

          <div className="px-4 xl:w-1/2 bg-red-40">
            <div className="w-full h-52 xl:h-full bg-slate-200 rounded-lg">
              <img
                src={business_people}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="xl:flex">
          <div className="xl:w-1/2">
            <div className="my-10 px-4">
              <p className="font-light text-base">
                Receive money linked to an invoice from anywhere and with any
                means
              </p>
              <div className="mt-5 flex justify-start gap-10 items-center">
                <div className="flex items-center flex-col">
                  <div className="w-10 h-10 bg-slate-200 text-black flex items-center justify-center rounded-full">
                    <CreditCardIcon />
                  </div>
                  <p className="text-slate-600">Card</p>
                </div>
                <div className="flex items-center flex-col">
                  <div className="w-10 h-10 bg-slate-200 text-black flex items-center justify-center rounded-full">
                    <TagIcon />
                  </div>
                  <p className="text-slate-600">USSD</p>
                </div>
                <div className="flex items-center flex-col">
                  <div className="w-10 h-10 bg-slate-200 text-black flex items-center justify-center rounded-full">
                    <AccountBalanceIcon />
                  </div>
                  <p className="text-slate-600">Bank</p>
                </div>
              </div>
            </div>
            <div className="hidden xl:block w-[90%] mx-auto my-10 space-y-3 rounded-xl p-5 bg-zinc-950">
              <p className="text-2xl font-bold text-white">
                Ready to get started?
              </p>
              <p className="text-slate-300 font-light">
                Create an account now and get free access to all of our products
                and services.
                <br />
                Our tool, your power.
              </p>
              <div className="bg-red-30 my-10">
                <button
                  onClick={() => navigate("/log-in")}
                  className="hover:bg-orange-500 bg-slate-50 p-3 rounded-md text-black hover:text-white font-semibold"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-10 bg-black xl:w-1/2">
            <div className="text-white text-center font-normal">
              <p className="text-2xl">A one for all solution </p>
              <p className="text-lg">
                to keep you in{" "}
                <span className="text-red-500 font-serif">power</span>
              </p>
            </div>

            <p className="text-slate-100 font-light my-8 text-center">
              iTrack offers eye-catching and intuitive services to help keep and
              manage your business payments
            </p>

            <div className="space-y-7">
              <div className="bg-[#2F2F2F] p-5 rounded-2xl space-y-3">
                <p className="font-semibold text-white">
                  Create a customer profile
                </p>
                <p className="text-slate-400 font-light text-sm leading-7">
                  Our platform offers a seamless solution for creating
                  comprehensive customer profiles. With intuitive tools and
                  advanced analytics, you can easily gather and analyze
                  demographic, psychographic, and behavioral data to tailor your
                  strategies for optimal engagement and conversion.
                </p>
              </div>
              <div className="bg-[#2F2F2F] p-5 rounded-2xl space-y-3">
                <p className="font-semibold text-white">Generate invoices</p>
                <p className="text-slate-400 font-light text-sm leading-7">
                  Our platform offers a hassle-free solution for generating
                  invoices. With user-friendly templates and customizable
                  options, you can effortlessly create professional invoices
                  tailored to your business needs. Streamline your billing
                  process and get paid faster with our service.
                </p>
              </div>
              <div className="bg-[#2F2F2F] p-5 rounded-2xl space-y-3">
                <p className="font-semibold text-white">
                  Keep track of a customer invoice status
                </p>
                <p className="text-slate-400 font-light text-sm leading-7">
                  Our platform provides a seamless way to track customer invoice
                  status. Monitor payments effortlessly, ensuring transparency
                  and timely follow-ups. Stay organized and informed, empowering
                  you to manage finances efficiently and maintain strong client
                  relationships.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto my-10 space-y-3 rounded-xl p-5 bg-zinc-950 xl:hidden">
          <p className="text-2xl font-bold text-white">Ready to get started?</p>
          <p className="text-slate-300 font-light">
            Create an account now and get free access to all of our products and
            services.
            <br />
            Our tool, your power.
          </p>
          <div className="bg-red-30 my-10">
            <button
              onClick={() => navigate("/log-in")}
              className="hover:bg-orange-500 bg-slate-50 p-3 rounded-md text-black hover:text-white font-semibold"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

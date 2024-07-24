"use client"
import React, { useState } from "react"
import { IoIosMenu } from "react-icons/io"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className=" px-8 py-1 bg-white w-full mt-3">
        <nav className=" flex items-center justify-between w-full">
          <p className=" text-[1.4rem] font-bold">BroCode</p>
          <div className=" gap-x-3 items-center hidden md:flex">
            <button className=" rounded-full hover:bg-black/80 hover:text-white transition ease-in-out duration-300  px-3 py-1 border border-black text-[0.85rem]">
              Contact Us
            </button>
            <button className=" rounded-full hover:bg-black/90  px-3 py-1 border border-black text-white bg-black text-[0.85rem]">
              Collaborate
            </button>
          </div>
          <IoIosMenu
            className=" md:hidden block size-7"
            onClick={() => setOpen((p) => !p)}
          />
        </nav>
      </div>
      {open && (
        <nav className=" flex  items-center justify-center gap-x-4 mt-6">
          <button className=" rounded-full  px-3 py-1 border border-black text-[0.85rem]">
            Contact Us
          </button>
          <button className=" rounded-full  px-3 py-1 border border-black text-white bg-black text-[0.85rem]">
            Collaborate
          </button>
        </nav>
      )}
    </>
  )
}

export default Header

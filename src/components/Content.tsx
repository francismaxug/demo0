import Image from "next/image"
import React from "react"
import { BsArrowUpRightCircle } from "react-icons/bs"

const Content = () => {
  return (
    <div className="">
      <div className="bg-[url('/sample.png')] w-full h-screen md:h-full bg-cover bg-center md:bg-top   md:rounded-xl">
        <div className=" flex flex-col">
          <div className=" w-full h-full md:grid grid-cols-2 hidden">
            <div className=" flex flex-col  md:gap-y-28 xl:gap-y-16   border-[7px] border-b-0 border-white place-content-start w-full ">
              <div className="bg-white h-[13rem] w-full ">
                <div className="bg-[url('/pic11.png')]  w-full  bg-cover bg-center  rounded-md border-b-[8px] border-white ">
                  <div className=" bg-black/65 w-full  text-white py-4 mb-[0.01rem] px-3 overflow-hidden rounded-md space-y-6">
                    <div className=" flex items-start justify-between ">
                      <p className=" font-semibold lg:text-3xl text-2xl">
                        How are we contributing <br /> to health and covid19?
                      </p>
                      <div className=" flex flex-col gap-y-6 items-center mr-5">
                        <Image
                          src="/slide1.png"
                          width={500}
                          height={500}
                          alt="image"
                          className=" w-full h-full"
                        />
                        <Image
                          src="/slide0.png"
                          width={500}
                          height={500}
                          alt="image"
                          className=" w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="xl:flex items-end justify-between space-y-3 xl:space-y-0">
                      <div className=" text-gray-300 drop-shadow-2xl shadow-inner">
                        <p>Understanding the Global trend</p>
                        <p className=" text-[0.7rem] w-[22rem]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                      </div>
                      <button className="rounded-md hover:bg-white hover:text-black transition ease-in-out duration-300  px-4 py-1 border-2 border-white text-[0.85rem]">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-20 px-4 py-4  border-white border-b-[7px] overflow-hidden rounded-xl pt-6 2xl:pt-7">
                <p className=" 2xl:text-[4.3rem] text-6xl 2xl:leading-[4.3rem] text-white font-bold ">
                  Save the <br /> World
                </p>

                <div className=" text-gray-300 drop-shadow-2xl shadow-inner lg:flex  gap-x-2 items-center justify-between space-y-3 lg:space-y-0">
                  <p className=" text-[0.7rem] w-[22rem]">
                    Share your ideas and tell us how you can contribute to this
                    cause. Together, we can make an impact.
                  </p>
                  <button className="rounded-md hover:bg-green-600 ease-in-out duration-300  px-5 py-[0.35rem] bg-green-700 text-white text-[0.85rem]">
                    Contribute
                  </button>
                </div>
              </div>
            </div>
            <div className="border-white border-[7px] overflow-hidden rounded-xl">
              <div className="  border-white    rounded-xl overflow-hidden">
                <div className=" w-full h-full rounded-xl "></div>
              </div>
            </div>
          </div>
          <div className=" md:hidden flex flex-col justify-between h-screen py-5 px-4">
            <div className=" space-y-3">
              <p className=" text-white text-3xl font-semibold">
                Understanding the Global <br /> Impact Trends of COVID-19
              </p>
              <p className=" text-white text-[0.85rem]">
                Share your ideas and tell us how you can contribute to this
                cause. Together, we can make an impact.
              </p>
              <button className="rounded-md  px-5 py-[0.35rem] bg-green-700 text-white text-[0.85rem]">
                Contribute
              </button>
            </div>
            <div className=" self-end">
              <div className="  bg-white rounded-lg flex flex-col gap-y-7  justify-between w-[15rem] p-3">
                <div>
                  <p className=" text-[1.2rem] font-semibold">View Dashboard</p>
                  <p className=" text-[0.8rem] text-gray-400">
                    Created by PowerBI
                  </p>
                </div>
                <div className=" self-end">
                  Open{" "}
                  <BsArrowUpRightCircle className=" inline-block ml-1 size-6" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className=" hidden md:block py-4 md:px-[0rem] xl:px-[0rem] md:border-[7px] border-white w-full rounded-lg">
              <div className=" grid md:grid-cols-3 px-4 w-full gap-x-6 rounded-lg">
                <div className="  bg-white rounded-lg flex flex-col gap-y-20  justify-between  p-3">
                  <div>
                    <p className=" text-[1.2rem] font-semibold">
                      View Dashboard
                    </p>
                    <p className=" text-[0.8rem] text-gray-400">
                      Created by PowerBI
                    </p>
                  </div>
                  <div className=" self-end uppercase text-[1.3rem]">
                    Open{" "}
                    <BsArrowUpRightCircle className=" inline-block  size-8" />
                  </div>
                </div>
                <div className=" hidden  bg-white bg-opacity-20 backdrop-blur-md rounded-lg md:flex flex-col  justify-between p-3">
                  <div>
                    <p className=" text-[1.2rem] font-semibold text-white/70">
                      Team Profile
                    </p>
                    <p className=" text-[0.8rem] text-gray-400">
                      BroCode (University of Ghana)
                    </p>
                  </div>
                  <div className=" self-end">
                    <BsArrowUpRightCircle className=" inline-block ml-1 size-8 text-white" />
                  </div>
                </div>
                <div className=" hidden   bg-white rounded-lg  md:flex md:flex-col  p-3">
                  <p className=" text-[1.2rem] font-semibold">
                    Our Collaborators
                  </p>
                  <div className=" flex gap-x-3 items-center justify-between h-full">
                    <div className=" flex flex-col gap-y-2">
                      <Image
                        src="/ii3.png"
                        width={500}
                        height={500}
                        alt="image"
                        className=" w-full h-10"
                      />
                      <Image
                        src="/ii1.png"
                        width={500}
                        height={500}
                        alt="image"
                        className=" w-full h-10"
                      />
                    </div>
                    <Image
                      src="/ii2.png"
                      width={500}
                      height={500}
                      alt="image"
                      className=" h-[7rem] w-[7rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/pic11.png')] md:hidden  w-full  bg-cover bg-center  rounded-md border-b-[8px] border-white  mt-7">
        <div className=" bg-black/40 w-full  text-white py-3 mb-[0.01rem] px-3 overflow-hidden rounded-md">
          <div className=" flex items-start justify-between gap-x-3 ">
            <p className=" font-semibold sm:text-3xl text-2xl">
              How are we contributing <br /> to health and covid19?
            </p>
            <div className=" flex flex-col gap-y-6 items-center">
              <Image
                src="/slide1.png"
                width={500}
                height={500}
                alt="image"
                className=" w-full h-full"
              />
              <Image
                src="/slide0.png"
                width={500}
                height={500}
                alt="image"
                className=" w-full h-full"
              />
            </div>
          </div>
          <div className="md:flex items-end justify-between space-y-2 md:space-y-0 ">
            <div className=" text-gray-300 drop-shadow-2xl shadow-inner">
              <p>Understanding the Global trend</p>
              <p className=" text-[0.7rem] w-[22rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <button className="rounded-md  px-4 py-1 border-2 border-white text-[0.85rem]">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className=" md:hidden  w-full  bg-white rounded-lg  p-3 text-center space-y-4 ">
        <p className=" text-[1.2rem] font-semibold">Our Collaborators</p>
        <div className=" flex flex-col gap-y-5 items-center justify-between mt-7">
          <div className=" flex  gap-x-5">
            <Image
              src="/ii3.png"
              width={500}
              height={500}
              alt="image"
              className=" w-full h-10"
            />
            <Image
              src="/ii1.png"
              width={500}
              height={500}
              alt="image"
              className=" w-full h-10"
            />
          </div>
          <Image
            src="/ii2.png"
            width={500}
            height={500}
            alt="image"
            className=" size-20"
          />
        </div>
      </div>
    </div>
  )
}

export default Content

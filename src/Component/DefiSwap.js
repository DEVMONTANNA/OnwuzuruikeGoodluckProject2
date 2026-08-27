import React from "react";

const DefiSwap = () => {
  return (
    <>
      <div className="flex  justify-center  items-center    blur-xl h-[55vh]   w-[100%]"></div>
      <div className=" w-[100%]   top-[180px] flex justify-center   items-center absolute ">
        <div className="  ggg   w-[40%]  items-center block justify-center p-[50px]">
          <div className="w-[70%]  text-[30px]  text-[black]  text-center    left-1/2 transform translate-x-[25%]  ">
            <p>Swap Anytime Anywhere</p>
          </div>
          <div className=" block border bg-[#ffffff]  p-2 rounded-xl">
            <div className=" rounded-xl  border-[#2222220d]  border border-solid flex justify-between p-3">
              <div className="block">
                <p className="text-[25px] text-[#7d7d7d]">Sell</p>
                <input
                  className="w-[30%] h-[40px]  pl-2 border border-[#22222212]  active:border-blue-500 font-medium"
                  placeholder="0"
                />
                <p className=" text-[#7d7d7d]">$0</p>
              </div>
              <div className="w-[28%] ttt ">
                <button className=" items-center  tttt  justify-evenly flex bg-[#fffff]   text-[17px] mt-7 text-[black] shadow-lg  bg-white  border-[#2222220d]  border border-solid rounded-full">
                  <img  alt="ETH" className="w-[25%] hg" src="eth.png " /> ETH{" "}
                  <i class="fa-solid fa-caret-down"></i>
                </button>
              </div>
            </div>
            <div className=" mt-2 flex rounded-xl  border-[#2222220d] bg-[#f9f9f9] border border-solid justify-between p-3">
              <div className="block">
                <p className="text-[25px]  text-[#7d7d7d]">Buy</p>
                <input
                  className="w-[30%] yyy  pl-2 h-[40px] border border-[#22222212]  active:border-blue-500 font-medium"
                  placeholder="0"
                />
              </div>
              <div className="ttt  w-[30%]">
                <button className="tt p-[5px]  mt-[30px] rounded-full  bg-[#fc72ff] text-[white]">
                  Select token <i class="fa-solid fa-caret-down"></i>
                </button>
              </div>
            </div>
          </div>
          <button className=" p-[8px] mt-[8px] w-[100%] rounded-full text-verdana text-[20px]  bg-[rgb(249,219,250)] text-[#fc72ff]">
            Get started
          </button>
          <button className=" p-[5px] mt-[8px] w-[100%] text-verdana text-[15.4px]  text-[rgba(29,28,28,0.82)]">
            The largest onchain marketplace. Buy and sell crypto on Etherum and
            11+ other chains.
          </button>
        </div>
      </div>
      <div className="p-[25px]  ll   mt-[190px]  ">
        <div>
          <h1 className="text-[46px] p-[20px] kk">Go Direct to Defi</h1>
        </div>

        <div className="defid  flex flex-wrap gap-4 ">
          <div className="bg-[#d5e5fc] pt-[25px] mb-4 w-[48%] p-[25px] rounded-3xl block c">
            <button className="bg-[#fff] font-[verdana]  font-bold rounded-3xl p-[10px] text-[#2abdff] flex gap-2 items-center">
              <i class="fas fa-laptop"></i>Web App
            </button>
            <div>
              <h1 className="text-[33px] p pt-3 text-[#2abdff]">
                Swapping made simple. Access thousands of tokens on 11+ chains.
              </h1>
            </div>
            <img alt="I0S1" className="pt-[50px]" src="../IOS1.png " />
          </div>

          <div className="bg-[hsl(299,100%,90%)] w-[48%]  mb-4 rounded-3xl p-[25px] c">
            <button className="bg-[#fff] font-[verdana]  font-bold rounded-3xl p-[10px] text-[#fc72ff] flex gap-2 items-center">
              <i class="fas fa-wallet"></i>
              Uniswap Wallet
            </button>
            <h1 className="text-[36px] pt-3 p text-[#fc72ff]">
              The Wallet built for swapping. Available on IOS and Andriod.
            </h1>
            <img alt="Uniswap Wallet" className="pt-[38px]" src="../IOS1.png" />
          </div>
          <div className="bg-[#00c3a00f] w-[48%] u  h-[300px]  mb-4 m p-[25px] pr-4 rounded-3xl c">
            <button className="bg-[#fff] font-[verdana] text-[#00c3a0]  font-bold rounded-3xl p-[10px] #00c3a0 flex gap-2 items-center">
              <i class="fas fa-less-than"></i>/{" "}
              <i class="fas fa-greater-than"></i>
              Developer Docs
            </button>
            <div className="flex ">
              <div className=" m mt-[30px] ">
                <h1 className="text-[30px] pt-3 p text-[#00c3a0]">
                  Build the next generation of open applications and tools.
                </h1>
              </div>

              <div className="   ">
                <img  alt="Developer Docs" className="w-[100%] nn" src="../open.png" />
              </div>
            </div>
          </div>
          <div className="bg-[#883fff0f] w-[48%] m u p-[25px] h-[300px] rounded-3xl c">
            <button className="bg-[#fff] font-[verdana] text-[#9e62ff]  font-bold rounded-3xl p-[10px] #00c3a0 flex gap-2 items-center">
              <i class="fas fa-chart-line"></i>
              Developer Docs
            </button>
            <div className="flex mt-[30px]">
              <h1 className="text-[28px] pt-3 p text-[#9e62ff]">
                Provide liquidity to pools on the Uniswap Protocol and earn fees
                on swaps.
              </h1>

              <div>
                <img alt="Developer Docs" className="w-[100%] nn " src="../up.png " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  q">
        <div className="w-[50%] q1 p-[30px]   ">
          <div className="mb-[200px] o ">
            <h1 className="text-[50px] o11 font-medium">Trusted by millions</h1>
          </div>
          <div className=" w-[80%] o1 mb-[30px]">
            <p className="text-[17px] text-[#222222] font-medium">
              Uniswap products are powered by the Uniswap Protocol. The protocol
              is the largest onchain marketplace, with billions of dollars in
              weekly volume across thousands of tokens on Ethereum and 7+
              additional chains.
            </p>
          </div>
          <div className="items-center">
            <button className="bg-[#f9f9f9] pt-[12px] pl-[16px] pr-[16px] pb-[12px] rounded-3xl">
              <a href="https://app.uniswap.org/explore">
                Learn more<i className="fas fa-arrow-right ml-[10px] "></i>
              </a>
            </button>
          </div>
        </div>
        <div className="flex-wrap q1 flex w-[50%] gap-12 gap-y-4 p-[30px]  justify-center items-center  ">
          <div className="p-[33px] w-[38%] rounded-3xl space-y-16  r bg-[#f9f9f9] pl-7 ">
            <h2 className="text-[19px] u1 text-[#7d7d7d] font-medium">
              All time Volume
            </h2>
            <h1 className="text-[45px] uu font-medium">$2.2T</h1>
          </div>
          <div className="p-[33px] w-[38%] rounded-3xl space-y-16 r bg-[#f9f9f9] pl-7">
            <h2 className="text-[19px] text-[#7d7d7d]  u1 font-medium">
              All time swappers
            </h2>
            <h1 className="text-[45px] uu font-medium">16.6M</h1>
          </div>
          <div className="p-[33px]  w-[38%]  rounded-3xl space-y-16 r bg-[#f9f9f9] pl-7 ">
            <h2 className="text-[19px] text-[#7d7d7d]  u1 font-medium">
              All time LP fees
            </h2>
            <h1 className="text-[45px] uu font-medium">$3.4B</h1>
          </div>
          <div className="p-[33px] w-[38%] rounded-3xl space-y-16 r bg-[#f9f9f9] pl-7 ">
            <h2 className="text-[20px] text-[green]  u1 font-medium">
              24H volume
            </h2>
            <h1 className="text-[45px] text-[green]  uu font-medium">$1.3B</h1>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div>
          <h1 className="text-[45px] cc font-medium">Connect with us</h1>
        </div>
        <div className="flex i gap-x-4">
          <div className="w-[25%] f bg-[#ff4d000a]  rounded-3xl text-[#ff4d00] font-medium p-5 ">
            <button className="pl-[13px] pr-[13px] p-[5px]  mb-[90px] gap-x-3 rounded-3xl bg-[#ffffff]  flex items-center ">
              <i className="fas fa-question  rounded-full p-[5px]"></i>
              Help Center
            </button>
            <div>
              <h2 className="text-[#ff4d00] font-medium text-[20px]">
                Get Support
              </h2>
            </div>
          </div>
          <div className="w-[25%]  f bg-[#6254320a] font-medium rounded-3xl text-[#8e8767] p-5">
            <button className="pl-[13px] pr-[13px] p-[5px] bg-[#ffffff]  mb-[70px] gap-x-3 rounded-3xl  flex items-center  ">
              <i className="fas fa-book-open"></i>Blog
            </button>
            <div className="">
              <h2 className="text-[#8e8767] font-medium text-[20px]">
                Insights and news from the team
              </h2>
            </div>
          </div>
          <div className=" w-[45%] f bg-[#fef4ff] font-medium rounded-3xl text-[#fc72ff] p-5">
            <button className="pl-[13px] pr-[13px] p-[5px] mb-[90px] bg-[#ffffff] gap-x-3 rounded-3xl  flex items-center  ">
              <i className="text-[#fc72ff] fas fa-comments"></i> Stay Connected
            </button>
            <div>
              <h2 className="text-[#fc72ff] font-medium text-[20px]">
                Follow @Uniswap on X for the latest updates
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className=" pp flex ">
        <div className="w-[50%] w  p-[40px] pr-0  ">
          <div className="gap-x-8 mb-[100px] flex">
            <a href="https://github.com/DEVMONTANNA/Uniswap.git">
              <button className="">
                <i class="fab fa-github large-icon text-[30px]"></i>
              </button>
            </a>
            <a href="https://x.com/Montanna_016/photo">
              
              
              <button>
                <i className="fab fa-twitter text-[30px]"></i>
              </button>
            </a>
            <button>
              <i class="fab fa-discord text-[30px]"></i>
            </button>
          </div>
          <hr className="mb-[20px]" />
          <div>
            <h3>© 2025 - DEVMONTANA</h3>
          </div>
        </div>
        <div className="w-[50%]   ww p-[20px] ">
          <div className="  items-center www ">
            <ul className="flex   t">
              <li className="w-1/2 p-2 font-bold">
                App
                <ol className="font-normal mt-[8px] font-verdana text-[#7d7d7d]">
                  <li>Trade</li>
                  <li>Explore</li>
                  <li>Pool</li>
                </ol>
              </li>
              <li className="w-1/2 p-2 font-bold">
                Company
                <ol className="font-normal mt-[8px] font-verdana text-[#7d7d7d]">
                  <li>Careers</li>
                  <li>Blog</li>
                  <li>Brand assets</li>
                </ol>
              </li>
              <li className="w-1/2 p-2 font-bold">
                Protocol
                <ol className="font-normal mt-[8px] font-verdana text-[#7d7d7d]">
                  <li>Vote</li>
                  <li>Governance</li>
                  <li>Developers</li>
                </ol>
              </li>
              <li className="w-1/2 p-2 font-bold">
                Need help?
                <ol className="font-normal mt-[8px] font-verdana text-[#7d7d7d]">
                  <li>Help center</li>
                  <li>Contact us</li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefiSwap;

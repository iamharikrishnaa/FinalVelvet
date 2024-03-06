import checked from "../../assets/checked.png";

const Pricing = () => {
  return (
    <div className="section font-space-grotesk" id="Pricing">
      <div className="grid md:grid-cols-2">
        <div>
          <div className="text-gold font-bold text-[18px] leading-[30.6px] font-space-grotesk">
            OUR PRICING
          </div>
          <div className="font-bold font-space-grotesk text-[32px]">
            Choose a plan for your Skin Care
          </div>
          <div className="font-f37-grotesque text-[17px] ">
            Elevate your grooming routine with our salon subscription: <br/>exclusive
            perks, discounted services, and consistent quality. Join now for a
            seamless experience!
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-14 md:flex-row md:justify-between group">
        {/* Normal Card */}
        <div className="border border-grey hover:border-gold  m-4 p-3 justify-center  md:w-[320px] h-[580px] flex flex-col">
          <h2 className="font-bold top-[40px] left-[30px] text-[24px]">Normal</h2>
          <h2 className="font-bold">
            <span className="text-grey leading-[47.6px]">INR. </span>2500
          </h2>
          <div className="font-f37-grotesque">
            <div className="text-xs mt-4 mb-4 leading-[24.32px]">
              Upgrade your skin care with domain purchase and tailored hosting
              solutions.
            </div>
            <hr className="border-t-[0.5px] mt-10 mb-10 w-[260px] h-0 border-grey" />

            <div className="md:grid grid-rows-4 leading-[27.2px] gap-10">
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <button className="px-2 py-1 font-bold text-white bg-gold rounded-[2px] text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Standard Card */}
        <div className="border border-gold group-hover:border-grey  m-4 p-3 justify-center  md:w-[320px] sm:w-[180px] h-[580px] flex flex-col">
          <h2 className="font-bold top-[40px] left-[30px] text-[24px]">Standard</h2>
          <h2 className="font-bold">
            <span className="text-grey leading-[47.6px]">INR. </span>3500
          </h2>
          <div className="font-f37-grotesque">
            <div className="text-xs mt-4 mb-4 leading-[24.32px]">
              Upgrade your skin care with domain purchase and tailored hosting
              solutions.
            </div>
            <hr className="border-t-[0.5px] mt-10 mb-10 w-[260px] h-0 border-grey" />

            <div className="md:grid grid-rows-4 leading-[27.2px] gap-10">
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <button className="px-2 py-1 font-bold text-white bg-gold rounded-[2px] text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Premium Card */}
         <div className="border border-grey hover:border-gold  m-4 p-3 justify-center  md:w-[320px] h-[580px] flex flex-col">
          <h2 className="font-bold top-[40px] left-[30px] text-[24px]">Premium</h2>
          <h2 className="font-bold">
            <span className="text-grey leading-[47.6px]">INR. </span>4500
          </h2>
          <div className="font-f37-grotesque">
            <div className="text-xs mt-4 mb-4 leading-[24.32px]">
              Upgrade your skin care with domain purchase and tailored hosting
              solutions.
            </div>
            <hr className="border-t-[0.5px] mt-10 mb-10 w-[260px] h-0 border-grey" />

            <div className="md:grid grid-rows-4 leading-[27.2px] gap-10">
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
              <div className="flex flex-cols text-justify justify-center space-x-2">
                <img
                  className="h-[16px] w-[16px]"
                  src={checked}
                  alt="checked"
                />
                <p className="text-justify -m-1">Full desktop or Browser</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <button className="px-2 py-1 font-bold text-white bg-gold rounded-[2px] text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;



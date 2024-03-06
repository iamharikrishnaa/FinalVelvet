const Contact = () => {
  return (
    <div className="section " id="contact">
      <div className="bg-Velvet rounded-[35px] gap-[10px] font-space-grotesk p-16 ">
        <div className="text-center bg-Velvet rounded-md w-full mx-auto">
          <div className="sm:text-[32px] font-space-grotesk text-white font-bold">
            Wanna Join The Velvet Room
          </div>
          <p className="text-[16px] mb-8 leading-10 text-white">
            Contact us to join the Velvet Room experience today
          </p>
             <button
            type="button"
            className="text-white bg-gold gap-2 font-space-grotesk rounded-lg text-sm px-3 py-3 text-center inline-flex items-center"
          >
            Contact With Us
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;




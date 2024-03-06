import image from "../../assets/image.png";

const Training = () => {
  return (
    <div className="section flex flex-col md:flex-row space-x-4 justify-between" id="Training">
  <div className="flex flex-col justify-center gap-4 md:w-[50%]">
    <div className="font-bold font-space-grotesk text-3xl md:text-4xl">
      Mind, body, soul: <br />
      prioritize self-care.
    </div>
    <p className="text-lg font-f37 md:text-xl sm:w-auto md:w-auto">
      Salon and Cosmetology offers services to help you look and feel your
      best. Come in, relax, and let our professionals help you find a color
      and cut that are just right for you. The hair, makeup, skin care,
      nails and so much more is available at our place. And don’t forget
      the spa.
    </p>
    <div className="mt-4 mb-4">
      <button type="button" className="text-white bg-gold font-space-grotesk rounded-lg text-lg px-4 py-2.5 inline-flex items-center">
        Book Appointment Now
        <svg className="w-4 h-4 ml-2 transform rotate-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a1 1 0 01-1-1V3.414l-3.293 3.293a1 1 0 11-1.414-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L11 3.414V17a1 1 0 01-1 1z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
  <div class="container md:w-[30rem] sm:w-auto m-auto ">
  <div class="flex flex-row sm:m-auto sm:justify-center items-center space-x-2">
<div class="md:flex w-auto flex-col space-y-2">
      <img className="h-48 w-auto rounded-lg " src={image} />
      <img class="h-32 w-auto rounded-lg " src={image} />
      <img class="h-52 w-auto rounded-lg " src={image} />
  </div>
    {/* <!-- Sec Col --> */}
    <div class="flex w-auto flex-col space-y-2 ">
      <img className="h-32 w-auto rounded-lg" src={image} />
      <img className="h-52 w-auto rounded-lg " src={image} />
      <img className="h-48 w-auto rounded-lg" src={image} />
    </div>
</div>
</div>
</div>
  );
};

export default Training;




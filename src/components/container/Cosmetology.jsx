import TVR from "../../assets/TVR.png";


const Cosmetology = () => {
  return (
    <div className="bg-Velvet md:w-full justify-around">
      <div className="section h-[575px] md:w-full " id="Cosmetology">
      <div>
  <div className="font-bold mb-4 text-3xl md:text-5xl text-white font-space-grotesk">
    Saloon and Cosmetology
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* First Column */}
    <div className="md:col-span-1">
      <p className="text-sm md:text-lg text-white  md:mt-0">
        The Velvet Room is your ultimate destination for comprehensive
        pampering. Our salon offers a range of hair services including haircuts,
        coloring, styling, extensions, spa treatments, and more. We also provide
        skin treatments like facials, waxing, threading, and nail services such
        as gel polish, extensions, and intricate nail art. Bridal and groom makeup
        services are also available.
      </p>
    </div>
    {/* Second Column */}
    <div className="md:col-span-1 flex justify-evenly">
      <img src={TVR} alt="TVR Logo" className="w-auto md:w-auto max-w-xs md:max-w-[560px]" />
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Cosmetology;


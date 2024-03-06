import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, category, title, participants, rating, price }) => {
  return (
    <div className="p-2 shadow-lg bg-white rounded-lg">
      <div className="relative">
        <img className="w-full h-auto rounded-lg" src={image} alt="courseImage" />
        <div className="absolute top-2 right-2 bg-gold text-xs text-white px-2 py-1 rounded-lg">
          {participants} Students
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <div className="text-xs font-bold text-Velvet">{category}</div>
        <div className="flex items-center space-x-1 bg-Velvet rounded-lg p-1">
          <AiOutlineStar className="text-gold" />
          <div className="text-xs font-bold text-white">{rating}</div>
        </div>
      </div>
      <div className="text-sm mt-1">{title}</div>
      <div className="flex justify-between items-center mt-1">
        <div className="text-sm text-gold font-bold">Rs.{price}</div>
        <button className="bg-gold rounded-lg px-3 py-1 text-white text-xs">Enroll Now</button>
      </div>
    </div>

  );
};

export default Course;

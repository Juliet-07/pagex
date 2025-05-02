import Profile from "/src/assets/profile.svg";
import Message from "/src/assets/message.svg";
import Date from "/src/assets/date.svg";
import Time from "/src/assets/time.svg";

export default function ArticleMeta({
  author = "Dare Salami",
  comments = 0,
  date = "January 17, 2025",
  readTime = "10 minutes",
}) {
  return (
    <div className="flex flex-wrap items-center space-x-4 text-[#15141199] text-[8px] lg:text-[10px]">
      <div className="flex items-center space-x-1">
        <img src={Profile} alt="Author" className="w-3 h-3 lg:w-5 lg:h-5 text-green-600" />
        <span>by {author}</span>
      </div>

      <div className="flex items-center space-x-1">
        <img src={Message} alt="Comments" className="w-3 h-3 lg:w-5 lg:h-5 text-green-600" />
        <span>{comments} Comments</span>
      </div>

      <div className="flex items-center space-x-1">
        <img src={Date} alt="Date" className="w-3 h-3 lg:w-5 lg:h-5 text-green-600" />
        <span>{date}</span>
      </div>

      <div className="flex items-center space-x-1">
        <img src={Time} alt="Read Time" className="w-3 h-3 lg:w-5 lg:h-5 text-green-600" />
        <span>{readTime}</span>
      </div>
    </div>
  );
}

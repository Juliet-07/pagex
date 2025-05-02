import { Link } from "react-router-dom";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoChevronForwardSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="hidden w-full h-full md:flex flex-col items-center justify-center p-4 md:px-10 bg-white">
        {/* <div className="border-b border-black-100 w-full"></div> */}
        {/* 1 */}
        <div className="w-full flex items-stretch justify-between gap-4 my-10">
          {/* a */}
          <div className="flex flex-col font-nunito text-black-100 gap-10">
            <div>
              <p className="text-2xl font-semibold">Pazelgreen</p>
              <p className="mt-2">Agriculture made easy</p>
            </div>
            <div>
              <p className="text-black-100 uppercase font-nunito font-bold">
                Social Media
              </p>
              <div className="flex gap-4 my-2">
                <a
                  href="https://www.facebook.com/people/Pazelgreen-Technologies/100084037600087/"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-[#17913B]/5 rounded-full flex items-center justify-center">
                    <FaFacebook size={20} color="#379E23" />
                  </div>
                </a>
                <a
                  href="https://x.com/pazelgreentech?t=VnhErvM5kfIXeYfxX6_7HQ&s=08"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-[#17913B]/5 rounded-full flex items-center justify-center">
                    <FaXTwitter size={20} color="#379E23" />
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/pazelgreen-technologies-ltd-6b8b6124a"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-[#17913B]/5 rounded-full flex items-center justify-center">
                    <FaLinkedin size={20} color="#379E23" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/pazelgreentech/"
                  target="_blank"
                >
                  <div className="w-10 h-10 bg-[#17913B]/5 rounded-full flex items-center justify-center">
                    <FaInstagram size={20} color="#379E23" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* b */}
          <div className="grid gap-4 text-[#151411]/60 font-nunito">
            <div className="font-semibold text-xl uppercase text-black-100">
              Pages
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/blogs">Blog</Link>
          </div>
          {/* c */}
          <div className=" text-[#1E1E1E]/80 font-nunito">
            <div className="font-semibold text-xl uppercase text-black-100">
              products
            </div>
            <div>PAGEX</div>
            <div></div>
            <div></div>
          </div>
          {/* d */}
          <div className=" text-[#1E1E1E]/80 font-nunito">
            <div className="font-semibold text-xl uppercase text-black-100">
              partners
            </div>
            <div></div>
            <div></div>
          </div>
          {/* e */}
          <div className=" text-[#1E1E1E]/80 font-nunito">
            <div className="font-semibold text-xl uppercase text-black-100">
              subscribe to our newsletter
            </div>
            <p>Only valuable resource</p>
            <form className="my-4 flex items-center gap-4">
              <input
                type="text"
                placeholder="Enter your e-mail"
                className="w-[263px] h-[56px] p-4 rounded-4xl bg-[#BCBBC1]/20 focus:none"
              />
              <div className="w-[56px] h-[56px] bg-primary-100 rounded-full flex items-center justify-center">
                <IoChevronForwardSharp size={30} color="white" />
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <div className="border-b border-black-100 w-full"></div>
          <p className="text-black-100 text-xs font-nunito">
            All rights reserved by <b>Pazelgreen</b>
          </p>
        </div>
      </div>
      {/* mobile view */}
      <div className="md:hidden w-full h-full flex flex-col p-4 bg-white">
        {/* 1 */}
        <div className="flex flex-col font-nunito text-black-100 gap-10">
          <div>
            <p className="text-2xl font-semibold">Pazelgreen</p>
            <p className="mt-2">Agriculture made easy</p>
          </div>
          <div>
            <p className="text-black-100 uppercase font-nunito font-bold">
              Social Media
            </p>
            <div className="flex gap-4 my-2">
              <a
                href="https://www.facebook.com/people/Pazelgreen-Technologies/100084037600087/"
                target="_blank"
              >
                <div className="w-10 h-10 bg-[#17913B]/5 rounded-full flex items-center justify-center">
                  <FaFacebook size={20} color="#379E23" />
                </div>
              </a>
              <a
                href="https://x.com/pazelgreentech?t=VnhErvM5kfIXeYfxX6_7HQ&s=08"
                target="_blank"
              >
                <div className="w-10 h-10 bg-[#17913B]/5 rounded-full flex items-center justify-center">
                  <FaXTwitter size={20} color="#379E23" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/pazelgreen-technologies-ltd-6b8b6124a"
                target="_blank"
              >
                <div className="w-10 h-10 bg-[#17913B]/5 rounded-full flex items-center justify-center">
                  <FaLinkedin size={20} color="#379E23" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/pazelgreentech/"
                target="_blank"
              >
                <div className="w-10 h-10 bg-[#17913B]/5 rounded-full flex items-center justify-center">
                  <FaInstagram size={20} color="#379E23" />
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="my-5 flex justify-between gap-4">
          {/* a */}
          <div className="grid gap-4 text-[#151411]/60 font-nunito">
            <div className="font-semibold text-xl uppercase text-black-100">
              Pages
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/marketplace">Marketplace</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/blogs">Blog</Link>
          </div>
          {/* b */}
          <div className=" text-[#1E1E1E]/80 font-nunito">
            <div className="font-semibold text-xl uppercase text-black-100">
              products
            </div>
            <div>PAGEX</div>
            <div></div>
            <div></div>
          </div>
        </div>
        {/* 3 */}
        <div className=" text-[#1E1E1E]/80 font-nunito">
          <div className="font-semibold text-xl uppercase text-black-100">
            subscribe to our newsletter
          </div>
          <p>Only valuable resource</p>
          <form className="my-4 flex items-center gap-5">
            <input
              type="text"
              placeholder="Enter your e-mail"
              className="w-[90%] h-[56px] p-4 rounded-4xl bg-[#BCBBC1]/20 focus:none"
            />
            <div className="w-[60px] h-[56px] bg-primary-100 rounded-full flex items-center justify-center">
              <IoChevronForwardSharp size={30} color="white" />
            </div>
          </form>
        </div>
        {/* 4 */}
        <div className="w-full flex flex-col items-center gap-2 mt-10">
          <div className="border-b border-black-100 w-full"></div>
          <p className="text-black-100 text-xs font-nunito">
            All rights reserved by <b>Pazelgreen</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

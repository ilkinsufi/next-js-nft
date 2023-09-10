"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-red-100 duration-200 mt-[60px] dark:bg-[#5d0909] max-w-screen-2xl w-[1134px] m-auto flex justify-between items-center h-9">
      <div className="flex justify-center items-center gap-[82px]">
        <div className="flex gap-[4px] justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="34"
            viewBox="0 0 29 34"
            fill="none"
          >
            <path
              d="M14.4203 0.19165L28.7118 8.44283V24.9452L14.4203 33.1964L0.128865 24.9452V8.44283L14.4203 0.19165Z"
              className="fill-black dark:fill-white duration-500"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 30 29"
            fill="none"
          >
            <path
              d="M2.61387 21.8399C0.0609474 17.4181 0.0609473 11.9702 2.61387 7.54844C5.16679 3.12665 9.88479 0.402709 14.9906 0.402709C20.0965 0.402709 24.8145 3.12665 27.3674 7.54844C29.9203 11.9702 29.9203 17.4181 27.3674 21.8399C24.8145 26.2617 20.0965 28.9856 14.9906 28.9856C9.8848 28.9856 5.16679 26.2617 2.61387 21.8399Z"
              className="fill-black dark:fill-white duration-500"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 26 29"
            fill="none"
          >
            <path
              d="M0.953124 14.6942L25.7067 0.402709L25.7067 28.9856L0.953124 14.6942Z"
              fill="#FF7795"
            />
          </svg>
        </div>
        <div className="flex dark:duration-700 items-center dark:bg-[black] duration-700 bg-[#F3F3F3] w-[284px] h-[52px] rounded-[20px] justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="30"
            viewBox="0 0 25 25"
            fill="none"
            className="ml-[19px]"
          >
            <path
              d="M18.1189 16.9625L22.4019 21.2445L20.9869 22.6595L16.7049 18.3765C15.1116 19.6537 13.1299 20.3484 11.0879 20.3455C6.11989 20.3455 2.08789 16.3135 2.08789 11.3455C2.08789 6.37746 6.11989 2.34546 11.0879 2.34546C16.0559 2.34546 20.0879 6.37746 20.0879 11.3455C20.0908 13.3875 19.3961 15.3692 18.1189 16.9625ZM16.1129 16.2205C17.382 14.9153 18.0908 13.1659 18.0879 11.3455C18.0879 7.47746 14.9549 4.34546 11.0879 4.34546C7.21989 4.34546 4.08789 7.47746 4.08789 11.3455C4.08789 15.2125 7.21989 18.3455 11.0879 18.3455C12.9083 18.3483 14.6578 17.6396 15.9629 16.3705L16.1129 16.2205Z"
              fill="#B7B7B7"
            />
          </svg>
          <input
            type="text"
            placeholder="Axtarış"
            className="dark:placeholder:text-[#F4F4F4] dark:duration-700 w-full text-[18px] text-[#FF7795] h-full placeholder:flex placeholder:text-[#B7B7B7] bg-transparent pl-[16px] mr-[20px] outline-none placeholder:text-[18px]"
          />
        </div>
      </div>
      <nav>
        <ul className="flex text-[18px] font-normal">
          <li>
            <Link
              href="/"
              className={
                pathname == "/" ? "text-[#000] duration-700" : "text-white"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link href="/explore" className="ml-[50px]">
              Explore
            </Link>
          </li>
          <li className="ml-[50px] mr-[81px]">
            <Link href="/trending">Trending🔥</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

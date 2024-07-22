import Link from "next/link";
import { FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <Link
        href={"#"}
        className="hover:transform hover:-translate-y-1 transition-colors"
      >
        <FaFacebook className="h-6 w-6" />
      </Link>
      <Link
        href={"#"}
        className="hover:transform hover:-translate-y-1 transition-colors"
      >
        <FaX className="h-6 w-6" />
      </Link>
      <Link
        href={"#"}
        className="hover:transform hover:-translate-y-1 transition-colors"
      >
        <FaInstagram className="h-6 w-6" />
      </Link>
      <Link
        href={"#"}
        className="hover:transform hover:-translate-y-1 transition-colors"
      >
        <FaMailBulk className="h-6 w-6" />
      </Link>
    </div>
  );
};

export default Socials;

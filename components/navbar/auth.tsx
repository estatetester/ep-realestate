import Link from "next/link";
import Socials from "../socials";

interface AuthProps {}

export default function Auth({}: AuthProps) {
  return (
    <div className="w-full hidden lg:flex items-center justify-end gap-x-6">
      <Socials />

      <Link
        href="/contact"
        className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Contact
      </Link>
    </div>
  );
}

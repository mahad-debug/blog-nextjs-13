import Link from "next/link";
import Themebutton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <a href="/">
            <span className="text-2xl font-medium">
              Jan <span className="text-real-500">Blog</span>
            </span>
          </a>
          <Themebutton />
        </div>
      </div>
    </div>
  );
}

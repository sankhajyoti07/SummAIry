import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuBrainCircuit } from "react-icons/lu";

export default function Navbar() {
  return (
    <nav className="w-full bg-transparent text-gray-900 py-4 px-6 flex justify-between items-center ">
      <Link className="cursor-pointer" to="/">
        <div className="flex items-center">
          <LuBrainCircuit className="text-3xl" />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-600">
          SummAIry
          </h1>
        </div>
      </Link>

      <Button
        variant="outline"
        className="flex items-center gap-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer"
        onClick={() => window.open("https://github.com/sankhajyoti07/SummAIry", "_blank")}
      >
        <FaGithub className="h-5 w-5" />
        Github
      </Button>
    </nav>
  );
}

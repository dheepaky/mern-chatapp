import useState from "react";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className="bg-blue-500 p-1  top-0 sticky">
        {toggleMenu && (
          <div
            className="space-y-1 w-2 ml-5 py-5 cursor-pointer"
            onClick={() => setToggleMenu(false)}>
            <div className="border-2 border-black w-8"></div>
            <div className="border-2 border-black w-8"></div>
            <div className="border-2 border-black w-8"></div>
          </div>
        )}

        <div className="  w-2 ml-6  cursor-pointer">
          <div className="border-l-2 ml-2 -mt-11 border-black h-8   w-3 rotate-[43deg]"></div>
          <div className="border-r-2  -mt-8 border-black h-8 w-3 -rotate-[43deg]"></div>
        </div>
      </div>
    </>
  );
}

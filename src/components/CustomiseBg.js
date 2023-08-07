import React, { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import img3 from "../assetes/d.jpg";

const CustomiseBg = () => {
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState("");

  const menuRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current?.contains(event.target))
        // setOpen(!open);
      console.log(menuRef.current);
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setBackground(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  useEffect(() => {
    if (!background) {
      setBackground(img3);
    }
  }, [background]);

  const setImage = () => {
    document.getElementById("file").click();
    // alert("hello");
  };
  // set default bckground
  const onSetBackground = () => {
    setBackground(img3);
  };

  return (
    <div>
      <div className="img">
        <img src={background} alt="" />
      </div>
      {/* file input */}
      <input type="file" id="file" hidden onChange={handleImageChange} />

      <div
      ref={btnRef}
      >
        <BsThreeDots
          className="absolute flex flex-col gap-2 dark:text-white  justify-center  bottom-0 right-0 mx-4 my-4  cursor-pointer dark:bg-gray-800/[.4] bg-slate-50/[.4] hover:bg-slate-500 hover:text-black p-2 rounded-md text-4xl"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* Menu */}
      {open && (
        <div
          // ref={menuRef}
          className="absolute flex flex-col gap-2  dark:text-white justify-center  bottom-12 right-0 mx-4 my-4  cursor-pointer dark:bg-gray-800 bg-slate-50   p-2 rounded-md ring-offset-8"
        >
          <ul>
            <li
              className="px-6 py-2 cursor-pointer   hover:text-gray hover:bg-slate-400/20 hover:rounded-md focus:ring-blue-300 "
              onClick={onSetBackground}
            >
              {" "}
              Default Background{" "}
            </li>
            <li
              className="px-6 py-2 cursor-pointer   hover:text-gray hover:rounded-md hover:bg-slate-400/20 focus:ring-blue-300 "
              onClick={setImage}
            >
              {" "}
              Customise Background{" "}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomiseBg;

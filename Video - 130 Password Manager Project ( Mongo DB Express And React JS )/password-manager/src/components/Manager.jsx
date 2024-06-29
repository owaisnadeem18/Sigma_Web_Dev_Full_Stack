import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import eye from "../../public/Icons/eye.png";
import eyeCross from "../../public/Icons/eyecross.png";

import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [Form, SetForm] = useState({ site: "", userName: "", pass: "" });

  const [passowrdArr, SetpasswordArr] = useState([]);

  // Use Of Use Effect , in order to check either the password is available in local storage or not

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      SetpasswordArr(JSON.parse(passwords));
    }
  }, []);

  // A function which has been created to change eye icon on password
  const ref = useRef();

  const passRef = useRef();

  const showPass = () => {
    if (ref.current.src.includes(eye)) {
      ref.current.src = eyeCross;

      passRef.current.type = "text";
    } else {
      ref.current.src = eye;
      passRef.current.type = "password";
    }
  };

  // Function for saving passowrd to the local storage system
  const SavePassToLocalStorg = () => {
    if (
      Form.site.length > 3 &&
      Form.userName.length > 3 &&
      Form.pass.length > 3
    ) {
      SetpasswordArr([...passowrdArr, { ...Form, id: uuidv4() }]);
      localStorage.setItem(
        "passwords",
        JSON.stringify([...passowrdArr, { ...Form, id: uuidv4() }])
      );
      SetForm({ site: "", pass: "", userName: "" });

      toast("Password has been Saved ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast("Error : Password has not saved ", {
        theme: "dark",
        autoClose: 3000,
      });
    }
  };

  const editPassword = (id) => {
    console.log("Editing With id - ", id);
    SetForm(passowrdArr.filter((i) => i.id == id)[0]);
    SetpasswordArr(passowrdArr.filter((e) => e.id != id));
  };

  const DeletePassword = (id) => {
    Swal.fire({
      title: "Do you want to delete the password?",

      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
    }).then((result) => {
      if (result.isConfirmed) {
        let updatedPassword = passowrdArr.filter((e) => e.id !== id);
        SetpasswordArr(updatedPassword);
        localStorage.setItem("passwords", JSON.stringify(updatedPassword));

        toast.success("Successfully Deleted", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (result.isDenied) {
        toast.info("Deletion Cancelled", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    });
  };
  // A function which has been created to handle the change in forms

  const HandleChange = (e) => {
    // console.log(e.target.value);
    SetForm({ ...Form, [e.target.name]: e.target.value });
  };

  // Lord Icons Copy Function:

  const CopyFunc = (text) => {
    toast("Text Copied To Clipboard", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      {/* Same as */}
      <ToastContainer />

      <div className="absolute top-0 -z-10 h-full bg-green-50  w-full ">
        <div className="relative h-full w-full bg-slate-50">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
      </div>

      <div className=" md:mycontainer px-5 ">
        <h1 className=" text-3xl pt-6 md:pt-0 md:text-4xl font-bold text-center ">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">Quest/&gt;</span>
        </h1>
        <h1 className="my-2 text-xl  md:text-2xl font-bold text-center ">
          {" "}
          Welcome to PassQuest
        </h1>
        <h1 className="my-2  text-lg font-bold text-center text-green-700 ">
          Securely Manage Your Passwords Here
        </h1>

        <div className=" flex flex-col  gap-1  items-center">
          <input
            type="text"
            className="text-black px-4 py-1 my-4 border border-green-500 rounded-full w-full outline-none"
            placeholder="Enter Website URL"
            value={Form.site}
            onChange={HandleChange}
            name="site"
          />

          <div className="flex flex-col gap-0 md:flex-row w-full md:gap-8 justify-between">
            <input
              type="text"
              className="text-black px-4 py-1 my-4 border border-green-500 rounded-full w-full gap-5  outline-none"
              placeholder="Enter User Name"
              value={Form.userName}
              onChange={HandleChange}
              name="userName"
            />
            <div className="relative">
              <input
                ref={passRef}
                type="password"
                className="text-black px-4 py-1 my-4 border border-green-500 rounded-full w-full  outline-none"
                placeholder="Enter Password"
                value={Form.pass}
                onChange={HandleChange}
                name="pass"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={showPass}
              >
                <img className="py-4" ref={ref} src={eye} width={17} alt="" />
              </span>
            </div>
          </div>
          <button
            onClick={SavePassToLocalStorg}
            className=" flex items-center w-fit justify-center md:py-1 rounded-full text-black bg-green-400 md:px-6 hover:bg-green-500 hover:duration-300 duration-300 border-2 hover:border-green-600 border-green-500 px-4 py-0"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            <span className=" text-lg px-1 md:text-xl font-bold mx-2 ">
              Save
            </span>
          </button>
        </div>

        <div className="passwords">
          <h2 className="my-2 font-semibold text-2xl py-2 ">Your Passwords</h2>
          {passowrdArr.length === 0 && (
            <div className="md:text-3xl text-2xl font-bold">
              No Passwords To Show
            </div>
          )}

          {passowrdArr.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden mb-8">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2 text-[14px]">Site</th>
                  <th className="py-2 text-[14px]">User Name</th>
                  <th className="py-2 text-[14px]">Password</th>
                  <th className="py-2 text-[14px]">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passowrdArr.map((data, e) => {
                  return (
                    <tr key={e}>
                      <td className=" text-center py-2 border border-white">
                        <div className="flex items-center justify-center  ">
                          <a href={data.site} target="_blank">
                            {data.site}
                          </a>
                          <div
                            className="Lord-Icon-Copy cursor-pointer mx-1 "
                            onClick={() => {
                              CopyFunc(data.site);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2 border border-white">
                        <div className="flex items-center justify-center">
                          {data.userName}
                          <div
                            className="Lord-Icon-Copy cursor-pointer mx-1 "
                            onClick={() => {
                              CopyFunc(data.userName);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2 border border-white">
                        <div className="flex items-center justify-center">
                          {data.pass}
                          <div
                            className="Lord-Icon-Copy cursor-pointer mx-1 "
                            onClick={() => {
                              CopyFunc(data.pass);
                            }}
                          >
                            <lord-icon
                              style={{
                                width: "25px",
                                height: "25px",
                                paddingTop: "3px",
                                paddingLeft: "3px",
                              }}
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2 border border-white ">
                        <div className="flex gap-4 justify-center">
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              editPassword(data.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/gwlusjdu.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={() => {
                              DeletePassword(data.id);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/skkahier.json"
                              trigger="hover"
                              style={{ width: "25px", height: "25px" }}
                            ></lord-icon>
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

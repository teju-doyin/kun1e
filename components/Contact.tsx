import React from "react";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="w-[95%] mx-auto mb-12">
        <p className="text-2xl mb-4 tracking-wider">Tell me about your idea </p>
        <form action="">
          <div className="input-div flex-col mb-4">
            <label className="text-[13px]" htmlFor="">
              Name*
            </label>
            <input type="text" name="" id="" className="" />
          </div>
          <div className="input-div flex-col mb-4">
            <label className="text-[13px]" htmlFor="">
              Email address*
            </label>
            <input type="email" name="" id="" />
          </div>
          <div className="input-div flex-col mb-8">
            <label className="text-[13px]" htmlFor="">
              Project description
            </label>
            <textarea name="" id=""></textarea>
          </div>
          <button
            type="submit"
            className="w-full tracking-widest bg-black text-white py-2 rounded-xs cursor-pointer"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

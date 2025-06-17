import { type FC, type JSX } from "react";
import Lottie from "react-lottie";
import { PrimaryButton } from "src/components/buttons/primary.button";
import animationData from "src/lottiesAnimation/contact.json";

export const Contact: FC = (): JSX.Element => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="bg-black p-5 lg:p-10 text-gray space-y-6 rounded-2xl">
      <h1 className="text-center text-xl lg:text-2xl text-pink">Contact</h1>
      <h1 className="text-3xl text-center">Get In Touch</h1>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-14">
        <div>
          <Lottie options={defaultOptions} width={"80%"} />
        </div>

        {/* form section */}
        <div className="flex items-center">
          <div className="bg-[#2A303C] rounded-xl p-4 lg:p-8 space-y-4">
            <label htmlFor="">Name</label>
            <input
              type="text"
              className="border w-full px-4 py-2 rounded-md"
              placeholder="Enter Your Name"
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="border w-full px-4 py-2 rounded-md"
              placeholder="Enter Your Email"
            />
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              className="border w-full px-4 py-2 rounded-md"
              placeholder="Enter Your Message"
            ></textarea>
            <PrimaryButton className="w-full">Send</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

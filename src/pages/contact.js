const Contact = () => {
  return (
    <div className="">
      <div className="  flex flex-col justify-center items-center mx-auto  max-w-[1230px]">
        <div className=" mt-[100px] w-[624px] ">
          <h1 className="text-4xl font-semibold">Contact Us</h1>
          <p className="text-xl text-[#696A75] mt-5 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className="flex py-[10px gap-[50px] mt-[30px]">
          <div className="w-[294px] h-[133px] p-4  border rounded-md">
            <h1 className="text-2xl font-semibold">Address</h1>
            <p className="mt-[10px] text-base text-[#696A75]  font-normal">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="w-[294px] h-[133px] p-4 border border-solid rounded-md">
            <h1 className="text-2xl font-semibold">Contact</h1>
            <p className="mt-[10px]  text-base text-[#696A75]  font-normal">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
        <div className="bg-[#F6F6F7] rounded-md py-[29px] pl-[35px] pr-[130px] w-[624px]  mt-[49px] ">
          <h1 className="text-lg font-semibold text-[#000]">Leave a Message</h1>
          <div className="flex gap-6 w-[478px]">
            <input
              className="p-[14px] h-[38px] w-[225px] rounded-md mt-6"
              placeholder="Your name"
            ></input>
            <input
              className="p-[14px] h-[38px] w-[225px] rounded-md mt-6"
              placeholder="Your email"
            ></input>
          </div>
          <input
            className="p-[14px] h-[35px] w-[478px] rounded-md mt-6"
            placeholder="Subject"
          ></input>
          <input
            className="p-[14px] h-[134px] w-[478px] flex items-start justify-start rounded-md mt-6"
            placeholder="Write message"
          ></input>
          <button className="bg-[#4B6BFB] py-5 px-4 rounded-md flex mt-5 h-5 items-center justify-center">
            <p className="font-medium text-white text-sm w-[98px] h-5 ">
              Send Message
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;

import { useCallback } from "react";

const SetPassword = () => {
  const onGroupContainer1Click = useCallback(() => {
    // Please sync "All Done" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-black font-poppins">
      <img
        className="absolute top-[0px] left-[736px] rounded-tl-64xl rounded-tr-none rounded-br-none rounded-bl-64xl w-[704px] h-[1024px] object-cover"
        alt=""
        src="/pexelsfauxels3183198-1@2x.png"
      />
      <div className="absolute h-[4.88%] w-[7.29%] top-[2.93%] right-[82.78%] bottom-[92.19%] left-[9.93%]">
        <div className="absolute h-[98.03%] w-full top-[0%] right-[0%] bottom-[1.97%] left-[0%] rounded-3xs bg-gray" />
        <img
          className="absolute h-[98.03%] w-[99.52%] top-[1.97%] right-[0.48%] bottom-[0%] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/screenshot-20230720-185351-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[180px] left-[319px] w-[71px] h-[71px]"
        alt=""
        src="/group-5.svg"
      />
      <div className="absolute top-[297px] left-[195px] text-[32px] font-medium">
        Set new password
      </div>
      <div className="absolute top-[367px] left-[239px] font-medium text-darkslategray text-center">
        Must be atleast 8 characters
      </div>
      <div
        className="absolute top-[612px] left-[221px] w-[300px] h-10 cursor-pointer text-center text-xl text-white"
        onClick={onGroupContainer1Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue box-border w-[300px] h-10 border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[4.38px] left-[67.46px] font-semibold inline-block w-[165.87px]">
          Reset password
        </div>
      </div>
      <div className="absolute top-[682px] left-[274px] w-[164px] h-[30px] text-center text-xl text-darkslateblue">
        <div className="absolute top-[0px] left-[29px] font-medium">
          {" "}
          Back to login
        </div>
        <img
          className="absolute top-[2px] left-[0px] w-[25px] h-[25px] overflow-hidden"
          alt=""
          src="/pharrowleft.svg"
        />
      </div>
      <div className="absolute top-[758px] left-[250px] w-[230px] h-1.5">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkslateblue w-[70px] h-1.5" />
        <div className="absolute top-[0px] left-[80px] rounded-8xs bg-darkslateblue w-[70px] h-1.5" />
        <div className="absolute top-[0px] left-[160px] rounded-8xs bg-darkslateblue w-[70px] h-1.5" />
      </div>
      <img
        className="absolute top-[452px] left-[221px] w-[300px] h-[35px]"
        alt=""
        src="/group-1000003818.svg"
      />
      <img
        className="absolute top-[547px] left-[221px] w-[300px] h-[35px]"
        alt=""
        src="/group-1000003819.svg"
      />
      <div className="absolute top-[calc(50%_-_93px)] left-[calc(50%_-_499px)] font-semibold">
        Password
      </div>
      <div className="absolute top-[calc(50%_+_6px)] left-[calc(50%_-_499px)] font-semibold">
        Confirm Password
      </div>
    </div>
  );
};

export default SetPassword;

import { useCallback } from "react";

const AllDone = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "welcome Login page" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "welcome Login page" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-base text-darkslategray font-poppins">
      <img
        className="absolute top-[0px] left-[736px] rounded-tl-64xl rounded-tr-none rounded-br-none rounded-bl-64xl w-[704px] h-[1024px] object-cover"
        alt=""
        src="/pexelsfauxels3183198-1@2x.png"
      />
      <img
        className="absolute top-[30px] left-[143px] rounded-[10px] w-[98.53px] h-[50px] object-cover"
        alt=""
        src="/screenshot-20230720-185351-1@2x.png"
      />
      <img
        className="absolute top-[191px] left-[319px] w-[71px] h-[71px]"
        alt=""
        src="/group-5.svg"
      />
      <div className="absolute top-[322px] left-[265px] text-[32px] font-medium text-black">
        All done !
      </div>
      <div className="absolute top-[389px] left-[236px] font-medium">
        Your password has been reset.
      </div>
      <div className="absolute top-[416px] left-[236px] font-medium">
        Now you can go to Login page
      </div>
      <div
        className="absolute top-[488px] left-[287px] w-[120px] h-10 cursor-pointer text-center text-xl text-white"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslateblue box-border w-[120px] h-10 border-[1px] border-solid border-gainsboro" />
        <div className="absolute top-[5.38px] left-[41.89px] font-semibold">
          Ok
        </div>
      </div>
      <div
        className="absolute top-[668px] left-[265px] w-[164px] h-[30px] cursor-pointer text-center text-xl text-darkslateblue"
        onClick={onGroupContainer1Click}
      >
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
      <div className="absolute top-[750px] left-[250px] w-[230px] h-1.5">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-darkslateblue w-[70px] h-1.5" />
        <div className="absolute top-[0px] left-[80px] rounded-8xs bg-darkslateblue w-[70px] h-1.5" />
        <div className="absolute top-[0px] left-[160px] rounded-8xs bg-darkslateblue w-[70px] h-1.5" />
      </div>
    </div>
  );
};

export default AllDone;

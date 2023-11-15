import { useCallback } from "react";
import Login from "./Login";
import { Link } from 'react-router-dom';

const Recovery = () => {
  const onContinueClick = useCallback(() => {
    // Please sync "set password" to the project
  }, []);

const handleBacktoLogin = () => {
    
    console.log('Back to login clicked');
};
const backtoLogin = {
    color: '#173767',
};
  return (
    <div className="h-screen h-full">
    <div className="flex w-full h-full">
      <div className="w-4/6 p-8">
        <div className="flex justify-center items-center ">
          <div className="max-w-[600px] mx-auto w-full">
          <img src="images/Logo.png" alt="logo" />
          </div>
        </div>
        <div className="absolute top-[120px] left-[420px] w-[63px] h-[63px]">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[63px] h-[63px] border-[1px] border-solid border-gainsboro" />
        <img
          className="absolute top-[15px] left-[15px] w-[35px] h-[35px] overflow-hidden "
          alt=""
          src="/heroiconsoutlinemailopen.svg"
        />
      </div>
        <div className="h-full flex justify-center items-center">
          <div className="w-full m-auto" style={{ maxWidth: "319px" }}>
            <h4 className="absolute pb-10 top-[260px] left-[305px] text-4xl justify-center">Password Recovery</h4>
            <div className="absolute top-[310px] left-[350px] justify-center">
            <p className="pb-2 leading-none">
               We sent a code to your Email</p>
            </div>

                 <div className="absolute top-[350px] left-[305px] bg-white box-border w-[55px] h-[50px] border-b-[5px] border-solid border-black">
                  <input
                  type="text"
                  maxLength="1"
                  placeholder="0"
                  className="w-full h-full text-center font-semibold text-black outline-none bg-transparent"/>
                  </div>
                 <div className="absolute top-[350px] left-[380px] bg-white box-border w-[55px] h-[50px] border-b-[5px] border-solid border-black" >
                 <input
                  type="text"
                  maxLength="1"
                  placeholder="0"
                  className="w-full h-full text-center font-semibold text-black outline-none bg-transparent"/>
                  </div>
                 <div className="absolute top-[350px] left-[457px] bg-white box-border w-[55px] h-[50px] border-b-[5px] border-solid border-black" >
                 <input
                  type="text"
                  maxLength="1"
                  placeholder="0"
                  className="w-full h-full text-center font-semibold text-black outline-none bg-transparent"/>
                  </div>
                 <div className="absolute top-[350px] left-[534px] bg-white box-border w-[55px] h-[50px] border-b-[5px] border-solid border-black" >
                 <input
                  type="text"
                  maxLength="1"
                  placeholder="0"
                  className="w-full h-full text-center font-semibold text-black outline-none bg-transparent"/>
                  </div>
            
            <div className="absolute m-auto top-[405px] left-[300px] w-[293px] h-[40px]">     
            <div className="w-full pt-10">
                    <button
                      style={{ background: "#173767"}}
                      className="w-full bg-[#173767] text-white p-2 rounded-xl outline-none border-none"
                    onClick={onContinueClick}>
                      {/* Continue */}
                      <Link to="/setpassword">Continue</Link>
                    </button>
                  </div>
               </div>
              <div className="absolute top-[485px] left-[305px]">
                    Didn't receive the Email?
              </div>
              <div className="absolute top-[485px] left-[485px] cursor-pointer [text-decoration:underline] font-medium text-[#173767] text-center">
                    Click to resend
              </div>
             </div>
         </div>
      <div className="w-full">
         <p className="absolute top-[520px] left-[370px] w-[164px] h-[30px] cursor-pointer text-center font-semibold text-darkslateblue"
          >      
        <a href="" onClick={handleBacktoLogin} style={backtoLogin}> Back to Login</a>
       <img
          className="absolute top-[2px] left-[0px] w-[25px] h-[25px] overflow-hidden"
          alt=""
          src="/pharrowleft.svg"
        /></p>
      </div>
      
        </div> 
        <div className="w-2/6 right">
        </div>
        <div className="absolute top-[600px] left-[320px] rounded-8xs  bg-[#173767] w-[70px] h-1.5" />
        <div className="absolute top-[600px] left-[400px] rounded-8xs  bg-[#173767] w-[70px] h-1.5" />
        <div className="absolute top-[600px] left-[480px] rounded-8xs  bg-[#B3B3B3] w-[70px] h-1.5" />
        </div>
 </div>

);
};

export default Recovery;

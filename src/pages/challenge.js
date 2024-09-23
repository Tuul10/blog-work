// import { useEffect, useState } from "react";

// const challenge = () => {
//   const [second, setSecond] = useState(0);
//   const [isStart, setIsStart] = useState(false);

//   useEffect(() => {
//     let interval;

//     if (isStart === true) {
//       interval = setInterval(() => {
//         if (second < 60) setSecond((prev) => prev + 1);
//       }, 1000);
//     }
//     if (isStart === false) {
//       interval = setInterval(() => {
//         setSecond(second);
//       }, 1000);
//     }

//     // if (isStop === score) {
//     //   setScore(reset);
//     // }
//     return () => clearInterval(interval);
//   }, [isStart, second]);

//   const stop = () => {
//     setIsStart(false);
//   };

//   const onStart = () => {
//     setIsStart(true);
//   };

//   const isReset = () => {
//     setSecond(0);
//   };

//   return (
//     <div className="flex flex-col justify-center w-[1230] items-center mt-80">
//       <h1>Challenge</h1>

//       <p id="demo">{second}</p>
//       <div className="flex gap-5 mt-20 text-center">
//         <button onClick={onStart}>start</button>
//         <button onClick={stop}>stop</button>
//         <button onClick={isReset}>reset</button>
//       </div>
//     </div>
//   );
// };
// export default challenge;

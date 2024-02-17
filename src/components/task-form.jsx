import React, { useState } from "react";
import { Navigate,Link } from "react-router-dom";
import { addData } from "../store/todoSlice";
import { useDispatch } from "react-redux";
const TaskForm=()=>{
    const dispatch=useDispatch();
    const [details,setDetails]=useState({
        taskName:'',
        taskDetails:''
    });
    const [submitted,setSubmitted]=useState(false);

    const handleSubmit= () => {
      if (details.taskName === "" || details.taskDetails ==='') {
        alert("Enter a task");
      } else {
        console.log(details);
        dispatch(addData(details));
        setDetails({
          taskName: "",
          taskDetails: "",
        });
        setSubmitted(true);
      }
    };
    
    if(submitted){
     return <Navigate to="/showList" />;
        
    }
    return (
      <div>
        <h3>Task Form</h3>
        <div className="main-container flex flex-col items-center justify-center ">
          <div className="ml-[80%]">
            <Link to="/showList">
              <button className="border border-black p-1 rounded-lg bg-violet-300 ">
                Task List
              </button>
            </Link>
          </div>
          <div>
            <div className="border border-black flex flex-col gap-8 p-5 m-5 rounded-2xl ">
              <h3 className="font-bold text-2xl">New Task</h3>
              <div className="flex flex-col">
                <div className="flex flex-row gap-2 w-[100%]">
                  <div className="w-[50%]">
                    <input
                      className="w-[100%] p-1 outline-none rounded-lg"
                      placeholder="Task Name"
                      value={details.taskName}
                      onChange={(e) =>
                        setDetails({ ...details, taskName: e.target.value })
                      }
                    />
                  </div>
                  <div className="w-[50%]">
                    <input
                      className="w-[100%] p-1 outline-none rounded-lg"
                      placeholder="Task Details"
                      value={details.taskDetails}
                      onChange={(e) =>
                        setDetails({ ...details, taskDetails: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="border p-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 font-bold w-32"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default TaskForm;
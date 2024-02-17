import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { updateData,removeData } from "../store/todoSlice";
import { Link } from "react-router-dom";
const TaskList=()=>{
    const dispatch=useDispatch()
    const [editUserId, setEditUserId] = useState(null);
    const [editedData, setEditedData] = useState({});
    const userData=useSelector((state) => state?.userDetails?.userData)
console.log(userData);
    const handleEdit = (id) => {
      setEditUserId(id);
      const userToEdit = userData.find((user) => user.id === id);
      if (userToEdit) {
        setEditedData(userToEdit);
      }
    };
    const handleDelete = (id) => {
      dispatch(removeData(id));
    };

      const handleSave = () => {
        dispatch(updateData({ id: editUserId, updatedData: editedData }));
        setEditUserId(null); // Clear the edit mode
      };

      const handleInputChange = (e, field) => {
        setEditedData({
          ...editedData,
          [field]: e.target.value,
        });
      };

    return (
      <div className="flex flex-col tab bg-gradient-to-r from-sky-500 to-indigo-500 h-[100vh]">
        <div>
          <Link to="/addtask">
            <button className="border border-black p-1 rounded-lg bg-violet-300 ml-[80%]">
              Add Task
            </button>
          </Link>
        </div>
        <div>
          <h2 className="font-sans font-bold text-center">Task Details</h2>
          <table className="overflow-x-auto">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Task Details</th>
                <th>Modify Details</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>
                    {editUserId === user.id ? (
                      <input
                        className="w-24 outline-none"
                        type="text"
                        value={editedData.taskName}
                        onChange={(e) => handleInputChange(e, "firstName")}
                      />
                    ) : (
                      user.taskName
                    )}
                  </td>
                  <td>
                    {editUserId === user.id ? (
                      <input
                        className="w-24 outline-none"
                        type="text"
                        value={editedData.taskDetails}
                        onChange={(e) => handleInputChange(e, "lastName")}
                      />
                    ) : (
                      user.taskDetails
                    )}
                  </td>
                  <td>
                    {editUserId === user.id ? (
                      <button
                        onClick={handleSave}
                        className="border border-black p-1 rounded-2xl bg-lime-600"
                      >
                        Save
                      </button>
                    ) : (
                      <div className="flex gap-3 items-center justify-center">
                        <button
                          className="border border-black p-1 rounded-2xl bg-red-300 font-semibold"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="border border-black p-1 rounded-2xl bg-lime-100"
                          onClick={() => handleEdit(user.id)}
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default TaskList;
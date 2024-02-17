import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import Home from "./components/home";
import TaskForm from "./components/task-form";
import TaskList from "./components/task-list";
import TaskDetails from "./components/task-details";
import appStore from "./store/appstore";

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<TaskForm />} />
          <Route path="/showList" element={<TaskList />} />
          <Route path="/taskDetails" element={<TaskDetails />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

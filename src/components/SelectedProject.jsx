import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";
import ProjectTasksList from "./ProjectTasksList";

export default function SelectedProject({
  addNewProjectTask,
  project,
  deleteProject,
}) {
  const modal = useRef();
  const taskInput = useRef();

  function addNewTaskHelper() {
    const task = taskInput.current.value;
    taskInput.current.value = "";
    if (task.trim() === "") {
      modal.current.open();
      return;
    }
    addNewProjectTask(task, project.id);
  }

  return (
    <>
      <Modal ref={modal}>Task entered is not valid!</Modal>
      <div className="w-[35rem] mt-16">
        <menu>
          <button
            onClick={() => deleteProject(project.id)}
            className="text-red-600 hover:text-red-950"
          >
            Delete project
          </button>
          <h1 className="font-bold text-stone-900">
            Project Title: {project.title}
          </h1>
          <h5>Project Description: {project.description}</h5>
          <h5>Project Date: {project.date}</h5>
          <Input ref={taskInput} type={"text"} labelText={"Add a new task"} />
          <button
            onClick={addNewTaskHelper}
            className="text-green-600 hover:text-green-950"
          >
            Save task
          </button>
          <div>
            {project.tasks && <ProjectTasksList tasks={project.tasks} />}
            {!project.tasks && "You have no tasks"}
          </div>
        </menu>
      </div>
    </>
  );
}

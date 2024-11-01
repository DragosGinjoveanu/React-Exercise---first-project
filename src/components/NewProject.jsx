import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ noProjects, changePage, addNewProject }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function helpAddNewProject() {
    const projectId = noProjects;
    const projectTitle = title.current.value;
    const projectDescription = description.current.value;
    const projectDate = date.current.value;
    if (
      projectTitle.trim() === "" ||
      projectDescription.trim() === "" ||
      projectDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    const newProject = {
      id: Math.random(),
      title: projectTitle,
      description: projectDescription,
      date: projectDate,
    };
    addNewProject(newProject);
  }

  return (
    <>
      <Modal ref={modal}>Data entered is not valid!</Modal>
      <div className="w-[35rem] mt-16">
        <menu>
          <p>
            <button
              onClick={() => {
                changePage("no project");
              }}
              className="text-red-600 hover:text-red-950"
            >
              Cancel
            </button>
            <br />
            <button
              onClick={helpAddNewProject}
              className="text-green-600 hover:text-green-950"
            >
              Save
            </button>
          </p>
        </menu>

        <div>
          <Input ref={title} type={"text"} labelText={"Title"} />
          <Input ref={description} type={"text"} labelText={"Description"} />
          <Input ref={date} type={"date"} labelText={"Date"} />
        </div>
      </div>
    </>
  );
}

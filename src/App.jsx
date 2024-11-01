import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

// identifier can be:
// 1: "no project"
// 2: "new project"
// 3: "{projectId}"

function App() {
  const [projects, setNewProjects] = useState({
    identifier: "no project",
    projects: [],
  });

  function handleAddNewProject(projectData) {
    setNewProjects((prevProjects) => ({
      ...prevProjects,
      projects: [...prevProjects.projects, projectData],
      identifier: +projectData.id,
    }));
  }

  function handleAddNewProjectTask(newTask, projectId) {
    setNewProjects((prevProjects) => {
      const updatedProjects = prevProjects.projects.map((project) => {
        if (prevProjects.identifier === projectId) {
          return {
            ...project,
            tasks: [...(project.tasks || []), newTask],
          };
        }
        return project;
      });

      return {
        ...prevProjects,
        projects: updatedProjects,
      };
    });
  }

  function handleDeleteProject(projectId) {
    setNewProjects((prevProjects) => ({
      ...prevProjects,
      projects: prevProjects.projects.filter(
        (project) => project.id !== projectId
      ),
      identifier: "no project",
    }));
  }

  function handlePageChange(newIdentifier) {
    setNewProjects((prevProjects) => ({
      ...prevProjects,
      identifier: newIdentifier,
    }));
  }

  let content = (
    <SelectedProject
      deleteProject={handleDeleteProject}
      addNewProjectTask={handleAddNewProjectTask}
      project={projects.projects.find(
        (project) => project.id === projects.identifier
      )}
    />
  );

  if (projects.identifier === "no project") {
    content = <NoProjectSelected />;
  } else if (projects.identifier === "new project") {
    content = (
      <NewProject
        noProjects={projects.projects.length}
        changePage={handlePageChange}
        addNewProject={handleAddNewProject}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar projects={projects} changePage={handlePageChange} />
      {content}
    </main>
  );
}

export default App;

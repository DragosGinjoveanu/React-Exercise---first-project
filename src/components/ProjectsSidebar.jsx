export default function ProjectsSidebar({ projects, changePage }) {
  const currentPage = projects.identifier;
  const actProjects = projects.projects;

  return (
    <>
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <button
          disabled={currentPage === "new project"}
          className="text-stone-500 hover:text-stone-300"
          onClick={() => changePage("new project")}
        >
          + Add new project
        </button>
        <h2 className="text-xl font-bold text-stone-500 my-4">YOUR PROJECTS</h2>
        <ol>
          {actProjects.map((actProject) => {
            let buttonClass = "text-stone-500";
            if (actProject.id === projects.identifier) {
              buttonClass = "text-red-900";
            }

            return (
              <li key={actProject.id}>
                <button
                  className={buttonClass}
                  onClick={() => changePage(actProject.id)}
                >
                  {actProject.title}
                </button>
              </li>
            );
          })}
        </ol>
      </aside>
    </>
  );
}

import noProjectsImg from "../assets/no-projects.png";

export default function NoProjectSelected() {
  return (
    <div>
      <img
        className="w-20 h-21 object-contain mx-auto"
        src={noProjectsImg}
        alt="No Project Selected"
      ></img>
      <h1>No project selected</h1>
      <p>Please add a new project or select a project from the sidebar</p>
    </div>
  );
}

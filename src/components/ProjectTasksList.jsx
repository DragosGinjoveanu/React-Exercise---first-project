export default function TasksList({ tasks }) {
  // prop drilling is necessary here to delete a certain task, which is not ideal.
  // for this project, I will leave it without this feature, until I learn new ways to manage state

  return (
    <ol>
      {tasks.map((actTask, index) => {
        return <li key={index}>{actTask}</li>;
      })}
    </ol>
  );
}

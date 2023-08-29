import Score from "./Score";
function Student({ student }) {
  return (
    <div className="Student">
      <h1>{student.name}</h1>
      <p>{student.bio}</p>
      <Score scores={student.scores} />
    </div>
  );
}
export default Student;

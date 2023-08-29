import Score from "./Score";
function Student({ student }) {
  return (
    <div className="Student">
      <h1>{student.name}</h1>
      <p>{student.bio}</p>
      {student.scores.map((item) => (
        <Score score={item} />
      ))}
    </div>
  );
}
export default Student;

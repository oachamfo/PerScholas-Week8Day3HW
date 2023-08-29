function Score({ scores }) {
  let date = scores.date;
  let score = scores.score;
  return (
    <div className="Score">
      <b>Scores</b>
      {scores.map((item) => (
        <p>
          score:&nbsp;{item.score}&nbsp; date:&nbsp;{item.date}
        </p>
      ))}
    </div>
  );
}
export default Score;

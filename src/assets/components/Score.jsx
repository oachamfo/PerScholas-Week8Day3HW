function Score({ score }) {
  return (
    <div className="Score">
      <b>Score</b>
      <p>
        score:&nbsp;{score.score}&nbsp; date:&nbsp;{score.date}
      </p>
    </div>
  );
}
export default Score;

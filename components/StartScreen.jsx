function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to Quizy</h2>
      <h3>Enjoy the puzzles</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Go
      </button>
    </div>
  );
}

export default StartScreen;

function App() {
  return (
    <>
      <div className="container">
        <div className="quiz-container">
          <header>
            <h1>Country Quiz</h1>
            <div className="result">
              <span>🏆</span>
              <p>8/10</p>
            </div>
          </header>
          <div className="question-container">
            <div className="question-numbers">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
              </ul>
            </div>
            <div className="question">
              <p>Which country is Kuala Lumpur the capital?</p>
            </div>
            <div className="answer-options">
              <button>Sweden</button>
              <button>Vietnam</button>
              <button>Malaysia</button>
              <button>Austria</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

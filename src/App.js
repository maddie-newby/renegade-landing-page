import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Renegade Allstars</h1>
        <h2>
          Please fill out the form below to register your interest in joining
          cheerleading with Renegade Allstars
        </h2>
      </div>
      <div className="questionnaire">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeIKBRATRSoENhz71wDC_0Us-3paegZQH4a3Br5E_pbcOcPvg/viewform?embedded=true"
          width="640"
          height="1200"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default App;

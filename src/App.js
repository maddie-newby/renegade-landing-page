import "./App.css";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} alt="Renegade Allstars logo" />
        <h2>
          Please fill out the form below to register your interest in joining
          cheerleading with Renegade Allstars
        </h2>
        <h3>
          If you have any questions, please email us at{" "}
          <a
            title="Renegade Allstars email address"
            href="mailto:renegadeallstarsuk@gmail.com"
          >
            renegadeallstarsuk@gmail.com
          </a>
          .
        </h3>
      </div>
      <div className="questionnaire">
        <iframe
          title="questionnaire"
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

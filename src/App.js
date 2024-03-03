import Calculator from "./components/Calculator";
import logo from "./img/calcguru_logo.png"; // Import the logo image

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Calculator />
      <div style={{ position: 'absolute', bottom: 35, right: 45, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="CalcGuru Logo" style={{ width: '80px', marginRight: '10px' }} />
          <div>
            <b style={{ fontFamily: 'Raleway', fontWeight: 'bold', marginBottom: '5px' }}>CalcGuru</b>
            <p style={{ fontFamily: 'Nunito', fontSize: '0.8em', margin: 0 }}>Calculations makes easier</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

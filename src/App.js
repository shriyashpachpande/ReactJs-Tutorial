import Navbar from './components/Navbar'
import './App.css';
import TextForm from './components/textForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils2"
        aboutText="About Text" />
      <div className="container">
        <TextForm heading="Enter text for analyze" />
      </div>

    </>
  );
}

export default App;

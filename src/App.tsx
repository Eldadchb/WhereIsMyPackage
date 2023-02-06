import './App.css';
import MainAppBar from './components/AppBar/AppBar';
import InputBar from './components/InputBar/InputBar';

function App() {
	return (
		<>
			<div className="app-bar">
				<MainAppBar />
			</div>
			<div className="input-section">
        <InputBar />
      </div>
		</>
	);
}

export default App;

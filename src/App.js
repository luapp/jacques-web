import AppCss from './App.module.css';
import Header from './Header';
import LandingPage from './LandingPage';

function App() {
  	return (
    	<div className={AppCss.app}>
			<Header />
			<LandingPage />
    	</div>
  	)
}

export default App;

import AppCss from './App.module.css';
import Header from './Header';
import LandingPage from './LandingPage';
import Footer from './Footer';

function App() {
  	return (
    	<div className={AppCss.app}>
			<Header />
			<LandingPage />
			<Footer />
    	</div>
  	)
}

export default App;

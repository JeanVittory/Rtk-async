import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Posts } from './components/Posts.components';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<h1>Redux en react</h1>
			<Posts />
		</div>
	);
}

export default App;

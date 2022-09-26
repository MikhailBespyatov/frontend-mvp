import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'), () => {
    console.info('App Version:', process.env.REACT_APP_VERSION);
});

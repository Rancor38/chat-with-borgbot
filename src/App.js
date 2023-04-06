import './App.css';
import Form from './components/Form';
import Response from './components/Response';
import { MessageProvider } from './context/Context';


const App = () => {
  return (
    <div className="App">
      <h1>Chat with Borgbot</h1>
      <MessageProvider>
      <Form />
      <Response/>
      </MessageProvider>
    </div>
  );
}

export default App;

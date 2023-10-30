//importing App.css style sheet
import './App.css';
//importing the navigation component
import Nav from './components/Nav';
//importing the login form component
import LoginForm from './components/LoginForm';

//function component
//Navigation and Log in form components added to App component
function App() {
  return (
    <div>
      <Nav />
      <LoginForm />
    </div>
  );
}
//exportin App component
export default App;

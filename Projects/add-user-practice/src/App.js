import classes from  './App.module.css';
import UserForm from './components/User/UserForm/UserForm';

function App() {
  return (
    <div className={classes.App}>
      <h1>Add user dummy project</h1>
      <UserForm />
    </div>
  );
}

export default App;

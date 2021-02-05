import { users } from "./data";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h3>  пользователи сайта</h3>
   
      <div className="cards">
          {users.map((user) => {
          return (
            <div className="card">
              <h3>{user.fio}</h3>
              <p>{user.city}</p>
              <p>{user.email}</p>
              <p>{user.phoneNumber}</p>
            </div>
          );
        })}
      </div>
      
   </header>
      
    </div>
  );
}

export default App;

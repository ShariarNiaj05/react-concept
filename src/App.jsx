import './App.css'
import Friends from './Friends';
import Users from './Users';
import Counter from './counter';
import Team from './team';

function App() {

  const handleClick = () => {
    alert('Button Clicked');
  }
  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <Users></Users>


      <Counter></Counter>

      <Team></Team>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={() => alert("Clicked second button")}>Click 2</button>
      <button onClick={() => addToFive(3)}>Click to add</button>
      
    </>
  )
}

export default App

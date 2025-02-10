import { useDispatch,useSelector } from "react-redux";
import { addtodoAction } from "./store/action/todos";

 
function App() {
  const selector=useSelector(function(state){
    console.log(state);
    return state.todoReducer

  })
  console.log(selector)
  const dispatch=useDispatch()

const handleInput=()=>{

}
const addtodo=()=>{
    dispatch(addtodoAction("my first task"));
}

  return (
    <div className="App">
       <input onInput={handleInput}></input>
       <button onClick={addtodo}>click for redux</button>
    </div>
  );
}

export default App;

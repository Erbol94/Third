import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {clearSayHelloAction, createUserAction, sayHelloAction} from "./actions/actions";
import {useEffect, useState} from "react";
import {ADDNUMBERACTION} from "./store/inputNumber";


function App() {
      // const [name, setName] = useState("")

      const dispatch = useDispatch();
      const ten = useSelector(state => state.inputNumber.num);
      const [number, setNumber] = useState('');

      // const title = useSelector(state => state.titleReducer.title)
      //
      // const sayHello = () => {
      //     dispatch(sayHelloAction("Erbol"))
      // }
      //
      // const users = useSelector(state => state.usersReducer.users)
      //
      // const clearText = () => {
      //       dispatch(clearSayHelloAction())
      // }
      // const createUser = () => {
      //       dispatch(createUserAction(name))
      // }
      // const onChangeName = (e) => {
      //       setName(e.target.value)
      // }
      /// add + 10 DZ-2
      const btnClick = () => {
          dispatch({type: 'ADDTEN', payload: Number(number)})
      }
      useEffect(()=>{
          console.log(ten)
      }, [ten])


      return (
        // <div>
        //     {title}-->
        //     <button onClick={sayHello}>click</button>
        //     <button onClick={clearText}>clear</button>
        //     ------------
        //     <input type="text" onChange={onChangeName} value={name}/>
        //     <button onClick={createUser}>create</button>
        //       {users.map((user, key) => <div key={key}>{user}</div>)}
        // </div>
          <div>
              <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
              <button onClick={btnClick}>+</button>
               -- = {ten}
          </div>

      );
}

export default App;

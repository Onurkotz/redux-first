import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { arttır, eksilt, userEnter } from "../redux/counter/counterSlice"

function Count() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [entVal, setEntVal] = useState(0);
  return (
    <div>
      <h1>{countValue}</h1>
      
      
      <button onClick={() => {dispatch(eksilt())}}>Eksilt</button>
      <button onClick={() => {dispatch(arttır())}}>Arttır</button>
      <br />
      <br />
      <input type="number" value={entVal} onChange={(e) => {setEntVal(e.target.value)}} />
      <br />
      <br />
      <button onClick={() => {dispatch(userEnter(entVal))}} >Sayıyı Ekle</button>
    </div>
  );
}

export default Count;

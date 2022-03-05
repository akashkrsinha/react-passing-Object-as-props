import React from "react";
import "./style.css";
import Test from './Test.js'
import Obj from './obj.js'

export default function App() {
  console.log(Obj)
  return (
    <div>
      <Test obj = {Obj}/>
    </div>
  );
}

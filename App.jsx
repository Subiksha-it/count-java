import {useState} from "react"
import Sample from "./component/sample"

function App() {
  const [count, setCount, Count] = useState(0)
  {/*const myName = "subi"
  const Age="19"
  const hobby="dancing"*/}
  return (
    <>
    {/*<h1>My React App</h1>*/}
    <h1 className=" text-30x1 font-bold underline text-pink-600">Hello world</h1>
    <button className="bg-purple-400 p-2" onClick={() => setCount(count + 1)}>Click me</button><br></br>
    {/*<Sample myName={myName} Age={Age} hobby={hobby}/>*/}
    <Sample count={count}/>
    </>
  )
}

export default App

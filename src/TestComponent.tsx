import React, { useState } from 'react'

interface Props {
  text: string
}
interface userData {
  id: number;
  name: string;
}
const TestComponent:React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(null);
  const [user, setUser] = useState<userData>({id:1, name: "dummy"});
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  }
  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <p>{ inputData }</p>
    </div>
  );
}

export default TestComponent


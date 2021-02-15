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
  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default TestComponent


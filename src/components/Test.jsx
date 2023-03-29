import { useSelector } from "react-redux";

const Test = () => {
  const counter = useSelector((state) => {
    return state.counter.counter;
  });
  return <div>Counter is currently {counter}</div>;
};

export default Test;

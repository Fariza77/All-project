
export default function FirstComp(props) {
  // props == { info: { counter: 0 } }
  return (
    <div>
      <h1>Registration Form</h1>
      <h2>Counter {props.state.counter}</h2>

      {props.children}
    </div>
  )
}

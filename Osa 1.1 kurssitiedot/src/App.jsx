const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.part1}/>
      <Part content={props.part2}/>
      <Part content={props.part3}/>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.content.part} {props.content.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = { part: 'Fundamentals of React', exercises: 10 }
  const part2 = { part: 'Using props to pass data', exercises: 7 }
  const part3 = { part: 'State of a component', exercises: 14 }
  const sum = 10 + 7 + 14 
    /*{ part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 },*/

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3}/>
      <Total sum={sum}/>
    </div>
  )
}

export default App

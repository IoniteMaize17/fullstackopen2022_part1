const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part  = (props) => {
  return (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
  );
}

const Content  = (props) => {
  let part_views = [];
  props.parts.forEach(part => {
    part_views.push(<Part part={part} />)
  });
  return (
    <div>
      {part_views}
    </div>
  );
}

const Total = (props) => {
  let total = props.parts.reduce((partialSum, a) => partialSum + a.exercises, 0);
  return (
    <p>Number of exercises {total}</p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
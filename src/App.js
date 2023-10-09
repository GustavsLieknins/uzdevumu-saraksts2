import logo from './logo.svg';
import './App.css';
import Todo from './ToDo.js';

function App() {
  const fullLietinasParts = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: "selected === 'no'"
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: "selected === 'no'"
    },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: "selected === 'no'"
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: "selected === 'yes'"
          },
          {
            userId: 1,
            id: 5,
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: "selected === 'no'"
            },
            {userId: 1,
              id: 6,
              title: "qui ullam ratione quibusdam voluptatem quia omnis",
              completed: "selected === 'no'"
              }
  ];
  const visasLietas = fullLietinasParts.map((lietas, i) => {
    return <Todo key={i} title={lietas.title} userId={lietas.id} checkedornoter={lietas.completed}/>
  });
  return (
    <>
    {visasLietas}
    </>
  );
}

export default App;
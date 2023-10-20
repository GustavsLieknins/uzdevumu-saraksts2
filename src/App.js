import logo from './logo.svg';
import './App.css';
import Todo from './ToDo.js';
import {useState} from 'react';
import {useEffect} from 'react';


function App() {
  
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const [todos, setTodos] = useState([]);

  
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
    
  }, [])
  const fullLietinasParts = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false
    },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true
          },
          {
            userId: 1,
            id: 5,
            title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
            completed: false
            },
            {userId: 1,
              id: 6,
              title: "qui ullam ratione quibusdam voluptatem quia omnis",
              completed: false
              }
  ];
  const visasLietas = todos.map((lietas, i) => {
    return <Todo key={i} title={lietas.title} userId={lietas.id} checkedornoter={lietas.completed} />
  });
  return (
    <>
    {visasLietas}
    </>
  );
}

export default App;

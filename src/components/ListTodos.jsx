import { useSelector } from "react-redux";
import Card from "./Card";
const ListTodos = () => {
  // store'daki veirlere abone olma.

  const todoState = useSelector((store) => store.todoReducer);

  return (
    <div>
      {todoState.todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;

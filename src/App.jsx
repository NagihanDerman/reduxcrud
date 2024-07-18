import ListTodos from "./components/ListTodos";
import AddForm from "./components/AddForm";

const App = () => {
  return (
    <div className="">
      <div className="container p-5">
        <h2 className="text-center">
          REDUX <span className="text-warning">CRUD</span>
        </h2>
        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;

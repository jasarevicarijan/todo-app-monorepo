import TodoList from "../screens/TodoList";
import TodoCreate from "../screens/TodoCreate";
import TodoEdit from "../screens/TodoEdit";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export const MainRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/todo/list" element={<TodoList />} />
          <Route path="/todo/create" element={<TodoCreate />} />
          <Route path="/todo/edit/:todo_id" element={<TodoEdit />} />
          <Route path="/" element={<Navigate to="/todo/list" />} />
        </Routes>
      </Router>
    </div>
  );
};

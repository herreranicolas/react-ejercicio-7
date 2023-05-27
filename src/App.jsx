import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import EmpleadoList from "./components/EmpleadoList";

function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <EmpleadoList />
    </Container>
  );
}

export default App;

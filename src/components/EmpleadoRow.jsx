import { ListGroup, Badge, Row, Col } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({
  idEmpleado,
  avatarEmpleado,
  nombreEmpleado,
  puestoEmpleado,
  sectorEmpleado,
}) => {
  return (
    <Row>
      <ListGroup.Item className="d-flex align-items-center justify-content-center">
        <Col className="text-center mx-4" md={1}>
          <EmpleadoAvatar avatarEmpleado={avatarEmpleado}></EmpleadoAvatar>
        </Col>
        <Col xs={10} md={11}>
          <h5>{nombreEmpleado}</h5>
          <p className="mb-0">
            {puestoEmpleado}
            <Badge bg="primary" className="ms-1">
              {sectorEmpleado}
            </Badge>
          </p>
        </Col>
      </ListGroup.Item>
    </Row>
  );
};

export default EmpleadoRow;

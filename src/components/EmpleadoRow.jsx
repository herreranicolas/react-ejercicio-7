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
        <Col>
          <EmpleadoAvatar avatarEmpleado={avatarEmpleado}></EmpleadoAvatar>
        </Col>
        <Col xs={10}>
          <h5>{nombreEmpleado}</h5>
          <h6>
            {puestoEmpleado}
            <Badge bg="primary">{sectorEmpleado}</Badge>
          </h6>
        </Col>
      </ListGroup.Item>
    </Row>
  );
};

export default EmpleadoRow;

import { ListGroup, Badge, Row, Col, Image } from "react-bootstrap";

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
          <Image
            src={`https://unavatar.io/github/${avatarEmpleado}`}
            roundedCircle
          />
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

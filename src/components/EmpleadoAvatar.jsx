import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({ avatarEmpleado }) => {
  return <Image src={avatarEmpleado} roundedCircle />;
};

export default EmpleadoAvatar;

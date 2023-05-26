import { Image } from "react-bootstrap";

const EmpleadoAvatar = ({ avatarEmpleado }) => {
  return (
    <Image src={`https://unavatar.io/github/${avatarEmpleado}`} roundedCircle />
  );
};

export default EmpleadoAvatar;

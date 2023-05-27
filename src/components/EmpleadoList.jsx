import { ListGroup } from "react-bootstrap";
import EmpleadoRow from "./EmpleadoRow";

function EmpleadoList() {
  let empleados = [
    {
      id: 1,
      fullName: "Laya Dueñas",
      title: "CEO",
      department: "Business",
      pic: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      fullName: "Astryd Vallés",
      title: "CMO",
      department: "Marketing",
      pic: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      fullName: "Shantell Meza",
      title: "CFO",
      department: "Business",
      pic: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      fullName: "Sergio Ocampo",
      title: "CTO",
      department: "Engineering",
      pic: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 5,
      fullName: "Ares Jiménez",
      title: "Art Director",
      department: "Marketing",
      pic: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 6,
      fullName: "Marta Pérez",
      title: "Frontend Dev",
      department: "Engineering",
      pic: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 7,
      fullName: "Ellen Balderas",
      title: "Digital Strategist",
      department: "Marketing",
      pic: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 8,
      fullName: "Cynthia Valentín",
      title: "Backend Dev",
      department: "Engineering",
      pic: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 9,
      fullName: "Bernard Jung",
      title: "DevOps Engineer",
      department: "Engineering",
      pic: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <ListGroup className="my-3">
      {empleados.map((empleado) => (
        <EmpleadoRow
          key={empleado.id}
          idEmpleado={empleado.id}
          avatarEmpleado={empleado.pic}
          nombreEmpleado={empleado.fullName}
          puestoEmpleado={empleado.title}
          sectorEmpleado={empleado.department}
        ></EmpleadoRow>
      ))}
    </ListGroup>
  );
}

export default EmpleadoList;

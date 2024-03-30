import Debounce from "../Components/Debounce";
import EmployeeMC from "../Components/EmployeeMC";
import MachineCodingList from "../Components/MachineCodingList";
export const MACHINE_CODING_DATA = [
  {
    title: "All Coding",
    path: "/",
    render: <MachineCodingList />,
  },
  {
    title: "Employee Database",
    path: "/employeeDB",
    render: <EmployeeMC />,
  },
  {
    title: "Debounce",
    path: "/debounce",
    render: <Debounce />,
  },
  {
    title: "Not found",
    path: "/*",
    render: <>ERROR NOTHING HERE</>,
  },
];

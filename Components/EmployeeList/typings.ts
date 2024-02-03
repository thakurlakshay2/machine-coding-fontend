import { NewEmployeeData } from "../AddNewEmployee/typings";

export interface EmployeeListProps {
  employeeList: Array<NewEmployeeData>;
  selectedEmployee: React.Dispatch<
    React.SetStateAction<NewEmployeeData | undefined>
  >;
  deleteEmployee: (firstName: string) => void;
}

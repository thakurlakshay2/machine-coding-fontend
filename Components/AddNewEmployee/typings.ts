export interface AddNewEmpoyeeProps {
  addNewEmployee: (nmewEmployee: NewEmployeeData) => void;
  closeModal: () => void;
}

export interface NewEmployeeData {
  firstName: string;
  lastName: string;
  contact: number;
  email: string;
  salary: number;
  address: string;
  date: string;
}

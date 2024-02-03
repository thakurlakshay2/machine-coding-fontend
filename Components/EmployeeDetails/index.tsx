import React from "react";
import { EmployeeDetails } from "./typings";

const EmployeeDetails: React.FC<EmployeeDetails> = ({ employeeData }) => {
  return (
    <div>
      <h2>
        {employeeData.firstName} {employeeData.lastName}
      </h2>
      <h2>{employeeData.email}</h2>
      <h2>{employeeData.contact}</h2>
      <h2>{employeeData.date}</h2>
      <h2>{employeeData.address}</h2>
    </div>
  );
};
export default EmployeeDetails;

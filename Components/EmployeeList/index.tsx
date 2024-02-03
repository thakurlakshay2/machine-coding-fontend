import React, { useState } from "react";
import { EmployeeListProps } from "./typings";

const EmployeeList: React.FC<EmployeeListProps> = ({
  employeeList,
  selectedEmployee,
  deleteEmployee,
}) => {
  const [selectedEmloyee, setSelectedEmployee] = useState<string>("");

  return (
    <div>
      <p className="mb-5 text-2xl">Employee LIST</p>
      <div>
        {employeeList.map((employeeData) => {
          return (
            <div
              className={`flex justify-between rounded-xl w-full	 m-5 hover:bg-teal-400 p-2	cursor-pointer ${
                selectedEmloyee == employeeData.firstName
                  ? "bg-teal-400"
                  : "bg-teal-200"
              }`}
            >
              <p
                onClick={() => {
                  selectedEmployee(employeeData);
                  setSelectedEmployee(employeeData.firstName);
                }}
                key={employeeData.firstName}
              >
                {employeeData.firstName}
              </p>
              <div
                onClick={() => {
                  deleteEmployee(employeeData.firstName);
                }}
                className="hover:text-amber-800"
              >
                delete
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmployeeList;

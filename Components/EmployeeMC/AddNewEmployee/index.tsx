import React from "react";
import { AddNewEmpoyeeProps, NewEmployeeData } from "./typings";

const AddNewEmployee: React.FC<AddNewEmpoyeeProps> = ({
  addNewEmployee,
  closeModal,
}) => {
  return (
    <div className="grid">
      <form
        onSubmit={(event: any) => {
          event.preventDefault();
          console.log(event.target);
          const data: NewEmployeeData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            contact: event.target.contact.value,
            email: event.target.email.value,
            salary: event.target.salary.value,
            address: event.target.address.value,
            date: event.target.date.value,
          };
          addNewEmployee(data);
          closeModal();
        }}
      >
        <h2>Add a new Employee</h2>
        <div className="m-2">
          <input
            className="grid-cols-2 m-2"
            placeholder="First Name "
            name="firstName"
            required
          />
          <input
            className="grid-cols-2"
            placeholder="Last Name "
            name="lastName"
            required
          />
        </div>
        <input
          className="grid-cols-1 w-5/6"
          placeholder="Email "
          name="email"
          type="email"
          required
        />
        <div className="m-2">
          <input
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            className="grid-cols-2 m-2"
            placeholder="Contact"
            name="contact"
            type="tel"
            required
          />
          <input
            className="grid-cols-2"
            placeholder="Salary "
            name="salary"
            type="number"
            required
          />
        </div>
        <textarea
          className="grid-cols-1 m-2 w-5/6"
          placeholder="Address "
          name="address"
          required
        />
        <div>
          <input placeholder="mm/dd/yyyy " name="date" type="date" required />
        </div>
        <button
          className="bg-green-400 bg-opacity-50 hover:bg-green-600 mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewEmployee;

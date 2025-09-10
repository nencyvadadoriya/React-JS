import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function EmployeeForm() {
  const MySwal = withReactContent(Swal);
  const [Fname, setFname] = useState<string>("");
  const [Lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [error, setError] = useState<any>({});
  const [editedId, setEditedId] = useState<number>();
  const [AllEmployee, setAllEmploye] = useState<EmployeeObject[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("AllEmployee");
    if (data !== null) setAllEmploye(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("AllEmployee", JSON.stringify(AllEmployee));
  }, [AllEmployee]);

  const Alldepartment: string[] = ["HR", "IT", "Finance", "Marketing"];
  const AllHobbies = ["Blogging", "Photography", "Volunteering"];

  type EmployeeObject = {
    Fname: string;
    Lname: string;
    email: string;
    password: string;
    phone: string;
    gender: string;
    department: string;
    hobbies: string[];
  };

  const getAllHobbies = (event: any) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) setHobbies((hobby) => [...hobby, value]);
    else setHobbies((hobby) => hobby.filter((element) => element !== value));
  };

  const validation = () => {
    const newError: any = {};
    if (!Fname.trim()) newError.Fname = "First name is required";
    if (!Lname.trim()) newError.Lname = "Last name is required";
    if (!email.trim()) newError.email = "Email is required";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newError.email = "Email format is wrong";
    if (!phone.trim()) newError.phone = "Phone number is required";
    else if (!/^(?:\+?91[-\s]?|0)?[6-9]\d{9}$/.test(phone))
      newError.phone = "Phone number is wrong";
    if (!password.trim()) newError.password = "Password is required";
    if (!gender.trim()) newError.gender = "Gender is required";
    if (!department.trim() && department !== "select")
      newError.department = "Department is required";
    if (hobbies.length === 0) newError.hobbies = "At least one hobby required";

    setError(newError);
    return Object.keys(newError).length;
  };

  const employeSubmitForm = (event: any) => {
    event.preventDefault();
    if (validation() !== 0) return;

    const Employee: EmployeeObject = {
      Fname,
      Lname,
      email,
      password,
      phone,
      gender,
      department,
      hobbies,
    };

    if (editedId === undefined) {
      setAllEmploye((AllEmployee) => [...AllEmployee, Employee]);
      toast.success(`${Fname} added successfully..`);
    } else {
      const data = AllEmployee.map((employe, index) =>
        editedId === index ? Employee : employe
      );
      setAllEmploye(data);
      toast.success(`${Fname} updated successfully..`);
      setEditedId(undefined);
    }

    // Clear form
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setPhone("");
    setGender("");
    setDepartment("");
    setHobbies([]);
  };

  const deleteEmploye = (i: number) => {
    MySwal.fire({
      title: "Are you sure?",
      text: `Do you  want to delete ${AllEmployee[i].Fname}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const data = AllEmployee.filter((_, index) => index !== i);
        setAllEmploye(data);
        localStorage.setItem("AllEmployee", JSON.stringify(data));
        MySwal.fire({
          title: "Deleted!",
          text: `${AllEmployee[i].Fname} has been removed.`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const editEmploye = (i: number) => {
    setEditedId(i);
    const emp = AllEmployee[i];
    setFname(emp.Fname);
    setLname(emp.Lname);
    setEmail(emp.email);
    setPassword(emp.password);
    setPhone(emp.phone);
    setGender(emp.gender);
    setDepartment(emp.department);
    setHobbies(emp.hobbies);
  };

  return (
    <>
      {/* Form */}
      <div className="flex flex-col items-center justify-center p-6 min-h-screen">
        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
            {editedId === undefined
              ? "Employee Registration Form"
              : "Update Employee"}
          </h2>

          <form className="space-y-5" onSubmit={employeSubmitForm}>
            {/* First & Last Name */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-indigo-800 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={Fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="John"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${error.Fname
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-indigo-500"
                    }`}
                />
                {error.Fname && (
                  <p className="text-red-600 text-xs pt-1">{error.Fname}</p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-indigo-800 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={Lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Doe"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${error.Lname
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-indigo-500"
                    }`}
                />
                {error.Lname && (
                  <p className="text-red-600 text-xs pt-1">{error.Lname}</p>
                )}
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-indigo-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${error.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-indigo-500"
                    }`}
                />
                {error.email && (
                  <p className="text-red-600 text-xs pt-1">{error.email}</p>
                )}
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-indigo-800 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 1234567890"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${error.phone
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-indigo-500"
                    }`}
                />
                {error.phone && (
                  <p className="text-red-600 text-xs pt-1">{error.phone}</p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-indigo-800 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${error.password
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-indigo-500"
                  }`}
              />
              {error.password && (
                <p className="text-red-600 text-xs pt-1">{error.password}</p>
              )}
            </div>

            {/* Gender & Department */}
            <div className="flex gap-6">
              {/* Gender */}
              <div className="flex-1 flex flex-col">
                <label className="block text-sm font-medium text-indigo-800 mb-1">
                  Gender
                </label>
                <div className="flex items-center gap-4">
                  {["Male", "Female"].map((g) => (
                    <label key={g} className="flex items-center gap-1">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={(e) => setGender(e.target.value)}
                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-indigo-400"
                      />
                      {g}
                    </label>
                  ))}
                </div>
                {error.gender && (
                  <p className="text-red-600 text-xs pt-1">{error.gender}</p>
                )}
              </div>

              {/* Department */}
              <div className="flex-1 flex flex-col">
                <label className="block text-sm font-medium text-indigo-800 mb-1">
                  Department
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 ${error.department
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-indigo-500"
                    }`}
                >
                  <option>Select Department</option>
                  {Alldepartment.map((dep, idx) => (
                    <option key={idx}>{dep}</option>
                  ))}
                </select>
                {error.department && (
                  <p className="text-red-600 text-xs pt-1">{error.department}</p>
                )}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <label className="block text-sm font-medium text-indigo-800 mb-1">
                Hobbies
              </label>
              <div className="flex gap-6">
                {AllHobbies.map((hob, idx) => (
                  <label key={idx} className="flex items-center gap-1">
                    <input
                      type="checkbox"
                      value={hob}
                      checked={hobbies.includes(hob)}
                      onChange={getAllHobbies}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-2 focus:ring-indigo-400"
                    />
                    {hob}
                  </label>
                ))}
              </div>
              {error.hobbies && (
                <p className="text-red-600 text-xs pt-1">{error.hobbies}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full py-3 text-white rounded-lg shadow-md font-medium transition ${editedId === undefined
                ? "bg-indigo-700 hover:bg-indigo-600"
                : "bg-purple-600 hover:bg-purple-500"
                }`}
            >
              {editedId === undefined ? "Add Employee" : "Update Employee"}
            </button>
          </form>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto mt-16 mb-16 overflow-x-auto shadow-xl rounded-2xl border border-indigo-100">
        <table className="min-w-[1000px] w-full text-sm text-gray-700 border-collapse">
          {/* Table Header */}
          <thead className="bg-indigo-100 text-indigo-800">
            <tr>
              <th className="px-6 py-4 text-center font-semibold">No</th>
              <th className="px-6 py-4 text-center font-semibold">First Name</th>
              <th className="px-6 py-4 text-center font-semibold">Last Name</th>
              <th className="px-6 py-4 text-center font-semibold">Email</th>
              <th className="px-6 py-4 text-center font-semibold">Password</th>
              <th className="px-6 py-4 text-center font-semibold">Phone</th>
              <th className="px-6 py-4 text-center font-semibold">Hobbies</th>
              <th className="px-6 py-4 text-center font-semibold">Gender</th>
              <th className="px-6 py-4 text-center font-semibold">Department</th>
              <th className="px-6 py-4 text-center font-semibold">Action</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-indigo-100">
            {AllEmployee.length === 0 ? (
              <tr>
                <td
                  colSpan={10}
                  className="px-6 py-12 text-center text-gray-500 italic"
                >
                  No employee added yet
                </td>
              </tr>
            ) : (
              AllEmployee.map((employee, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-indigo-50"
                  }`}
                >
                  <td className="px-6 py-4 text-center font-medium">{index + 1}</td>
                  <td className="px-6 py-4 text-center">{employee.Fname}</td>
                  <td className="px-6 py-4 text-center">{employee.Lname}</td>
                  <td className="px-6 py-4 text-center">{employee.email}</td>
                  <td className="px-6 py-4 text-center">{employee.password}</td>
                  <td className="px-6 py-4 text-center">{employee.phone}</td>
                  <td className="px-6 py-4 text-center">
                    {employee.hobbies.join(", ")}
                  </td>
                  <td className="px-6 py-4 text-center">{employee.gender}</td>
                  <td className="px-6 py-4 text-center">{employee.department}</td>
                  <td className="px-6 py-4 text-center flex justify-center gap-3">
                    {/* Edit Button */}
                    <button
                      onClick={() => editEmploye(index)}
                      className="px-4 py-2 text-sm font-medium text-white rounded-lg shadow-sm bg-indigo-500 hover:bg-indigo-600 transition">
                      Edit
                    </button>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteEmploye(index)}
                      className="px-4 py-2 text-sm font-medium text-white rounded-lg shadow-sm bg-red-500 hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
}

export default EmployeeForm;

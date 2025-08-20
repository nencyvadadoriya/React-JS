import { useState } from "react";

function EmployeeForm() {


  const [Fname, setFname] = useState<string>("");
  const [Lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const Alldepartment: string[] = [
    "HR", "IT", "Finance", "Marketing"
  ]

  const getAllHobbies = (event: any) => {
    const value = event.target.value;
    const checked = event.target.checked;
    // console.log(value);
    if (checked) {
      setHobbies(hobby => [...hobby, value])
    } else {
      setHobbies(hobby => hobby.filter(element => element !== value))
    }

    hobbies.push(value)
    setHobbies(hobbies)
  }

  const employeSubmitForm = (event: any) => {
    event.preventDefault();
    console.log("First Name:", Fname);
    console.log("Last Name:", Lname);
    console.log("email:", email);
    console.log("password:", password);
    console.log("phone number:", phone);
    console.log("gender:", gender);
    console.log("department:", department);
    console.log("hobby:", hobbies);

    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    setPhone("");
    setGender("");
    setDepartment("");
    setHobbies([]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Employee Registration</h2>

        <form className="space-y-5" onSubmit={employeSubmitForm}>
          {/* First Name */}
          <div>
            <label htmlFor="fname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
            <input type="text" id="fname" value={Fname} onChange={event => setFname(event.target.value)} autoComplete="off" name="fname" placeholder="John" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
            <input type="text" id="lname" value={Lname} onChange={event => setLname(event.target.value)} autoComplete="off"
              name="lname" placeholder="Doe" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} autoComplete="off" name="email" placeholder="name@company.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} autoComplete="off"
              name="password" placeholder="••••••••" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
            <input type="text" id="phone" name="phone" value={phone} onChange={event => setPhone(event.target.value)} autoComplete="off"
              placeholder="+91 890-3456-456" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Gender</label>
            <div className="flex items-center mb-4">
              <input type="radio" name="gender" value="Male" onChange={event => setGender(event.target.value)} checked={gender === 'Male'} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="gender-male" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                Male
              </label>

              <input type="radio" name="gender" value="Female" onChange={event => setGender(event.target.value)} checked={gender === 'Female'} className="ml-4 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="gender-female" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Female
              </label>
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <fieldset>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Hobby</label>
              <div className="flex items-center mb-4">
                <input id="checkbox-1" type="checkbox" value="Blogging" onChange={getAllHobbies} checked={hobbies.includes("Reading")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blogging</label>

                <input id="checkbox-2" type="checkbox" value="Photography" onChange={getAllHobbies} checked={hobbies.includes("Photography")} className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Photography</label>

                <input id="checkbox-3" type="checkbox" value="Blogging" onChange={getAllHobbies} checked={hobbies.includes("Volunteering")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="checkbox-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Volunteering</label>

              </div>
            </fieldset>

          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
            <select value={department} id="department" onChange={event => setDepartment(event.target.value)} name="department" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <option>Select department</option>
              {Alldepartment.map((e, index) => <option key={index}>{e}</option>)}
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium shadow-md transition">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EmployeeForm;

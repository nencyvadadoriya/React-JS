import { useState } from "react";

function EmployeeForm(props: any) {


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

    console.log(value);
    console.log(checked);


    if (checked) {
      setHobbies(hobby => [...hobby, value])
    } else {
      setHobbies(hobby => hobby.filter(element => element !== value))
    }
  }

  const AllHobbies = ["Blogging", "Photography", "Volunteering"]

  type EmployeeObject = {
    Fname: string,
    lname: string,
    email: string
    password: string
    phone: string
    gender: string
    department: string
    hobbies: string[]

  }


  const employeSubmitForm = (event: any) => {
    event.preventDefault();
    const AllEmployee: EmployeeObject = {
      Fname: Fname,
      lname: Lname,
      email: email,
      password: password,
      phone: phone,
      gender: gender,
      department: department,
      hobbies: hobbies
    }
    console.log(AllEmployee);
      alert("Form submitted successfully!");

    // localStorage.setItem("username" , "Fname");
    // localStorage.setItem("username" , "nency");

    props.setShowForm(!props.showForm);

    // Clear All Field after form submit
    // setFname("");
    // setLname("");
    // setEmail("");
    // setPassword("");
    // setPhone("");
    // setGender("");
    // setDepartment("");
    // setHobbies([]);
  };

  if (props.showForm) {
    return (
      <div className=" flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Employee Registration</h2>

          <form className="space-y-5" onSubmit={employeSubmitForm}>
            {/* First Name */}
            <div>
              <label htmlFor="fname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
              <input type="text" required id="fname" value={Fname} onChange={event => setFname(event.target.value)} autoComplete="off" name="fname" placeholder="John" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lname" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
              <input type="text" required id="lname" value={Lname} onChange={event => setLname(event.target.value)} autoComplete="off"
                name="lname" placeholder="Doe" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" required id="email" value={email} onChange={event => setEmail(event.target.value)} autoComplete="off" name="email" placeholder="name@company.com" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input type="password" required id="password" value={password} onChange={event => setPassword(event.target.value)} autoComplete="off"
                name="password" placeholder="••••••••" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>

            {/* phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
              <input type="text" required id="phone" name="phone" value={phone} onChange={event => setPhone(event.target.value)} autoComplete="off"
                placeholder="+91 890-3456-456" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Gender</label>
              <div className="flex items-center mb-4">
                <input type="radio" required name="gender" value="Male" onChange={event => setGender(event.target.value)} checked={gender === 'Male'} className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="gender-male" className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                  Male
                </label>

                <input type="radio" required name="gender" value="Female" onChange={event => setGender(event.target.value)} checked={gender === 'Female'} className="ml-4 w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="gender-female" className="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Female
                </label>
              </div>
            </div>
            {/* Hobbies */}
            <div>
              <fieldset>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Hobby
                </label>
                <div className="flex items-center space-x-6">
                  {AllHobbies.map((data, index) => (
                    <div key={index} className="flex items-center">
                      <input type="checkbox" value={data} onChange={getAllHobbies} checked={hobbies.includes(data)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                      <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> {data}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>


            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
              <select value={department} required  id="department" onChange={event => setDepartment(event.target.value)} name="department" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <option>Select department</option>
                {Alldepartment.map((e, index) => <option key={index}>{e}</option>)}
              </select>
            </div>

            {/* Submit */}
            <button type="submit" className="w-full py-3 text-white bg-indigo-800 hover:bg-indigo-700 rounded-lg font-medium shadow-md transition">Submit</button>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-8">
        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200">
          <table className="w-full text-sm text-left text-gray-600">

            {/* Table Header */}
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-900 text-white text-xs uppercase">
              <tr>
                <th scope="col" className="px-6 py-4 tracking-wider">First Name</th>
                <th scope="col" className="px-6 py-4 tracking-wider">Last Name</th>
                <th scope="col" className="px-6 py-4 tracking-wider">Email</th>
                <th scope="col" className="px-6 py-4 tracking-wider">Password</th>
                <th scope="col" className="px-6 py-4 tracking-wider">Phone</th>
                <th scope="col" className="px-6 py-4 tracking-wider">Gender</th>
                <th scope="col" className="px-6 py-4 tracking-wider">Department</th>
                <th scope="col" className="px-6 py-4 tracking-wider">Hobby</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-semibold text-gray-900">John</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Deo</td>
                <td className="px-6 py-4 font-semibold text-gray-900">john@gmail.com</td>
                <td className="px-6 py-4 font-semibold text-gray-900">******</td>
                <td className="px-6 py-4 font-semibold text-gray-900">487589115</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Male</td>
                <td className="px-6 py-4 font-semibold text-gray-900">IT</td>
                <td className="px-6 py-4 font-semibold text-gray-900">Photography</td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-semibold text-gray-900">{Fname}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{Lname}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{email}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{password}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{phone}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{gender}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{department}</td>
                <td className="px-6 py-4 font-semibold text-gray-900">{hobbies.join(" | ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

export default EmployeeForm;

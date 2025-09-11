// import { useEffect } from "react"
import useUserGithubFetch from "./Hooks/useUserGithubFetch"
import loader from './assets/loader-symbol.gif'
export default function App() {
  // useEffect(()=>{
  //   fetch("https://api.github.com/users").then(res=>{
  //    res.json().then(data =>{
  //     console.log(data);
  //    })

  //   })
  // },[])
  const {gitHubUsers, error, loading}= useUserGithubFetch("https://api.github.com/users")
  console.log(gitHubUsers);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white">
        <img src={loader} alt="Loading..." className="w-16 h-16 animate-spin" />
      </div>
    );
  }
if (error) {
  return <p>Error: error.message</p>;
}

  return (
    <>
      <h1 className="text-3xl font-bold text-center">Github Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        { gitHubUsers.map ((user) => (
          <div key={user.login} className="w-full bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center p-6">
              {/* Avatar */}
              <img
                className="w-24 h-24 mb-4 rounded-full shadow-md ring-4 ring-blue-100 dark:ring-blue-900"
                src={user.avatar_url}
                alt={user.login}
              />

              {/* Username */}
              <h5 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                {user.login}
              </h5>

              {/* Type */}
              <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                {user.type}
              </span>

              {/* Buttons */}
              <div className="flex gap-3 mt-5">
                <a
                  href={user.html_url}
                  target="_blank"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  View Profile
                </a>
                <button
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 hover:text-blue-600 focus:ring-4 focus:ring-gray-200 transition-all dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800"
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )

}

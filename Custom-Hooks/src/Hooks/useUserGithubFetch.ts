import {  useEffect, useState } from "react";
type gitHubUsersType ={
  id:number,
  login : string,
  avatar_url : string,
  type : string,
  html_url :string,

}
  // interface se bananya 
// interface gitHubUsersType {
//   id:number,
//   login : string,
//   avatar_url : string,
//   type : string,
//   html_url :string,

// }
export default function useUserGithubFetch(url : string) {
    const [gitHubUsers , setGithubUsers] = useState<gitHubUsersType[]>([])
    const[error , setError] = useState<Error | null>(null);
    const[loading, setLoding] = useState<boolean>(true)
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setGithubUsers(data))
        .catch(error => setError(error))
        .finally(()=>setLoding(false))
    },[url])
    return {gitHubUsers , error , loading} ;
}

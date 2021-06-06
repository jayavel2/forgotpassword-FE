import React, { useState } from 'react';

let UserContext = React.createContext();

export default UserContext;


export const UserProvider = ({children})=>{

    let [userlist,setuserlist] = useState([])
    let[filedata,setfiledata]=useState([])
    return <UserContext.Provider value={{userlist,setuserlist,filedata,setfiledata}}>
        {children}
    </UserContext.Provider>
}
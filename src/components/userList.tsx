function UserList(userList:any) {
    return (
        <ul>
            {
                Object.values(userList.userList).map(((elem :any, index) => 
                    <li key={index}>{elem.name}</li> 
                ))
            }
        </ul>
        )
    }
    
    export default UserList
    
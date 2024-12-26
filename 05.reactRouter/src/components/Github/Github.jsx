import React, {useEffect, useState} from "react";


function Github() {
    
    let [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://api.github.com/users/rajdeep0510')
        .then((res) => {res.json()})
        .then((data) => {
            console.log(data);
            
            setData(data)})
        .catch((error) => console.error(error) )
    }, [])
    return (
        <div className="text-center text-white text-3xl bg-gray-600 p-4 m-4">
            Github Followers : {data?.following || 0}
        </div>
    )
}

export default Github;
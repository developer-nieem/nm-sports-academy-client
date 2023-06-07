import { useEffect, useState } from "react";
import ClassItem from "./ClassItem";

const Classes = () => {
    const [classes , setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/classes')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClasses(data)
        })
    }, [])

    return (
        <div className="p-10 ">
            <h2 className="text-4xl text-center font-bold mb-8">Popular Classes</h2>
           <div className="grid md:grid-cols-3 gap-5 ">
           {
                classes.map(classItem => <ClassItem classItem={classItem} key={classItem._id}></ClassItem>)
            }
           </div>
        </div>
    );
};

export default Classes;
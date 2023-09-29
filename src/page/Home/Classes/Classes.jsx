import { useEffect, useState } from "react";
import ClassItem from "./ClassItem";
import {  Fade } from "react-awesome-reveal";
const Classes = () => {
    const [classes , setClasses] = useState([])

    useEffect(() => {
        fetch('https://assignment12-server-developer-nieem.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClasses(data)
        })
    }, [])

    return (
        <div className="p-10 bg-[#EDF5EF]">
            
            
            <h2 className="text-4xl text-center font-bold my-16"> <Fade delay={100} cascade damping={1e-1}>Popular Classes </Fade> </h2>
     
            
           <div className="grid md:grid-cols-3 gap-5 ">
           {
                classes.map(classItem => <ClassItem classItem={classItem} key={classItem._id}></ClassItem>)
            }
           </div>
        </div>
    );
};

export default Classes;
import { useEffect, useState } from "react";
import InstructorsItem from "./InstructorsItem";

const Instructors = () => {

    const [instructors , setInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/instructors')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setInstructors(data)
        })
    }, [])

    return (
        <div className="p-10">
            <h2 className="text-4xl text-center font-bold my-20">Popular Instructors </h2>
           <div className="grid md:grid-cols-3 gap-5 ">
           {
                instructors.map(instructorItem => <InstructorsItem instructorItem={instructorItem} key={instructorItem._id}></InstructorsItem>)
            }
           </div>
        </div>
    );
};

export default Instructors;
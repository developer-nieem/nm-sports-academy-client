import { useEffect, useState } from "react";
import InstructorsItem from "./InstructorsItem";
import { Fade } from "react-awesome-reveal";

const Instructors = () => {

    const [instructors , setInstructors] = useState([])

    useEffect(() => {
        fetch('https://assignment12-server-developer-nieem.vercel.app/popular-instructor')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setInstructors(data)
        })
    }, [])

    return (
        <div className="p-10 pb-14 bg-[#EDF5EF]">
            <h2 className="text-4xl text-center font-bold my-20"> <Fade delay={100} cascade damping={1e-1}>Popular Instructors</Fade>  </h2>
           <div className="grid md:grid-cols-3 gap-5 ">
           {
                instructors.map(instructorItem => <InstructorsItem instructorItem={instructorItem} key={instructorItem._id}></InstructorsItem>)
            }
           </div>
        </div>
    );
};

export default Instructors;
import { useEffect, useState } from "react";
import Instructors from "../Home/Instructors/Instructors";

const InstructorsPage = () => {

    const [instructors , setInstructors] = useState([])

    useEffect(() => {
        fetch('https://assignment12-server-developer-nieem.vercel.app/all-instructor')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setInstructors(data)
        })
    }, [])

    return (
        <div className="px-10 py-16">
            <div className="grid md:grid-cols-3 gap-5 ">
           {
                instructors.map(instructorItem => <div key={instructorItem._id} className="card card-side bg-base-100 shadow-xl">
        
                <div className="h-32 w-28">
                <img className="h-32 w-28 rounded-md"
                  src={`${instructorItem?.image ? instructorItem?.image : 'https://www.shareicon.net/data/512x512/2016/07/26/802043_man_512x512.png'}`}
                  alt="name"
                />
                </div>
              
              <div className="card-body">
                <h2 className="card-title">{instructorItem?.name}</h2>
                <p>{instructorItem?.email}</p>
                
              </div>
            </div>)
            }
           </div>
        </div>
    );
};

export default InstructorsPage;
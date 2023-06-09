import { useEffect, useState } from "react";
import ClassesPageItem from "./ClassesPageItem";

const ClassesPage = () => {

    const [classes , setClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/approved-classes-page')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClasses(data)
        })
    }, [])

    return (
        <div className="p-10">
       
       <div className="grid md:grid-cols-3 gap-5 ">
       {
            classes.map(item=> <ClassesPageItem item={item} key={item._id}></ClassesPageItem>)
        }
       </div>
    </div>
    );
};

export default ClassesPage;
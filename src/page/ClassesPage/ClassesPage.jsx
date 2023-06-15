import { useEffect, useState } from "react";
import ClassesPageItem from "./ClassesPageItem";
import { Helmet } from "react-helmet";

const ClassesPage = () => {

    const [classes , setClasses] = useState([])

    useEffect(() => {
        fetch('https://assignment12-server-developer-nieem.vercel.app/approved-classes-page')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setClasses(data)
        })
    }, [])

    return (
        <div className="p-10">
       <Helmet>
        <title>Classes - Elevate Your Game with Expert Coaching and Training</title>
      </Helmet>
       <div className="grid md:grid-cols-3 gap-5 ">
       {
            classes.map(item=> <ClassesPageItem item={item} key={item._id}></ClassesPageItem>)
        }
       </div>
    </div>
    );
};

export default ClassesPage;
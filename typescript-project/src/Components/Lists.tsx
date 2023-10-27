import React from 'react';
import {useQuery} from "@apollo/client";
import {courseLists} from "../api/courseLists.query";
import {Link} from "react-router-dom"
import "./Lists.css"
const Lists: React.FC=()=>{
    // const [list, setList] = useState([])

    const { loading, error, data } = useQuery(courseLists);
       console.log(loading,error,data);
        if(loading) return( <div>Loading, Please wait...!</div>)
        if(error) return( <div>Something Went Wrong!</div>)

    return(
        <div className={"listContainer"}>
        <p className="course-head">Courses List</p>
        <div className="image-grid">
           <ul>
               {data?.courseListRead?.map((course:any) => (
                   <li key={course.index} className={"courseList"}>
                       <Link to="/course" style={{ textDecoration: 'none' }}><h3 className={"courseTitle"}>{course.title}</h3>
                       <img src={course.coverImage ? course.coverImage : "/Images/ImageUnavailable.png"}  className="image-item"/>
                       </Link>
                   </li>
               ))}
           </ul>
        </div>
        </div>
   )
}
export default Lists;

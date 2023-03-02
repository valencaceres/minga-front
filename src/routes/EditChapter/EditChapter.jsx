import React from "react"
import Navbar from "../../layouts/navbar/NavBar"
import "./editchapter.route.css"
import EditChaptersForm from "../../components/EditChaptersForm/EditChaptersForm"


const EditChapter = () => {
    

    return (
        <>

            <Navbar/>
            <div>
                <div className="container-form-editchapter">
                    <EditChaptersForm/>
                </div>
            </div>
        </>
    )
}


export default EditChapter
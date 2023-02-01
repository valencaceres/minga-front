import React, { useEffect, } from "react";
import "./adminpanel.css";
import NavBar from "../../layouts/navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import adminActions from "../../store/admin/actions";
import { useParams } from "react-router-dom";

export default function AdminPanel() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const { getActiveAuthors,getActiveCompanies,UpdateUserToCompany,
    UpdateUserToAuthor} = adminActions

    const token = localStorage.getItem("token");
    useEffect(() => {
      dispatch(getActiveCompanies(token));
      dispatch(getActiveAuthors(token));
    }, [])


  /*  dispatch(UpdateUserToCompany(id, token));
      dispatch(UpdateUserToAuthor(id, token)) */


    const adminAuthorStore = useSelector((state) => state);
    const adminCompanyStore = useSelector((state) => state);

  


  return (
    <main className="mainAdmin">
      <div className="nav">
        <NavBar />
      </div>
      <div className="bgmain">
        <div className="containH1P">
          <h1 className="h1Admin">Panel</h1>
          <p className="padmin">
            This is the administrator panel where you can manage authors and
            companies
          </p>
        </div>
      </div>
      <div className="container2">
        <div className="h2contain">
          <h3 className="h2Admin">Entites</h3>
        </div>
        <div className="tableContain">
          <table className="table">
            <tbody>
              <tr>
                <td colspan="2">Companies</td>
                <td colspan="2">Authors</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

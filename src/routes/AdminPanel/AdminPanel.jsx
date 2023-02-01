import React, { useEffect, useState } from "react";
import "./adminpanel.css";
import NavBar from "../../layouts/navbar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import adminActions from "../../store/admin/actions";
import { useParams } from "react-router-dom";

export default function AdminPanel() {
  const [rendertable, setRendertable] = useState(true);
  /* const [switcher, setSwitcher] = useState({checked: true}) */
  const [color, setColor] = useState({ backgroundColor: "#4338CA", color: "#F9F9FC" });
  const [color2, setColor2] = useState({ backgroundColor: "#F9F9FC", color: "#4338CA" });

  const dispatch = useDispatch();
  const { id } = useParams();
  const {getActiveAuthors,getActiveCompanies,UpdateUserToCompany,UpdateUserToAuthor,
  } = adminActions;

  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(getActiveCompanies(token));
    dispatch(getActiveAuthors(token));
  }, []);

  /*  dispatch(UpdateUserToCompany(id, token));
      dispatch(UpdateUserToAuthor(id, token)) */

  const adminAuthorStore = useSelector(
    (state) => state.adminAuthor.authors.response
  );
  console.log(adminAuthorStore);
  const adminCompanyStore = useSelector(
    (state) => state.adminCompany.companies.response
  );
  console.log(adminCompanyStore);

  const getCompanies = () => {
    adminCompanyStore?.map((card, index) => {
      return (
        <table>
          <tbody>
            <tr key={index}>
              <td>{card.name}</td>
              <td>{card.website}</td>
              <td>{card.logo}</td>
              <td>Boton</td>
            </tr>
          </tbody>
        </table>
      );
    });
  };

  const getAuthors = () => {
    adminAuthorStore?.map((card, index) => {
      return (
        <table>
          <tbody>
            <tr key={index}>
              <td>{card.name}</td>
              <td>{card.website}</td>
              <td>{card.logo}</td>
              <td>Boton</td>
            </tr>
          </tbody>
        </table>
      );
    });
  };

  const activeTable = (r) => {
    setRendertable(r);
    if(r){
      setColor(
      { backgroundColor: "#4338CA", color: "#F9F9FC" })
      setColor2({ backgroundColor: "#F9F9FC", color: "#4338CA" })
    }else{
      setColor({ backgroundColor: "#F9F9FC", color: "#4338CA" })
      setColor2({ backgroundColor: "#4338CA", color: "#F9F9FC" })
    }
  }
  const swtched = () => {

  }

  console.log(rendertable);
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
          <div className="divButton">
            <button style={color} className="butonCompany" onClick={() => activeTable(true)}>Companies</button>

            <button style={color2} className="butonAuthor" onClick={() => activeTable(false)}>Authors</button>
          </div>
          <div className="rendeer">
            <table className="table1">
            {rendertable
              ? adminCompanyStore?.map((card, index) => {
                
                  return (
                    <tr className="trr" key={index}>
                      <td className="tdLeft"><img className="iconitoC" src="/assets/iconito.png" alt="" />{card.name}</td>
                      <td>{card.website}</td>
                      <td>
                        <img
                          className="imglogocompani"
                          src={card.logo}
                          alt=""
                        />
                      </td>
                      <td>Boton</td>
                    </tr>
                  );
                })
              : adminAuthorStore?.map((card, index) => {
                  return (
                    <tr className="trr" key={index}>
                      <td className="tdLeft"><img className="iconitoA" src="/assets/iconitoA.png" alt="" />{card.name}</td>
                      <td>{new Date(card.createdAt).toLocaleDateString()}</td>
                      <td>{card.city}</td>
                      <td><img className="photoAutor" src={card.photo} alt=""/></td>
                      <td>
                        <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        </label>
                      </td>
                    </tr>
                  );
                })}
                </table>
          </div>
        </div>
      </div>
    </main>
  );
}

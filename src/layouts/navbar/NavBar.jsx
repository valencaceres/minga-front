import React, {useState} from "react"
import { Link as Anchor } from "react-router-dom"
import styles from './navbar.module.css'
import { useDispatch,useSelector } from 'react-redux'
import authActions from '../../store/auth/actions'
const { cerrar_sesion } = authActions

const Navbar = () => {
    let { token,is_online } = useSelector(store => store.auth)
    let dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => setIsOpen(!isOpen)
    const signout = async(event)  => await dispatch(cerrar_sesion(token))
    let userStore=useSelector((store)=>store.auth);
    
    return(
        <div className={styles.navbar}>
            <div className= {`${styles.navItems} ${isOpen && styles.open}`}>
                <div className={styles.links}>
                    {
                        userStore.is_author||userStore.is_company?(
                            <>
                                <Anchor className={styles.eachlink} to={"/"}> HOME</Anchor>
                                <Anchor className={styles.eachlink} to={"/comics"}> COMICS</Anchor>
                                <Anchor className={styles.eachlink} to={"/new-comic"}> NEW COMIC</Anchor>
                                <Anchor className={styles.eachlink} to={"/edit-chapters"}>EDIT CHAPTER</Anchor>
                                <Anchor className={styles.eachlink} to={"/comics/me"}>MY COMICS</Anchor>
                                <Anchor className={styles.eachlink} to={"/edit-profile"}> PROFILE</Anchor>
                            </>
                        ):(
                            <>
                                <Anchor className={styles.eachlink} to={"/"}> HOME</Anchor>
                                <Anchor className={styles.eachlink} to={"/comics"}> COMICS</Anchor>
                            </>
                        )    
                    }
                    {is_online ? (
                        <span className={styles.eachlink} onClick={signout}>SIGN OUT</span>
                    ) : (
                        <>
                            <Anchor className={styles.eachlink} to={"/signup"}> SIGN UP</Anchor>
                            <Anchor className={styles.eachlink} to={"/signin"}> SIGN IN</Anchor>
                        </>
                    )}
                </div>
                <div className={`${styles.cerrar} ${isOpen && styles.close}`} onClick={handleMenu}>
                    <img className={styles.equis} src="../assets/cerrar.png" alt="" />
                </div>
            </div>
            <div className={`${styles.nav_toggle} ${isOpen && styles.open}`} onClick={handleMenu} >
                <div imgMobile>
                    <img className={styles.imgnav} src="../assets/menu.png" alt="" />
                </div>
            </div>
            <div className={styles.nav_logo}>
                <img className={styles.imgnav} src="../assets/Logom.jpg" alt="" />
            </div>
        </div>
  )
}

export default Navbar
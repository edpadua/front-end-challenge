import {Link} from  'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../logo-apiki-blog.png';

function Navbar(){
    return(
  <header className={styles.nav_header}>
        <div class={styles.container_nav}>
            <div className={styles.logo}>
               <img src={logo}/>
            </div>
            <ul className={styles.list}>
              <li className={styles.item}>
               <Link to="/">Home</Link>
              </li>
              <li className={styles.item}>
                 <Link to="/categorias">Categorias</Link>
              </li>
              <li className={styles.item}>
                 <Link to="/contato">Contato</Link>
              </li>
           </ul>
       
     </div>

</header>
    )
}

export default Navbar
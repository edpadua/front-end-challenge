import Postlist from "../components/Postlist"
import Postlists from "../components/Postlists"
import Post from "../components/Post"
import Navbar from "../components/Navbar"

function Inicio(){
    return(
        <>
         
           
            <div className="container">
               <Postlists/>
               {/*<Post slug='metodologia-bpm-para-melhoraria-de-processos' />*/}
            </div>
        </>
    )
}

export default Inicio
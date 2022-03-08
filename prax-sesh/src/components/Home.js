import React from 'react';
import {Link} from 'react-router-dom';


function Home() {

    return(
        <div>
                       <nav>
             <Link to='/' id="sasd">           HOME           </Link>
             <Link to='/Skills' id="asd">      SKILLS         </Link>
             <Link to='/Experience' id="asd">  EXPERIENCE     </Link>
             <Link to='/About' id="asd">       ABOUT          </Link>
            </nav>
            <p> I am Home!</p> 
        </div>
    )
} 
export default Home;
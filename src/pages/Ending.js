import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function End(){
    return(
            <div id="body">
                <div id="restart-section">
                    <h1>Thank you for taking this quiz.<br></br>
                    You can always restart for better scores.</h1>
                    <Link to='/'><Button variant="outline-light">Restart</Button></Link>
                </div>
            </div>
    )
}
 export default End;
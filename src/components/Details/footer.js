import React from 'react';
import {ButtonGroup,Button} from 'react-bootstrap' 
import './footer.css'
class Footer extends React.Component{
    state={
        StateArray:["Ahmedabad","Bangalore","Chennai","Chandigarh","Delhi","Kolkata","Gurgoan","Hyderabad","Jaipur","Kochi","Kolkata","Lucknow","Mumbai","Pune","all cities..."]
     }
    render(){
        return(
        <div className="footer">
            <div className="leftFooter">
                <Button variant="outline-info" size="sm"> About Us</Button>{' '}
                <Button variant="outline-info" size="sm">Careers</Button>{' '}
                <Button variant="outline-info" size="sm">Contact Us</Button>{' '}
                <Button variant="outline-info" size="sm">Quikr Videos</Button>{' '}
                <Button variant="outline-info" size="sm">Advertise With Us</Button>{' '}
                <Button variant="outline-info" size="sm">Blog</Button>{' '}
                <Button variant="outline-info" size="sm">Help</Button>{' '}
                <div className="para">
                    <p>Widely known as India’s no. 1 online classifieds platform, Quikr is all about you. Our aim is to empower every person in the country to independently connect with buyers and sellers online. We care about you — and the transactions that bring you closer to your dreams. Want to buy your first car? We’re here for you. Want to sell commercial property to buy your dream home? We’re here for you. Whatever job you’ve got, we promise to get it done.</p>
                </div>
            </div>
            <div className="rightFooter">
                {this.state.StateArray.map((city, index)=>{
                    return <a key = {index} href={`#${city}`}>{city}</a> 
                })}
            </div>
            
          

        </div>)
    }
}
export default Footer
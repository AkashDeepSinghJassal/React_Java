import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Card from '../../components/Card'
import Footer from '../../components/Details/footer'
import Navbar from '../../components/navbar/navbarHead'
import './style.css'
import { useQuery, gql} from "@apollo/client";
const get_data=gql`
    query getSearch{
        infoSearch{
            id 
            price
            title
            location
            verified 
            imageurl
        }
    }
`;
//import util from '../../test'
function Index(props){
    const {loading,error,data}=useQuery(get_data);
    // if(loading)console.log("loading");
    // if(error)console.log(error.message);
    //if(!loading)console.log(data.infoSearch.imageurl);
        if(!loading)
        return (
            <div>
                <Navbar></Navbar>
                <div className="breadcrumb-wrapper">
                    <Breadcrumb>
                        <Breadcrumb.Item >Home</Breadcrumb.Item>
                        <Breadcrumb.Item >Bazzar</Breadcrumb.Item>
                        <Breadcrumb.Item active={true} >{"Electronics"}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className="center-body">
                    <div className="search-result">
                        <p>
                        Search Results : Total {"4"} results found
                        </p>
                    </div>

                    <div className="product-grid">
                        {
                            // console.log(data);
                          data.infoSearch.map((product,index) => {
                                return <Card
                                    key={index}
                                    prodName={product.title}
                                    prodPrice={product.price}
                                    imgSrc={product.imageurl}
                                    prodId={product.id}
                                />
                            })
                        }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
        else return null;
 
}
export default Index;
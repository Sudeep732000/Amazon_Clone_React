/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Product from './Product';
import  { db } from './firebase';
function Home() {
    const [products, setProducts] = useState([])

    const getProducts = () =>{
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = []
            tempProducts = snapshot.docs.map((doc) => ({
                id: doc.id,
                product: doc.data()
            }));
            setProducts(tempProducts);
        })
    }
    useEffect(() => {
        getProducts();
    }, [])
    
    return (
         
        <Container>
            <Banner />
            <Content>
                {
                    products.map((data)=>(
                        <Product 
                            title = {data.product.title}
                            price = {data.product.price}
                            rating = {data.product.rating}
                            image = {data.product.image}
                            id = {data.id}
                        />
                    ))
                }
            </Content>
            <Content1>
                <Product 
                    title = "Dell Alienware 25 inch (63.5cm) Full HD Gaming Monitor with HDMI and DP Ports, IPS Panel, 240Hz, 1ms, AMD Free Sync, Tilt, Swivel, Height-Adjustable- AW2518Hf (Black)"
                    price = {39990}
                    rating = "In Stock"
                    image = "https://i.dell.com/images/global/products/alienware-accessories/alienware-accessories-highlights/alienware-25-gaming-monitor-aw2518hf-hero.jpg"
                />
                <Product 
                    title = "Mi Power Bank 3i 20000mAh (Sandstone Black) Triple Output and Dual Input Port | 18W Fast Charging | Power Delivery | Advanced 12 Layer chip protection"
                    price = {2500}
                    rating = "In Stock"
                    image = "https://images-na.ssl-images-amazon.com/images/I/71lVwl3q-kL._SL1500_.jpg"
                />
                <Product 
                    title = "Dell XPS 13 (9310), 13.4- inch FHD+ Touch Laptop - Intel Core i7-1185G7, 16GBRAM, 512GB SSD, Iris Xe Graphics, Windows 10 Pro-Platinum Silver with Black Palmrest"
                    price = {149990}
                    rating = "In Stock"
                    image = "https://asiatech.com.mm/wp-content/uploads/2020/11/9310.png"
                />
            </Content1>
        </Container>
    )
}

// Banner Background IMage suggestion
//https://i.imgur.com/SYHeuYM.jpg
export default Home

const Container = styled.div`
    max-width:1400px;
    margin: 0 auto;
` 
const Banner = styled.div`
    background-image:url('https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5676._CB404165680_.jpg');                            
    min-height: 600px;
    background-size:cover;
    background-position: center;
    opacity:1;
    z-index:1;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`
const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    z-index:100;
    display:flex;
`
const Content1 = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -10px;
    z-index:100;
    display:flex;
`

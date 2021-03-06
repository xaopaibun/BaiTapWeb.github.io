import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  getsanphamtheoloai } from '../../../services';
import Footer from "../Footer";
import MenuCoffeeHouse from "../Menu";
import ProductItem from '../TrangChu.js/ProductItem';
const SanPhamTheoLoai = () => {
    const [dulieu, setdulieu] = useState([]);
    const { _id } = useParams();
    React.useEffect(() => {
        getsanphamtheoloai(_id).then(function (response) {
            setdulieu(response.data[0]);
        }).catch(function (error) {
            console.log(error);
        })
    }, [_id]);
   
    return (
        <div>
            <div className="headertop">
                <MenuCoffeeHouse />
            </div>
            <div style={{ height: '50px' }} />
            <h2 class="The_h2 text-center">{dulieu?.tenloai}</h2>
            <div class="tabs-content container">
                <div className="content-tab01">
                    {
                        dulieu?.ListProduct?.map((value, index) => <ProductItem key={value._id.toString()} value={value} />)
                    }
                </div>
            </div>
            <div style={{ height: '150px' }} />
            <Footer />
        </div>
    );
}
export default SanPhamTheoLoai;
import { useDispatch, useSelector } from "react-redux";

import React, { useState } from 'react';
import { FormatNumber, Url_Image } from "../../../config/Until";
// import ls  from "local-storage";
const ChiTietCoffee = () => {
    const dispatch = useDispatch();
    // const cart = useSelector(state => state.HomeReduce.cart)
    const [sl, setsl] = useState(1);
    const ItemCoffee = useSelector(state => state.HomeReduce.ItemCoffee)
    const addCart = async(ItemCoffee) =>{
        dispatch({type: 'addcart', item : {_id : ItemCoffee._id, TenCoffee : ItemCoffee.TenCoffee , images : ItemCoffee.images, gia :ItemCoffee.gia , soluong : sl }})
       dispatch({ type: "SumMoneyCart" })
   
    }

    const onTang = () =>{
        setsl(sl+1)
    }

    const onGiam = () =>{
        setsl(sl-1)
        sl > 2 ?  setsl(sl-1) : setsl(1)
    }
    // React.useEffect(() =>{
    //       ls.set('cart',cart);
    // }, [cart])
     return (
        <div>
            <div className="container">
                <div className="row">

                    <div className="col-xl-6" style={{margin: 'auto'}}>
                        <img src={ Url_Image +ItemCoffee?.images} width="90%" height="90%" alt=""/>
                    </div>
                    <div className="col-xl-6"  style={{margin: 'auto'}}>
                        <div className="title">
                            <h2 style={{ color: '#252525', fontSize: '28px', lineHeight: 'normal', margin: '0px', marginTop: '0px', marginBottom: '8px', fontWeight: 600 }}> {ItemCoffee?.TenCoffee} </h2>
                            <p style={{ fontSize: '28px', lineHeight: '28px', display: 'inline-block', color: '#e7b45a', fontWeight: 900 }}>{FormatNumber(ItemCoffee?.gia)} ₫ </p>
                        </div>
                        <div className="status">
                            <p>Thương Hiệu: <span style={{color: '#707070'}}> {ItemCoffee?.thuonghieu}</span> </p>
                        </div>
                      
                            <div className="block_chonsp">
                                <div className="left">
                                    <button type="button" className="btn botron" id="giam" onClick={()=>onGiam()}>-</button>
                                    <div className="botron text-center"><p>{sl}</p></div>
                                    <button type="button" className="btn botron" id="tang" onClick={()=>onTang()}>+</button>
                                </div>
                                <div className="right">
                                    <input type="submit" data-toggle="modal" data-target="#exampleModal" onClick ={() => addCart(ItemCoffee)} className="form-control btndathang" name id aria-describedby="helpId" placeholder value="Đặt Hàng" />
                                </div>
                            </div>
                        
                        <div className="thongtinsp">
                            <b>Thông tin:</b>
                            <p>{ItemCoffee?.thongtin} </p>
                        </div>
                    </div>
                    <div className="MoTaChiTietSanPham">
                        <h2 style={{ borderBottom: 'solid 1px #ebebeb', paddingBottom: '15px' }}>Mô tả sản phẩm | Đánh Gía </h2>
                        <p style={{ color: '#707070', fontStyle: '14px' }} >{ItemCoffee?.mota}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default ChiTietCoffee;
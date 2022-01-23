import React, { useEffect, useState } from "react";
import axios from "axios";
import CartMetal from "./CartMetal";
import CartGas from "./CartGas";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Cart(props) {
  const [cartArray, setcartArray] = useState([]);
  const [cartGases, setcartGases] = useState([]);
  let [cartItems, setcartItems] = useState([]);
  let [uniqeItems, setuniqeItems] = useState([]);
  let [uniqueMetals, setuniqueMetals] = useState([]);
  let [uniqueGases, setuniqueGases] = useState([]);
  const [token, setToken] = useState(props.token); // بيجيب التوكن من البروبز
  ////////////////////////////////////////////////
  // بيجيب الداتا من الكارت

  useEffect(async () => { 
    try {
      const result = await axios.get(  // ينجيب بيانات الميتل من ال الكارت 
        `https://metal-gases-api.herokuapp.com/like`,
        { headers: { authorization: "Bearer " + token } }
      );
      setcartArray(result.data);
      // setuniqueMetals(unique(result.data));
    } catch (error) {
      console.log(error);
    }
    if (token) {
      //للتاكيد
      setToken(token);
    }
  }, []);
  console.log(cartArray);
  useEffect(async () => {
    try {
      const response = await axios.get( // ينجيب بيانات الجاز من ال الكارت
        `https://metal-gases-api.herokuapp.com/likeGases`,
        { headers: { authorization: "Bearer " + token } }
      );
      setcartGases(response.data);
      // setuniqueGases(unique(response.data));
    } catch (error) {
      console.log(error);
    }
    if (token) {
      //للتاكيد
      setToken(token);
    }
  }, []);
  console.log(cartGases);
  /////////////////////////////////////////////////

  const getMetalData = async () => {
    let { data } = await axios.get(
      `https://metal-gases-api.herokuapp.com/like`,
      { headers: { authorization: "Bearer " + token } }
    );
    setcartArray(data);
  };
  const geGasData = async () => {
    let { data } = await axios.get(
      `https://metal-gases-api.herokuapp.com/likeGases`,
      { headers: { authorization: "Bearer " + token } }
    );
    setcartGases(data);
  };

  ////////////////////////////////////////////////
  
  console.log(cartArray);
  const unique = (items) => {  
    items.forEach((item) => {   // لوب علي الاراي تبع الكارت 
      let count = 1; // ينشأ عداد 
      items.forEach((x) => { //يعمل لوب علي نفس الاراي اللي احنا دخلناه في الي,ني
        if (item._id == x._id && items.indexOf(item) != items.indexOf(x)) { // يشوف اذا كان الاي دي حق الاراي الاول يساوي العنصر حق الاراي الثاني وف نفس الوقت الاندكس مختلف
          count++;
        }
      });
      let i = {   //ينشىء اوبجكت لبيانات العنصر الخاص ب الاراي الاول بعد مايخلص الاراي الثاني
        id: item._id,
        name: item.name,
        description: item.description,
        img: item.img_url,
        itemsCount: count,
        price: item.price,
      };
      cartItems.push(i);
    });

    // let bla = cartItems.reduce((map, obj) => map.set(obj.id, obj), new Map());
    // console.log(bla);
    uniqeItems = [   //  هينا يرجع اراي
      ...cartItems    //هينا يرجع اوبجكت اوف اوبجكت 
               // الماب الاولى تعمل لوب اما الثانيه مخزنه ترجع اوبجكت
        .reduce((map, obj) => map.set(obj.id, obj), new Map())  //اختصار العناصر المكررة عن طريق اضافتهم في اوبجكت ,الكي يمثله اوبجكت .اي دي,والقيمه تمثلها الاوبجك 
        .values(),  //ترجع القيم من الاوبجكت حق الكي
    ];
    setcartItems([]);
    setuniqeItems(uniqeItems);
    return uniqeItems;
  };

  
  useEffect(() => {
    setuniqueMetals(unique(cartArray));
  }, [cartArray]);   //  علشان اي تغير اسويه يجيب لي البيانات

  useEffect(() => {
    setuniqueGases(unique(cartGases));
  }, [cartGases]);

  return (
    <>
      <Navbar logOut={props.logOut} />
      <div className="vh-100">
        <div className="container py-5 ">
          <div className="row">
            {uniqueMetals?.map((item, index) => (
              <CartMetal
                key={item.id}
                item={item}
                token={token}
                getMetalData={getMetalData}
                geGasData={geGasData}
              />
            ))}
            {uniqueGases?.map((item, index) => (
              <CartGas
                key={item.id}
                item={item}
                token={token}
                getMetalData={getMetalData}
                geGasData={geGasData}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

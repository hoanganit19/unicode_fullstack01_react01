import React from "react";
import Member from "./Components/Props/Member";
import Avatar from "./Components/Props/Avatar";
import MemberInfo from "./Components/Props/MemberInfo";
import Button from "./Components/Props/Button";
import Products from "./Components/Props/Products";
import Counter from "./Components/Props/Counter";
import CurrencyConvert from "./Components/CurrencyConvert/CurrencyConvert";

export default function Main() {

  const member = {
    info: {
      name: "Hoàng An",
      email: "hoangan.web@gmail.com",
      shippingAddress: "Hà Nội",
      address: "Hà Nội 2"
    },
    avatar: {
      url: "https://picsum.photos/200",
      width: 150,
      alt: "Ảnh 01",
      isChecked: false
    },

    posts: [
      {
        id: 1,
        title: 'Bài 01',
        content: 'Nội dung 1'
      },

      {
        id: 2,
        title: 'Bài 02',
        content: 'Nội dung 2'
      },

      {
        id: 3,
        title: 'Bài 03',
        content: 'Nội dung 3'
      },

      {
        id: 4,
        title: 'Bài 04',
        content: 'Nội dung 4'
      }
    ]
  }

  const {info, avatar, posts} = member;

  const handleReceiveData = (data) => {
    console.log(data)
  }

  return (
    <>
    
      {/* <Member>
        <Avatar {...avatar}/>
        <MemberInfo {...info} posts={posts}/>
      </Member> */}
      {/* <Button onReceiveData={handleReceiveData}/> */}
      {/* <Products name="Sản phẩm 1" price={12000}/> */}
      {/* <Counter /> */}
      <CurrencyConvert />
    </>
  );
}

import { action,token } from '../../constant';
import img1 from '../../assets/images/pic1.jpg';
import img2 from '../../assets/images/pic2.jpg';
import img3 from '../../assets/images/pic3.jpg';
import img4 from '../../assets/images/pic4.jpg';
import img5 from '../../assets/images/pic5.jpg';
import img6 from '../../assets/images/pic6.jpg';
import img7 from '../../assets/images/pic7.jpg';

const list = [
  {
    title:'Python编程',
    img:img1,
    price:"￥58"
  },
  {
    title:'程序员的数学',
    img:img2,
    price:"￥50"
  },
  {
    title:'编译原理',
    img:img3,
    price:"￥40"
  },
  {
    title:'Javascript编程',
    img:img4,
    price:"￥51"
  },
  {
    title:'Java开发编程',
    img:img5,
    price:"￥65"
  },
  {
    title:'C++编程',
    img:img6,
    price:"￥80"
  },
  {
    title:'Java开发之美',
    img:img7,
    price:"￥30"
  }
]

export function listReducer(state={},action) {
  switch(action.type){
    default:
      return state;
  }
}
import './App.css';

function App() {



  return (

    <div className="Parentbox">
        <Fotoproduk/>
        <ProdukInfo isDiscount="yes" category="SPORT" title ="SEPATU LARANG" price="100000"/>

    </div>
  );
}

function Fotoproduk(){
  return (
    <div className="Foto">
      <img src="sepatu2.jpg" alt="" />
    </div>
  );
}


function CheckDiscount(props){
  const {isDiscount} = props;
  if (isDiscount == "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  }else if ( isDiscount == "comming"){
    return (
      <p>Akan ada diskon</p>
    );
  }else {
    return (
      <p>Belum Ada Discount</p>
    );
  }
}

function ProdukInfo({category,title,price,isDiscount}) {
  return (
        <div className="Deskripsi">
          <p className="Cate">{category}</p>
          <h1 className="Title"> {title}</h1>
          <p className="Price">IDR {price}</p>
          <CheckDiscount isDiscount={isDiscount} />
          <p className="Info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, fugit unde mollitia, molestias vel inventore a nam tempora corrupti dolores nobis obcaecati repudiandae sequi earum cupiditate blanditiis voluptatem alias deserunt totam dolorem sint sit? Cum beatae atque iusto quas? Dolores aspernatur quibusdam fuga laboriosam accusamus eaque harum libero, laudantium deleniti!
          </p>
          <a onClick={(e) => TambahCart(title,e)} href="#" >Add To Cart</a>
        </div>
  );
}


function TambahCart(e){
  console.log("Membeli "+e)
}

export default App;

import './App.css';

function App() {



  return (

    <div className="Parentbox">
        <Fotoproduk/>
        <ProdukInfo isDiscount="yes" category="SPORT" title ="SEPATU LARANG" price="100000"/>
        <Review/>
    </div>
  );
}

function dataReviews(){
  const users = [
    {
    "id":1,
    "name": Rizki,
    "review":"Kualitas bagus "
    },
    {
    "id":2,
    "name": Darmawan,
    "review":"Harga murah kualitas bukan kaleng-kaleng"
    },
    {
    "id":3,
    "name": Arin,
    "review":"Harga yang terjangkau barang bagus"
    }
];
}

function Review(){
  return (
    <div className="Review-box">
    <h2>Reviews</h2>
    <div className="Item">
      <img src="user.jpg" alt="" />
      <div className="User">
        <h3>Rizki Darms</h3>
        <p>Harga murah kualitas bukan kaleng-kaleng</p>
      </div>
    </div>
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
  const benefit= ["Tidak kusut terkena air","Bahan mulus","Bahan awet"];
  const listBenefits = benefit.map((itemBenefits)=>
    <li>{itemBenefits}</li>
  );
  return (
        <div className="Deskripsi">
          <p className="Cate">{category}</p>
          <h1 className="Title"> {title}</h1>
          <p className="Price">IDR {price}</p>
          <CheckDiscount isDiscount={isDiscount} />
          <p className="Info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, fugit unde mollitia, molestias vel inventore a nam tempora corrupti dolores nobis obcaecati repudiandae sequi earum cupiditate blanditiis voluptatem alias deserunt totam dolorem sint sit? Cum beatae atque iusto quas? Dolores aspernatur quibusdam fuga laboriosam accusamus eaque harum libero, laudantium deleniti!
          </p>
          <ul >
            {listBenefits}
          </ul>
          <a onClick={(e) => TambahCart(title,e)} href="#" >Add To Cart</a>
        </div>
  );
}


function TambahCart(e){
  console.log("Membeli "+e)
}

export default App;


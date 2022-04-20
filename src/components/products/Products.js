import {data} from "../../db/data.js";
// import data from "../../db/data.json";

// import cookie from "../../productImages/Assorted-cookies.jpg";

export default function Products(props) {
  console.log("data only", data);
  console.log("data", data[0].image_url);
  // console.log("cookie", cookie);

  let cakes = data.map(el => 
    <img src={el.image_url} alt={el.title} style={{ width: "100px" }} />
  )
  return (
    <>
      <h1>
        This is the Products Page
        {data[0].title}
      </h1>

      <div>
        <img src={data[0].image_url} alt={data[0].keyword} style={{ width: "100px" }} />
      </div>
      {/* <img src={cookie} alt={data[0].keyword} style={{ width: "600px" }} /> */}
      {/* <a href={data[0].image_url} target="_blank" >Image?</a> */}

      {cakes}

    </>
  );
}

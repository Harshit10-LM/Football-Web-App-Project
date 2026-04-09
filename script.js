const title = "Macbook Pro M1 - 2022";
const price = "$1100";
const rating = 4.9;


const newCard = document.createElement("div");
newCard.className = "card";
newCard.innerHTML = `
   <img src="https://cloud-computing-lectures-likhilesh-abcdxyz.s3.ap-south-1.amazonaws.com/likhi-laptop.jpg" />
   <div class="product-info">
       <h4> ${title} </h4>
       <p>Price: ${price} </p>
       <p>Rating: ${rating} ⭐️</p>
   </div>
`;


const root = document.getElementById("root");
root.appendChild(newCard);





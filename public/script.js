const API="http://localhost:5000/api/coins";

loadCoins();
let page = 1;

const limit = 5;

async function loadCoins(){

    const res = await fetch(

        API + `?page=${page}&limit=${limit}`

    );

    const data = await res.json();

    displayCoins(data.coins);

    document.getElementById("pageNo").innerHTML = page;

}
function nextPage(){

    page++;

    loadCoins();

}
function prevPage(){

    if(page>1){

        page--;

        loadCoins();

    }

}

function displayCoins(coins){

    let html="";

    if(coins.length===0){

        html="<h2>No Coins Found</h2>";

    }

    coins.forEach(c=>{

        html+=`

        <div class="card">

            <h2>${c.name}</h2>

            <p><b>Symbol:</b> ${c.symbol}</p>

            <p><b>Price:</b> ${c.price}</p>

            <p><b>Market Cap:</b> ${c.marketCap}</p>

            <p><b>Volume:</b> ${c.volume}</p>

            <p><b>Category:</b> ${c.category}</p>

            <button
                class="delete"
                onclick="deleteCoin('${c._id}')">

                Delete

            </button>

        </div>

        `;

    });

    document.getElementById("coins").innerHTML=html;

}

async function searchCoin(){

    const text=document.getElementById("search").value.trim();

    if(text===""){

        loadCoins();

        return;

    }

    const res=await fetch(API+"?search="+text);

    const data=await res.json();

    displayCoins(data.coins);

}

async function addCoin(){

    const coin={

        name:document.getElementById("name").value,

        symbol:document.getElementById("symbol").value,

        price:Number(document.getElementById("price").value),

        marketCap:Number(document.getElementById("marketCap").value),

        volume:Number(document.getElementById("volume").value),

        category:document.getElementById("category").value

    };

    await fetch(API,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(coin)

    });

    clearForm();

    loadCoins();

}

async function deleteCoin(id){

    if(!confirm("Delete this coin?")){

        return;

    }

    await fetch(API+"/"+id,{

        method:"DELETE"

    });

    loadCoins();

}

function clearForm(){

    document.getElementById("name").value="";

    document.getElementById("symbol").value="";

    document.getElementById("price").value="";

    document.getElementById("marketCap").value="";

    document.getElementById("volume").value="";

    document.getElementById("category").value="";

}
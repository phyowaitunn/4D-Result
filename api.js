let selectedCompany = "magnum";

function loadCompany(company){
  selectedCompany = company;
}

async function fetchResults(){

  const date = document.getElementById("drawDate").value;

  // Example API endpoint (replace with your API)
  const apiUrl = `https://your-api-url.com/results?company=${selectedCompany}&date=${date}`;

  try{
    const res = await fetch(apiUrl);
    const data = await res.json();

    document.getElementById("firstPrize").innerText = data.first;
    document.getElementById("secondPrize").innerText = data.second;
    document.getElementById("thirdPrize").innerText = data.third;

    displayGrid("specialNumbers", data.special);
    displayGrid("consolationNumbers", data.consolation);

  }catch(err){
    alert("Failed to fetch API");
  }
}

function displayGrid(id, numbers){
  const container = document.getElementById(id);
  container.innerHTML="";
  numbers.forEach(num=>{
    const div=document.createElement("div");
    div.innerText=num;
    container.appendChild(div);
  });
}

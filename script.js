//creating A new Container for All 
let newCon = document.createElement("div");
newCon.setAttribute("class","container-fluid ")
document.body.append(newCon);

//Creating A New Row For All 
let newrow = document.createElement("row");
newrow.setAttribute("class","row background p-2");
newCon.appendChild(newrow);



//Getting Data From Abi 
let Api1 = "https://restcountries.com/v3.1/all";

let Data = fetch (Api1);
Data.then((responseText) => { 
    return responseText.json();
}).then((DataRecived) => { 
    DataRecived.map((result) => {

//let Country lat and lang 
let lat = result.latlng[0];
let lang = result.latlng[1];

let SecondApi = fetch((`https://api.open-meteo.com/v1/forecast?current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&latitude=${lat}&longitude=${lang}`))
SecondApi.then((responseApi) => { 
    return responseApi.json();
}).then((ele) => { 
//creating a column 
let newcol = document.createElement("div");
newcol.setAttribute("class","col-lg-4");
newrow.appendChild(newcol);

//Creating a New Card Div And All Item Going To Append Here
let newCard = document.createElement("div");
newCard.setAttribute("class","card background-box mt-4");
newcol.appendChild(newCard);

//Creating a new para For Country
let Newpara = document.createElement("p");
Newpara.setAttribute("class","text-center p-2 text-white bg-dark text-design")
Newpara.setAttribute("id","country-name");
Newpara.innerHTML =result.name.common;
newCard.appendChild(Newpara); 

//Creating A New Image  
let Newimg = document.createElement("img");
Newimg.setAttribute("class","card-img img img-fluid rounded p-4 mx-auto d-block");
Newimg.src = result.flags.png;
Newimg.alt ="Images Of Flag";
newCard.appendChild(Newimg);

//Creating A New Para For Capital
let NewCap = document.createElement("p");
NewCap.setAttribute("class","text-center text-design")
NewCap.setAttribute("id","Capital-text");
NewCap.textContent = `Capital : ${result.capital}` ;
newCard.appendChild(NewCap)

//Creating A New Para For Region 
let NewRegion = document.createElement("p");
NewRegion.setAttribute("class","text-center text-design");
NewRegion.setAttribute("id","Region-text")
NewRegion.innerHTML = `Region:  ${result.region}`;
newCard.appendChild(NewRegion)

//Creating A New Para For CountryCode
let CountryCode = document.createElement("p");
CountryCode.setAttribute("class","text-center ")
CountryCode.setAttribute("id","Code");
CountryCode.innerHTML= `Country Code: ${result.flag}`;
CountryCode.style.fontFamily = 'Poppins', "sans-serif";
CountryCode.style.fontWeight = "bolder"
CountryCode.style.fontSize ="large"
newCard.appendChild(CountryCode)

function display()  {
// let CountryCode1 = document.createElement("p");
// CountryCode1.setAttribute("class","text-center ")
// CountryCode1.setAttribute("id","Code");

// CountryCode1.innerHTML= `${ele.current_weather.temperature}`;
// CountryCode1.style.fontFamily = 'Poppins', "sans-serif";
// CountryCode1.style.fontWeight = "bolder"
// CountryCode1.style.fontSize ="large"
// newCard.appendChild(CountryCode1) new
let data1 ="Today Temperature Is "+ ele.current_weather.temperature + " " + ele.hourly_units.temperature_2m;
alert(data1);
};


//Creating A New Button 
let NewButton = document.createElement("button");
NewButton.setAttribute("class","btn rounded-bottom-5 rounded-start-5 rounded-end-5 p-3  btn-outline-dark mb-3 ms-5 me-5");
NewButton.setAttribute("type","button");
NewButton.innerHTML = "Click For Weather"
NewButton.addEventListener("click" ,display)
newCard.appendChild(NewButton)
    })
  })
});
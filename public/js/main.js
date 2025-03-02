const cityName=document.getElementById("cityName");
const submitbtn=document.getElementById("submitbtn");
const city_name=document.getElementById("city_name");
const temp=document.getElementById("temp");
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector(".middle_layer")
const getinfo=async (event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
          city_name.innerText=`A city name must be given`;
          /*to hide the output line*/
          datahide.classList.add('data_hide');
    }
    else{
        try{
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=9abda87f16bf6a569bbc2126689a8e51`;
        const response= await fetch(url);
        const data=await response.json();
        const arrData=[data];
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
        temp.innerText = `${(arrData[0].main.temp - 273.15).toFixed(2)}°C`; // Convert Kelvin to Celsius and round to 2 decimal places
        const tempMood=arrData[0].weather[0].main;
        if(tempMood==="Clear")
        {
            temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
        else if(tempMood==="Clouds")
        {
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        else if(tempMood==="Rain")
        {
            temp_status.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
        }
        else
        {
            temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
        }
        datahide.classList.remove('data_hide');

    }
        catch{
            city_name.innerText=`The city name must be correct!`;
            datahide.classList.add('data_hide');
        }
    }
}
submitbtn.addEventListener("click",getinfo);
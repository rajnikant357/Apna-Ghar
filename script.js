function showsidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hidesidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
const dropdown = document.getElementById('myDropdown');

dropdown.addEventListener('change', function() {
  const selectedValue = dropdown.value;
  console.log('Selected value:', selectedValue);
  // You can perform actions based on the selected value here
});const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const locationList = document.getElementById('location-btn');
function gotlocation(position){
  console.log(position);
}
function failed(){
  console.log("there was a problem..")
}
const button = document.getElementById('location-btn');
button.addEventListener('click', async() =>{
  const result = navigator.geolocation.getCurrentPosition(gotlocation, failed) 
    
  
})
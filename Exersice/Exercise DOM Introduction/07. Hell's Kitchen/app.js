function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let arr = document.querySelector("#inputs textarea").value;
    console.log(arr[0]);
  }

  function getRestInfo(restuaurant){
   let restuarantData = {};

   for (const iterator of restuaurant) {
      restuarantData.restName = iterator.split('-');
   }
   return restuarantData;
  }
}

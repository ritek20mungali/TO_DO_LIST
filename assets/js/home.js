
// console.log("hello")
const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener("click", function() {
  const checkboxItems = document.getElementsByClassName("checkbox-item");
  
//   let arr=[]
let del ={}
 
  // Loop through all checkbox items and delete the checked ones
  for (let i = checkboxItems.length - 1; i >= 0; i--) {
    const checkbox = checkboxItems[i];
    if (checkbox.checked) {
        // console.log(checkbox.id);
        del[checkbox.id]=checkbox.id;
    //   const listItem = checkbox.parentNode;
    //   listItem.parentNode.removeChild(listItem);
    }
  }

  

$.ajax({
    type:'POST',
    url: "/delete-list/",
    data:del,
    success:function(data){
        // console.log("request got accepted",data);
        for(var i in data.data.id){
            console.log(i);
            document.getElementById(i).remove();

        }
    },
    error:function(error){
        console.log("error encountred",error);
    }
})

})
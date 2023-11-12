function displayMessage(){
    document.getElementById('output').innerHTML = "Because we offer quality services";
}

function resetform(){
    document.getElementById("myform").reset();
}

function checkforblank(){
var x = document.getElementById("name").value;
var y = document.getElementById("surname").value;
var z = document.getElementById("email").value;
var A = document.getElementById("pass").value;
var b = document.getElementById("address").value;

    if(x== ""|| y==""|| z=="" || A==""||b==""){
        alert('Please enter the empty input text.');
        
        return false;
    }else{
        
        alert('You are a member,send a message and we will shortly respond');
    }
}
 
const search = document.querySelector(".search-box input"),
images = document.querySelectorAll(".image-box");

search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
        let searcValue = search.value,
        value = searcValue.toLowerCase();
        images.forEach(image =>{
            if(value === image.dataset.name){
                return image.style.display = "block";
            
            }
            image.style.display = "none";
        });
    }
});
search.addEventListener("keyup", () =>{
    if(search.value != "") return;
    
    
    images.forEach(image =>{
        image.style.display = "block";
    })
})


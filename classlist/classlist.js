function getclass(){
    let button=document.getElementById("btn")
    button.addEventListener("click", () => {
        // button.innerHTML=`
        // <img id="image" src="https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg" width="400"/>`
        // button.classList.add("class1")
        // alert("added to Button")
         
        // button.innerHTML=`
        // <img id="image" src="https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg" width="400"/>`
        // button.classList.toggle("class2")
        // alert("added to Button")

        let image = document.getElementById("image");
        image.addEventListener("click", () => {
          alert("Image clicked!");
        });
            });
          }
getclass()


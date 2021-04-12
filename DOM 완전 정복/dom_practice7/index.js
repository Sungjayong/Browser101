window.onload = function() {
  const plusBtn = document.querySelector("#plusBtn");
  const plusInput = document.querySelector("#plusInput");
  const phoneItems = document.querySelector(".phone__items");

  //엔터키 눌렀을 때 event
  plusInput.addEventListener('keyup', function(e) {
    if(e.keyCode === 13) {
      plusBtn.click();
    }
  });

  //클릭버튼 눌렀을 때 event
  plusBtn.addEventListener('click', function(){
    let newDIV = document.createElement("div");
    newDIV.setAttribute("class","item");
    
    let newSpan = document.createElement("span");
    newSpan.setAttribute("class", "item__name");
    
    let garbageIcon = document.createElement("img");
    garbageIcon.setAttribute("src", "/img/garbage-can.png");
    garbageIcon.setAttribute("alt", "휴지통");
    garbageIcon.setAttribute("class", "item__icon");

    newSpan.innerText = plusInput.value;
    newDIV.appendChild(newSpan);
    newDIV.appendChild(garbageIcon);
    phoneItems.appendChild(newDIV);

    let garbageBtn = document.querySelectorAll(".item__icon");
    for(let gBtn of garbageBtn) {
      console.log("garbageBtn : " + gBtn);
      gBtn.addEventListener('click', function(){
        let delItem = gBtn.closest('.item');
        delItem.remove();
      });
    }
  });

  // let garbageBtn = document.querySelectorAll(".item__icon");
  // for(let gBtn of garbageBtn) {
  //   gBtn.addEventListener('click', function(){
  //     let delItem = gBtn.closest('.item');
  //     delItem.remove();
  //   });
  // };
}

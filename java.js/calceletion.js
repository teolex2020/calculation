//відсоток проголосувавших
function allF() {
  let numberVoit = +document.getElementById("number-voit").value; //кількість виборців
  let numberVoitone = +document.getElementById("number-voitone").value;
  let numberManda = +document.getElementById("number-voitone-manda").value;
  let numberGarant = +document.getElementById("number-voitone-garant").value;
  let numberFive = +document.getElementById("number-voitone-five").value;
  let numberOrg = +document.getElementById("number-voitone-org").value;
  let numberVoitOrg = +document.getElementById("number-voitone-okrug").value;
  let one = +document.getElementById("percentOnr").value;
  let two = +document.getElementById("percentConsignmentTwo").value;
  let three = +document.getElementById("percentConsignmentThree").value;
  let four = +document.getElementById("percentConsignmentFour").value;
  let five = +document.getElementById("percentConsignmentfive").value;
  let six = +document.getElementById("percentConsignmentSix").value;
  let seven = +document.getElementById("percentConsignmentSeven").value;
  let eight = +document.getElementById("percentConsignmentEight").value;
  let nine = +document.getElementById("percentConsignmentNine").value;
  let ten = +document.getElementById("percentConsignmentTen").value;

  // Прохідні 5%

  function but() {
    let numberTw = document.getElementById("number-two");
    const numberA = Math.trunc(numberVoit * (numberVoitone / 100) * 0.05);
    numberTw.innerHTML = numberA;
  }
  but();
  // Прохідні 5%
  // ///////////////Квота за 1 мандат

  function butone() {
    let numberThree = document.getElementById("number-three");
    const ab = Math.trunc(numberFive / (numberManda - numberGarant));
    numberThree.innerHTML = ab;
  }
  butone();
  // ///////////////Квота за 1 мандат

  // ///////////////Квота за 1 25% мандат

  function buttwo() {
    let numberFour = document.getElementById("number-four");
    const ac = Math.trunc(
      ((numberFive / (numberManda - numberGarant)) * 25) / 100
    );
    numberFour.innerHTML = ac;
  }
  buttwo();
  // ///////////////Квота за 1 25% мандат
  // //////Кількість мандатів отриманих на окрузі

  function butoneOkryg() {
    let numberFiv = document.getElementById("number-five");
    const ad = Math.trunc(
      numberVoitOrg * (numberVoitone / 100) * (numberOrg / 100)
    );
    numberFiv.innerHTML = ad;
  }
  butoneOkryg();

  function butoneterOkryg() {
    let numberOkr = document.getElementById("number-okr");
    const aj = Math.trunc(
     ( numberVoitOrg * (numberVoitone / 100) * (numberOrg / 100))/(numberFive / (numberManda - numberGarant))
    );
    numberOkr.innerHTML = aj;
  }
  butoneterOkryg();

  function result1() {
    // voit
    let oneVoit = document.getElementById("numberConsignmentOne");
    let twoVoit = document.getElementById("numberConsignmentTwo");
    let threeVoit = document.getElementById("numberConsignmentThree");
    let fourVoit = document.getElementById("numberConsignmentFour");
    let fiveVoit = document.getElementById("numberConsignmentfive");
    let sixVoit = document.getElementById("numberConsignmentSix");
    let sevenVoit = document.getElementById("numberConsignmentSeven");
    let eightVoit = document.getElementById("numberConsignmentEight");
    let nineVoit = document.getElementById("numberConsignmentNine");
    let tenVoit = document.getElementById("numberConsignmentTen");
    // manda

    // let numberVoitone = +document.getElementById("number-voitone").value;
    // let numberVoit = +document.getElementById("number-voit").value;

    let a1 = Math.trunc(numberVoit * (numberVoitone / 100) * (one / 100));
    oneVoit.innerHTML = a1;

    const a2 = Math.trunc(numberVoit * (numberVoitone / 100) * (two / 100));
    twoVoit.innerHTML = a2;

    const a3 = Math.trunc(numberVoit * (numberVoitone / 100) * (three / 100));
    threeVoit.innerHTML = a3;

    const a4 = Math.trunc(numberVoit * (numberVoitone / 100) * (four / 100));
    fourVoit.innerHTML =a4;

    const a5 = Math.trunc(numberVoit * (numberVoitone / 100) * (five / 100));
    fiveVoit.innerHTML = a5;

    const a6 = Math.trunc(numberVoit * (numberVoitone / 100) * (six / 100));
    sixVoit.innerHTML = a6;

    const a7 =Math.trunc(numberVoit * (numberVoitone / 100) * (seven / 100));
    sevenVoit.innerHTML = a7;

    const a8 = Math.trunc(numberVoit * (numberVoitone / 100) * (eight / 100));
    eightVoit.innerHTML = a8;

    const a9 = Math.trunc(numberVoit * (numberVoitone / 100) * (nine / 100));
    nineVoit.innerHTML = a9;

    const a10 = Math.trunc(numberVoit * (numberVoitone / 100) * (ten / 100));
    tenVoit.innerHTML = a10;

    // сума проголосувавший 5%

    // сума проголосувавший 5%
    // manda

    let oneManda = document.getElementById("mandatConsignmentOne");
    let twoManda = document.getElementById("mandatConsignmentTwo");
    let threeManda = document.getElementById("mandatConsignmentThree");
    let fourManda = document.getElementById("mandatConsignmentFour");
    let fiveManda = document.getElementById("mandatConsignmentfive");
    let sixManda = document.getElementById("mandatConsignmentSix");
    let sevenManda = document.getElementById("mandatConsignmentSeven");
    let eightManda = document.getElementById("mandatConsignmentEight");
    let nineManda = document.getElementById("mandatConsignmentNine");
    let tenManda = document.getElementById("mandatConsignmentTen");
    // const b1 = Math.trunc(
    //   (numberVoit * (numberVoitone / 100) * (one / 100)) / (rez / numberManda)
    // );
    // oneManda.innerHTML = b1;

    // const b2 = Math.trunc(
    //   (numberVoit * (numberVoitone / 100) * (two / 100)) /
    //     (numberFive / numberManda)
    // );
    // twoManda.innerHTML = b2;

    // const b3 = Math.trunc(
    //   (numberVoit * (numberVoitone / 100) * (three / 100)) /
    //     (numberFive / numberManda)
    // );
    // threeManda.innerHTML = b3;

    // const b4 = Math.trunc(
    //   (numberVoit * (numberVoitone / 100) * (four / 100)) /
    //     (numberFive / numberManda)
    // );
    // fourManda.innerHTML = b4;

    // const b5 = Math.trunc(
    //   (numberVoit * (numberVoitone / 100) * (five / 100)) /
    //     (numberFive / numberManda)
    // );
    // fiveManda.innerHTML = b5;

    // const b6 = Math.trunc(
    //   (numberVoit * (numberVoitone / 100) * (six / 100)) /
    //     (numberFive / numberManda)
    // );
    // sixManda.innerHTML = b6;

    let garantOne = document.getElementById("garantConsignmentOne");
    if (one >= 5) {
      garantOne.innerHTML = 1;
    } else {
      garantOne.innerHTML = 0;
    }
    let garantTwo = document.getElementById("garantConsignmentTwo");
    if (two >= 5) {
      garantTwo.innerHTML = 1;
    } else {
      garantTwo.innerHTML = 0;
    }

    let garantThree = document.getElementById("garantConsignmentThree");
    if (three >= 5) {
      garantThree.innerHTML = +1;
    } else {
      garantThree.innerHTML = 0;
    }
    let garantFour = document.getElementById("garantConsignmentFour");
    if (four >= 5) {
      garantFour.innerHTML = +1;
    } else {
      garantFour.innerHTML = 0;
    }
    let garantFive = document.getElementById("garantConsignmentfive");
    if (five >= 5) {
      garantFive.innerHTML = 1;
    } else {
      garantFive.innerHTML = 0;
    }
    let garantSix = document.getElementById("garantConsignmentSix");

    if (six >= 5) {
      garantSix.innerHTML = 1;
    } else {
      garantSix.innerHTML = 0;
    }
    let garantSeven = document.getElementById("garantConsignmentSeven");

    if (seven >= 5) {
      garantSeven.innerHTML = 1;
    } else {
      garantSeven.innerHTML = 0;
    }
    let garantEight = document.getElementById("garantConsignmentEight");

    if (eight >= 5) {
      garantEight.innerHTML = 1;
    } else {
      garantEight.innerHTML = 0;
    }
    let garantNine = document.getElementById("garantConsignmentNine");

    if (nine >= 5) {
      garantNine.innerHTML = 1;
    } else {
      garantNine.innerHTML = 0;
    }
    let garantTen = document.getElementById("garantConsignmentTen");

    if (ten >= 5) {
      garantTen.innerHTML = 1;
    } else {
      garantTen.innerHTML = 0;
    }
    let garantAll = document.getElementById("mandatGarantAll");
    let garantA =
      +garantOne.value +
      +garantTwo.value +
      +garantThree.value +
      +garantFour.value +
      +garantFive.value +
      +garantSix.value +
      +garantSeven.value +
      +garantEight.value +
      +garantNine.value +
      +garantTen.value;
    garantAll.innerHTML = garantA;

    const numberA = Math.trunc(numberVoit * (numberVoitone / 100) * 0.05);
    let Allfiveprecent = document.getElementById("Allfivem");
    
    if (a1 >= numberA) {
      aOne = a1;
    } else {
      aOne = 0;
    }
    
    if (a2 >= numberA) {
      aTwo = a2;
    } else {
      aTwo = 0;
    }
    
    if (a3 >= numberA) {
      aThree = a3;
    } else {
      aThree = 0;
    }
    
    if (a4 >= numberA) {
      aFour = a4;
    } else {
      aFour = 0;
    }
    
    if (a5 >= numberA) {
      aFive = a5;
    } else {
      aFive = 0;
    }
    
    if (a6 >= numberA) {
      aSix = a6;
    } else {
      aSix = 0;
    }
    
    if (a7 >= numberA) {
      aSeven = a7;
    } else {
      aSeven = 0;
    }

    if (a8 >= numberA) {
      aEight = a8;
    } else {
      aEight = 0;
    }

    if (a9 >= numberA) {
      aNine = a9;
    } else {
      aNine = 0;
    }

    if (a10 >= numberA) {
      aTen = a10;
    } else {
      aTen = 0;
    }
    let rez;
    rez = Math.trunc(+aOne + +aTwo + +aThree + +aFour + +aFive + +aSix + +aSeven + +aEight + +aNine + +aTen);

    console.log(rez);
    Allfiveprecent.innerHTML = rez;

    // const numberA = Math.trunc(numberVoit * (numberVoitone / 100) * 0.05);
    
    let rezManda = Math.trunc(rez / numberManda); //партії що подолали 5% поділено на кількість мандатів
    console.log(rezManda);
    console.log(numberA);

    const b1 = 
      (numberVoit * (numberVoitone / 100) * (one / 100)) /
        (rez / (numberManda - garantA));

    if (a1 >= numberA) {
      oneManda.innerHTML = b1.toFixed(3);
    } else {
      oneManda.innerHTML = 0;
    }
  
    const b2 = 
      (numberVoit * (numberVoitone / 100) * (two / 100)) /
        (rez / (numberManda - garantA))
    ;
    if (a2 >= numberA) {
      twoManda.innerHTML = b2.toFixed(3);
    } else {
      twoManda.innerHTML = 0;
    }
    
    const b3 = 
      (numberVoit * (numberVoitone / 100) * (three / 100)) /
        (rez / (numberManda - garantA))
    ;
    if (a3 >= numberA) {
      threeManda.innerHTML = b3.toFixed(3);
    } else {
      threeManda.innerHTML = 0;
    }

    const b4 = 
      (numberVoit * (numberVoitone / 100) * (four / 100)) /
        (rez / (numberManda - garantA))
    ;
    if (a4 >= numberA) {
      fourManda.innerHTML = b4.toFixed(3);
    } else {
      fourManda.innerHTML = 0;
    }

    const b5 = 
      (numberVoit * (numberVoitone / 100) * (five / 100)) /
        (rez / (numberManda - garantA))
    ;
    if (a5 >= numberA) {
      fiveManda.innerHTML = b5.toFixed(3);
    } else {
      fiveManda.innerHTML = 0;
    }

    const b6 = 
      (numberVoit * (numberVoitone / 100) * (six / 100)) /
        (rez / (numberManda - garantA))
    ;
    if (a6 >= numberA) {
      sixManda.innerHTML = b6.toFixed(3);
    } else {
      sixManda.innerHTML = 0;
    }
    const b7 = 
      (numberVoit * (numberVoitone / 100) * (seven / 100)) /
        (rez / (numberManda - garantA))
    ;
    if (a7 >= numberA) {
      sevenManda.innerHTML = b7.toFixed(3);
    } else {
      sevenManda.innerHTML = 0;
    }
    const b8 = 
      (numberVoit * (numberVoitone / 100) * (eight / 100)) /
        (rez / (numberManda - garantA))
    ;
    if (a8 >= numberA) {
      eightManda.innerHTML = b8.toFixed(3);
    } else {
      eightManda.innerHTML = 0;
    }
    const b9 = 
      (numberVoit * (numberVoitone / 100) * (nine / 100)) /
        (rez / (numberManda - garantA))
    ;
    if (a9 >= numberA) {
      nineManda.innerHTML = b9.toFixed(3);
    } else {
      nineManda.innerHTML = 0;
    }
    const b10 = 
      (numberVoit * (numberVoitone / 100) * (ten / 100)) /
        (rez / (numberManda - garantA));
    if (a10 >= numberA) {
      tenManda.innerHTML = b10.toFixed(3);
    } else {
      tenManda.innerHTML = 0;
    }
    console.log(tenManda.value)
    let mandaAll = document.getElementById("mandatKvotaAll")
    
    let mAll = Math.trunc(+oneManda.value) + Math.trunc(+twoManda.value) + Math.trunc(+threeManda.value) + Math.trunc(+fourManda.value) + Math.trunc(+fiveManda.value) + Math.trunc(+sixManda.value) + Math.trunc(+sevenManda.value) + Math.trunc(+eightManda.value) + Math.trunc(+nineManda.value) + Math.trunc(+tenManda.value)
    mandaAll.innerHTML=mAll
  }

  result1();
}

let butBat = document.getElementById("butto");
butBat.addEventListener("click", allF);

let buttonClear = document.getElementById("buttonOne1");
let inputClener = document.querySelectorAll("input");

buttonClear.addEventListener("click", () => {
  inputClener.forEach((input) => (input.value = ""));
});


let closeOpen = document.querySelector(".close-open")

function opclos (){
  
  let divCloses = document.querySelector(".closes")
 
  
  if (divCloses.style.display !== "none") {
    divCloses.style.display = "none"
  }
  
  else {
    divCloses.style.display = "block" 
  }
}
closeOpen.addEventListener("click", opclos)
// //////Кількість мандатів отриманих на окрузі

// очистка инпут

// ............

// //////створення форми
// let form = document.getElementById("name-form");
// let plusForm = () => {
//   let formOne = document.createElement("div");
//   formOne.classList.add("footer-copy");
//   // formOne.id.add("div-copy");
//   formOne.innerHTML = `<div class="сonsignmentNumber distance">
//   <p>Номер</p>
//   <input class="hight nummer-distans" type="text" />
// </div>

// <div class="namConsignment distance">
//   <p>Назва партії</p>
//   <input class="hight" type="text" />
// </div>

// <div class="percentConsignment distance">
//   <p>Відсоток</p>
//   <input class="hightprocent" type="number" id="percentConsignmentfive" />
// </div>

// <div class="numberConsignment distance">
//   <p>Кількість проголосувавших</p>
//   <output class="hightnumber" id="numberConsignmentfive">0</output>
// </div>

// <div class="resultConsignment distance">
//   <p>Кількість мандатів</p>
//   <output class="hightmandat" id="mandatConsignmentfive">0</output>
// </div>`;
//   form.append(formOne);
// };

// .....добавляем поле

// let plusDiv = document.getElementById("plus-div");

// plusDiv.addEventListener("click", plusForm);

// .................удаляем поле
// let minusDiv = document.getElementById("cleaner-div");

// function cleanerdiv() {
//   let divCopy = document.querySelector(".footer-copy");

//   divCopy.remove(divCopy);
// }
// minusDiv.addEventListener("click", cleanerdiv);
//zzzzzzzzzzzzzzzzzzzzzzzzz print file 

function printdiv(printpage) {
   var footstr = "</body>";
  var newstr = document.all.item(printpage).innerHTML;
  var oldstr = document.body.innerHTML;
  document.body.innerHTML =  newstr + footstr;
  window.print();
  document.body.innerHTML = oldstr;
  return false;
}
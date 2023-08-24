
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// slide show in cont two
function slideShow() {
    const arr = [`<div id="boxDot"> <p>2 mins ago</p> </div> <p>35 year old Male from Noida just asked about Ear Pain</p>`, `<div id="boxDot"> <p>4 mins ago</p> </div> <p> 29 year old Male from Hyderabad just asked about Leg Pain</p>`,
     `<div id="boxDot"> <p>4 mins ago</p> </div> <p>40 year old Female from Jaipur just asked about Neck Pain</p>`,`<div id="boxDot"> <p>7 mins ago</p> </div><p>21 year old Female from Mysore just asked about Abdominal Pain</p>` ,
    `<div id="boxDot"> <p>7 mins ago</p> </div><p>20 year old Male from Hyderabad just asked about Pain</p>`]
    let headline = document.getElementById('headline')
    console.log(arr)
    let i = 0;

    setInterval(function () {
     headline.innerHTML = arr[i]
        i++
        if (i == 5) {
        i=0
    }    
    },2000)
    
}
slideShow()


// cont Five Script

function span1() {
  let span1 = document.getElementById('span1')
  span1.style.color='red'
  let add = document.getElementById('dropdownSpan1')

  add.innerHTML =`<div onmouseleave="removeSpan1()">
                  <div id="span1remove" >
                <h6>Weight Management</h6>
                <a href="#">Weight Gain</a>
                <a href="#">Weight Loss</a>
                <a href="#">Obsesity</a>

                <h6>Nutrition & Diet</h6>
                <a href="#">Diet</a>
                <a href="#">Healthy Eating</a>

                <h6>Fitness & Exercise</h6>
                <a href="#">Meditation</a>
                <a href="#">Nutrition</a>
                <a href="#">Sport Injuries</a>
                <a href="#">Yoga</a>

            </div>
              `
}
function removeSpan1() {
  let span1 = document.getElementById('span1')
  span1.style.color = 'black'
  let add = document.getElementById('dropdownSpan1')
  add.innerHTML=``
}


function span2() {
  let span1 = document.getElementById('span2')
  span1.style.color='red'
  let add = document.getElementById('dropdownSpan2')

  add.innerHTML =`<div onmouseleave="removeSpan2()">
                  <div id="span2remove" >
                <h6>Skin Care</h6>
                <a href="#">Acne</a>
                <a href="#">Allergies</a>
                <a href="#">Anti-Ageing</a>
                <a href="#">Chickenpox</a>
                <a href="#">Exzema</a>
                <a href="#">Oily Skin Care</a>
                <a href="#">Psoriasis</a>
                <a href="#">Ring Worm</a>
                <a href="#">Rosacea</a>
                <a href="#">Skin Care</a>
                <a href="#">Warts</a>
                <a href="#">Vitiligo</a>
            </div>
            <div id="span2remove" >
                
                <h6>Hair Care</h6>
                <a href="#">Dandruff</a>
                <a href="#">Hair Fall</a>
                <a href="#">Hair Growth</a>
                <a href="#">Hair Treatment</a>
                <a href="#">Oily Hair Care</a>
            </div>
            </div>
              `
}
function removeSpan2() {
  let span1 = document.getElementById('span2')
  span1.style.color = 'black'
  let add = document.getElementById('dropdownSpan2')
  add.innerHTML=``
}

  function span3() {
  let span1 = document.getElementById('span3')
  span1.style.color='red'
  let add = document.getElementById('dropdownSpan3')

 add.innerHTML =`<div onmouseleave="removeSpan3()">
                  <div id="span1remove" >
                <h6>Respiratory Health</h6>
                <a href="#">Asthma</a>
                <a href="#">COPD</a>

                <h6>Diabetes</h6>
                <a href="#">Diabetes Type 1</a>
                <a href="#">Diabetes Type 2</a>

                <h6>Heart Health</h6>
                <a href="#">Cholestrol Management</a>
                <a href="#">Hearth Disease</a>
                <a href="#">HyperTension</a>

            </div>
            <div id="span1remove" >
                
                <h6>Cancer</h6>
                <a href="#">Breast Cancer</a>
                <a href="#">Lung Cancer</a>
                <a href="#">Oral Cancer</a>
                <a href="#">Prostate Cancer</a>
                <a href="#">Skin Cancer</a>

                <h6>Thyroid</h6>
                <a href="#">HyperThyroidism</a>
            </div>

            <div id="span1remove" >
                
                <h6>Pain Management</h6>
                <a href="#">Abdominal Pain</a>
                <a href="#">Arthritis</a>
                <a href="#">BackPain</a>
                <a href="#">Foot Pain</a>
                <a href="#">Hip Pain</a>
                <a href="#">Knee Pain</a>
                <a href="#">Migrain</a>
                <a href="#">Nerve Pain</a>
                <a href="#">Osteoarthitis</a>
                <a href="#">Sport Injuries</a>
            </div>
            <div id="span1remove" >
                
                <h6>Sleep Disorders</h6>
                <a href="#">Obstructive Sleep Apnea</a>
                <a href="#">Insomia</a>

                <h6>Mental Health</h6>
                <a href="#">ADHD</a>
                <a href="#">Anxiety Disorder</a>
                <a href="#">Alzheimer's</a>
                <a href="#">Austism</a>
                <a href="#">Bipolar Disorder</a>
                <a href="#">Clicical Depression</a>
                <a href="#">OCD</a>
                <a href="#">Schizophrenia</a>
            </div>
            </div>
              `
}
function removeSpan3() {
  let span1 = document.getElementById('span3')
  span1.style.color = 'black'
  let add = document.getElementById('dropdownSpan3')
  add.innerHTML=``
}

function span4() {
  let span1 = document.getElementById('span4')
  span1.style.color='red'
  let add = document.getElementById('dropdownSpan4')

  add.innerHTML =`<div onmouseleave="removeSpan4()">
                  <div id="span1remove" >
                <h6>Pregnancy</h6>
                <a href="#">Getting Pregnent</a>
                <a href="#">Fertility</a>
                <a href="#">Miscarriage</a>
                <a href="#">Abortion</a>
                <a href="#">Post Pregnancy</a>

                <h6>Parenting</h6>
                <a href="#">Baby Dental Health</a>
                <a href="#">Baby Development</a>
                <a href="#">Baby Diarrhea</a>
                <a href="#">Baby Nutrition</a>
                <a href="#">Baby Rashes and SkinCare</a>
                <a href="#">Diaper Rash</a>
                <a href="#">Hearth Disease</a>
                <a href="#">HyperTension</a>
                <a href="#">Torticollis</a>

            </div>
            <div id="span1remove" >
                
                <h6>Parenting -1 yr+ Child</h6>
                <a href="#">Bedwetting</a>
                <a href="#">Child Nutrition</a?
                  </div>
            </div>
              `
}
function removeSpan4() {
  let span1 = document.getElementById('span4')
  span1.style.color = 'black'
  let add = document.getElementById('dropdownSpan4')
  add.innerHTML=``
}

function span5() {
  let span1 = document.getElementById('span5')
  span1.style.color='red'
  let add = document.getElementById('dropdownSpan5')

  add.innerHTML =`<div onmouseleave="removeSpan5()">
                  <div id="span1remove" >
                <h6>Women's Health</h6>
                <a href="#">Birth Control</a>
                <a href="#">Breast Cancer</a>
                <a href="#">Obsesity</a>
                <a href="#">Weight Gain</a>
                <a href="#">Weight Loss</a>
                <a href="#">Obsesity</a>
                <a href="#">Meditation</a>
                <a href="#">Nutrition</a>
                <a href="#">Sport Injuries</a>
                <a href="#">Nipple Problem</a>
                <a href="#">PCOS/PCOD</a>
                <a href="#">PMS</a>
                <a href="#">Abnormal Pap Test</a>
                <a href="#">Abortion</a>
                <a href="#">Amenorrhea</a>
                <a href="#">Bacterial Vaginosis</a>
                <a href="#">Benign Breast Lumps</a>
            </div>
            </div>
              `
}
function removeSpan5() {
  let span1 = document.getElementById('span5')
  span1.style.color = 'black'
  let add = document.getElementById('dropdownSpan5')
  add.innerHTML=``
}

function span6() {
  let span1 = document.getElementById('span6')
  span1.style.color='red'
  let add = document.getElementById('dropdownSpan6')

  add.innerHTML =`<div onmouseleave="removeSpan6()">
                  <div id="span1remove" >
                <h6>Sexual Wellness</h6>
                <a href="#">Erectile Dysfuntion</a>
                <a href="#">Having Safe Sex</a>
                <a href="#">HIV</a>
                <a href="#">Diet</a>
                <a href="#">Healthy Eating</a>
                <a href="#">Meditation</a>
                <a href="#">Men's Libido</a>
                <a href="#">Nightfall</a>
                <a href="#">STDs</a>

            </div>
              `
}
function removeSpan6() {
  let span1 = document.getElementById('span6')
    span1.style.color = 'black'
  let add = document.getElementById('dropdownSpan6')
  add.innerHTML=``
}

function span7() {
  let span1 = document.getElementById('span7')
  span1.style.color='red'
  let add = document.getElementById('dropdownSpan7')

  add.innerHTML =`<div onmouseleave="removeSpan7()">
                  <div id="span1remove" >
                <h6>General Health</h6>
                <a href="#">Weight Gain</a>
                <a href="#">Weight Loss</a>
                <a href="#">Obsesity</a>

                <h6>Mental Well-Being</h6>
                <a href="#">Diet</a>
                <a href="#">Healthy Eating</a>
                <a href="#">Meditation</a>
                <a href="#">Nutrition</a>
                <a href="#">Sport Injuries</a>
                <a href="#">Stress</a>

            </div>
            <div id="span1remove" >
                
                <h6>Weight Management</h6>
                <a href="#">Weight Gain</a>
                <a href="#">Weight Loss</a>
                <a href="#">Obsesity</a>

                <h6>Nutrition & Diet</h6>
                <a href="#">Diet</a>
                <a href="#">Healthy Eating</a>

                <h6>Fitness & Exercise</h6>
                <a href="#">Meditation</a>
                <a href="#">Nutrition</a>
                <a href="#">Sport Injuries</a>
                <a href="#">Yoga</a>
            </div>
            </div>
              `
}
function removeSpan7() {
  let span1 = document.getElementById('span7')
  span1.style.color = 'black'
  let add = document.getElementById('dropdownSpan7')
  add.innerHTML=``
}


let a = document.getElementById("sliderVideos").offsetWidth;
var j = 0;
let right_btn = document.getElementById('rightbtn')
right_btn.onclick = function () {
    
    if (j == 2) {
        document.getElementById('sliderVideos').scrollLeft -= a*0.5;
        j = 0;
    } else {
        document.getElementById('sliderVideos').scrollLeft += a*0.25;
        j++;
    }
};

let left_btn = document.getElementById('leftbtn')
left_btn.onclick = function () {
  document.getElementById('sliderVideos').scrollLeft -= a*0.25;
    j--;
};

var i = 0;
let right_btn1 = document.getElementById('rightbtn1')
right_btn1.onclick = function () {
    if (i == 2) {
        document.getElementById('sliderImages').scrollLeft -= a*0.5;
        i = 0;
    } else {
        document.getElementById('sliderImages').scrollLeft += a*0.25;
        i++;
    } 
};

let left_btn1 = document.getElementById('leftbtn1')
left_btn1.onclick = function () {
    document.getElementById('sliderImages').scrollLeft -= a*0.25;
    i--;
};



let c = document.getElementById("sliderCategories").offsetWidth;
var k = 0;
let right_btn3 = document.getElementById('rightbtn3')
right_btn3.onclick = function () {
    
    if (k == 3) {
        document.getElementById('sliderCategories').scrollLeft -= c*0.75;
        k = 0;
    } else {
        document.getElementById('sliderCategories').scrollLeft += c*0.25;
        k++;
    }
};

let left_btn3 = document.getElementById('leftbtn3')
left_btn3.onclick = function () {
    document.getElementById('sliderCategories').scrollLeft -= c * 0.25;
    k--;
};

let b = document.getElementById("slideCities").offsetWidth;
var m = 0;
let right_btn4 = document.getElementById('rightbtn4')
right_btn4.onclick = function () {
    
    if (m == 1) {
        document.getElementById('slideCities').scrollLeft -= b*0.75;
        m = 0;
    } else {
        document.getElementById('slideCities').scrollLeft += b*0.25;
        m++;
    }
};




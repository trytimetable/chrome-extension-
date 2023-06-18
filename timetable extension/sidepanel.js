//set all info variables

let subjectCode = ""
let classCode = ""

let classNameTxt = "Principles of Accounting"
let profNames = ["Massoud Yazdani", "Matt Trees", "Jemina Rahman", "Tremaine  Emory", "Roza Diaz"]
let profTitles = ["Professor in the Mathematics Department", "Professor in the CS Department", "Professor in the English Department", "Professor in the Chemistry Department", "Professor in the Art Department"]
let profRatings = [1, 2, 3, 4, 5]
let difficulties = [5, 4, 3, 2, 1]
let takeAgains = [20, 40, 60, 80, 100]



function create() {
    //create and initalize class code
    let classCodeTxt = document.getElementById("class-code")
    classCodeTxt.innerHTML = subjectCode + " " + classCode + ":"

    //create and initalize class code class name
    let className = document.getElementById("class-name")
    className.innerHTML = classNameTxt

    // makeRequest(function (result) {
    //loop to create info boxes
    for (let i = 0; i < profNames.length; i++) {
        //create and initalize info boxes
        let infoBox = document.createElement('div')
        infoBox.className = 'info-box'
        document.getElementById("info-cont").appendChild(infoBox)

        //create and initalize prof name
        let profName = document.createElement("p")
        profName.className = 'prof-name'
        profName.innerHTML = profNames[i]
        infoBox.appendChild(profName)

        //create and initalize prof title
        let profTitle = document.createElement("p")
        profTitle.className = 'prof-title'
        profTitle.innerHTML = profTitles[i]
        infoBox.appendChild(profTitle)

        //create star container
        let starCont = document.createElement("div")
        starCont.className = 'star-cont'
        infoBox.appendChild(starCont)

        //create rating stars
        for (let y = 0; y < profRatings[i]; y++) {
            //create filled stars
            let filledStar = document.createElement("img")
            filledStar.className = 'star'
            filledStar.src = "images//filled-star.svg"
            starCont.appendChild(filledStar)
        }
        for (let y = 0; y < 5 - profRatings[i]; y++) {
            //create empty stars
            let emptyStar = document.createElement("img")
            emptyStar.className = 'star'
            // emptyStar.innerHTML = '<i class="fa fa-star" ></i>';
            emptyStar.src = "images//empty-star.svg"
            starCont.appendChild(emptyStar)

        }

        //create and initalize 'level of difficulty'
        let profDiff = document.createElement("p")
        profDiff.className = "prof-diff-txt"
        profDiff.innerHTML = "Level of difficulty :"
        let diffNum = document.createElement("p")
        diffNum.className = 'diff-num'
        diffNum.innerHTML = difficulties[i]
        profDiff.appendChild(diffNum)
        infoBox.appendChild(profDiff)


        //create and initalize 'would take again'
        let takeAgainNum = document.createElement("p")
        takeAgainNum.className = "take-again-num"
        takeAgainNum.innerHTML = takeAgains[i] + "%"
        let takeAgain = document.createElement("p")
        takeAgain.className = 'take-again'
        takeAgain.innerHTML = 'of students would take again'
        takeAgainNum.appendChild(takeAgain)
        infoBox.appendChild(takeAgainNum)


        //create classtime wrapper
        let classTimeWrapper = document.createElement("div")
        classTimeWrapper.className = "class-time-wrapper"
        infoBox.append(classTimeWrapper)
        //create classtimes button 
        let viewClassTimesBtn = document.createElement("button")
        viewClassTimesBtn.className = 'class-time-cont'
        viewClassTimesBtn.innerHTML = "View class times"
        let downArrow = document.createElement("img")
        downArrow.src = "images//down-arrow.svg"
        downArrow.className = "down-arrow"
        viewClassTimesBtn.appendChild(downArrow)
        classTimeWrapper.appendChild(viewClassTimesBtn)

        //create clastimes dropdown form
        let classTimesDropdown = document.createElement("form")
        classTimesDropdown.className = "class-time-dropdown"
        // classTimesDropdown.action = "#"
        classTimeWrapper.appendChild(classTimesDropdown)
        //create time buttons
        let classTimesTemp = ["T/Th at 10:10 AM - 11:25 AM", "W/F at 10:10 AM - 11:25 AM ", "M/W at 9:30 AM - 11:00 AM"]
        for (let i = 0; i < classTimesTemp.length; i++) {
            //wrapper for checkbox and label  
            let checkboxCont = document.createElement("div")
            checkboxCont.className = "checkbox-cont"
            checkboxCont.id = "class-times-cont-" + (i + 1)

            //labels for checkboxes
            let label = document.createElement('label')
            label.htmlFor = "class-times-item-" + (i + 1);
            label.innerHTML = classTimesTemp[i]

            //create checkbox
            let classTimeCheckbox = document.createElement("input")
            classTimeCheckbox.type = "checkbox"
            classTimeCheckbox.id = "class-times-item-" + (i + 1)
            classTimeCheckbox.className = "class-times-btns"

            checkboxCont.appendChild(classTimeCheckbox)
            checkboxCont.appendChild(label)
            classTimesDropdown.appendChild(checkboxCont)
        }

        let submitBtnWrapper = document.createElement("div")
        submitBtnWrapper.className = "class-submit-wrapper"
        let submitBtn = document.createElement("button")
        submitBtn.type = "submit"
        submitBtn.innerHTML = "Add to Schedule"
        submitBtn.className = "class-submit"
        submitBtnWrapper.appendChild(submitBtn)
        classTimesDropdown.appendChild(submitBtnWrapper)


        //animate view class time buttons
        viewClassTimesBtn.addEventListener('click', function () {
            classTimesDropdown.classList.toggle("class-time-dropdown-enable")
        })
    }

    // });

    //testing
    console.log("subject code = " + subjectCode)
    console.log("class code = " + classCode)
}


//school search submit event listener
let initialSearchForm = document.getElementById("initial-search-form")
initialSearchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("school-search-header").style.display = "none";
    document.getElementById("start-txt").innerHTML = "Search a class using its class code"
    document.getElementById("class-search-header").style.display = "block"
    setCurrentSchool();
});

// read school search input and set current school 
let schoolSearchBar = document.getElementById("initial-searchbar")
function setCurrentSchool() {
    console.log("set school")
    document.getElementById("current-school").innerHTML = schoolSearchBar.value

}

//class search submit event listener
let searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    setClassCode()
    document.getElementById("initial-wrapper").style.display = "none"
});
// read class search input and set class and subject code 
let classSearchBar = document.getElementById('searchbar')

function setClassCode() {
    let input = (classSearchBar.value).replace(/ /g, '')
    console.log(input)
    var regex = new RegExp('([0-9]+)|([a-zA-Z]+)', 'g');
    var split = input.match(regex);

    subjectCode = split[0].toUpperCase();
    classCode = split[1];

    clearOld()
    create()


}

//helper to clear any old info boxes
function clearOld() {
    const boxes = document.querySelectorAll('.info-box');
    boxes.forEach(box => {
        box.remove();
    });
}

//send http request with class and subject code
function makeRequest(callback) {
    var httpRequest = new XMLHttpRequest();
    const url = "https://api.trytimetable.com/instructors/subject-code?subjectCode=" + subjectCode + '&classCode=' + classCode;
    httpRequest.onload = function () { // When the request is loaded
        if (httpRequest.readyState === 4) { // request is done
            if (httpRequest.status === 200) { // successfully
                callback(httpRequest.responseText); // we're calling our method
            }
        }
    };

    httpRequest.open("GET", url);
    httpRequest.send();

}

//Animate Filter
let filterOpen = false;
let filterDropdown = document.getElementById("filter-dropdown")

document.getElementById("filter-btn").addEventListener("click", function () {
    if (!filterOpen) {
        filterOpen = true
        filterDropdown.style.height = "175px"
        setTimeout(() => {
            filterDropdown.style.overflow = "visible"
        }, 200)
    }
    else {
        filterOpen = false
        filterDropdown.style.overflow = "hidden"
        setTimeout(() => {
            filterDropdown.style.height = "0px"
        }, 100)

    }
})


// animate class time dropdown
let classTimeOpen = document.getElementsByClassName("class-time-cont")




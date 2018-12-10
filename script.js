let form = document.createElement("form")
document.body.appendChild(form)

// creation of a p tag for First Name
let pFirstName = document.createElement("p")
form.appendChild(pFirstName)

// creation of the first name label
let firstName = document.createElement("label")
firstName.textContent = "Quel est votre prénom ?"
pFirstName.appendChild(firstName)

// creation of the text input for first name
let textInputFirstName = document.createElement("input")
textInputFirstName.setAttribute("type", "text")
pFirstName.appendChild(textInputFirstName)

// creation of a "p" tag for Last Name
let pLastName = document.createElement("p")
form.appendChild(pLastName)

// creation of the name label
let lastName = document.createElement("label")
lastName.textContent = "Quel est votre nom ?"
pLastName.appendChild(lastName)

// creation of the text input for name
let textInputLastName = document.createElement("input")
textInputLastName.setAttribute("type", "text")
pLastName.appendChild(textInputLastName)

// creation of a "p" tag for OK button
let pBtnOk = document.createElement("p")
form.appendChild(pBtnOk)

// creation of the OK button with event listener
let btnOk = document.createElement("input")
btnOk.setAttribute("type", "button")
btnOk.value = "OK"
btnOk.addEventListener("click", check, false)
pBtnOk.appendChild(btnOk)

// creation of a "br" tag for line breaks
let br3 = document.createElement("br")
form.appendChild(br3)

// error message hide
var error = document.createElement("label")
error.textContent = "Veuillez remplir les champs"
error.hidden = true
form.appendChild(error)

// message hello hiding
var hello = document.createElement("label")
hello.hidden = true
document.body.appendChild(hello)

function check() {
    if (textInputFirstName.value === "" && textInputLastName.value === "") {
        error.hidden = false
    }
    if (textInputFirstName.value === "") {
        error.hidden = false
    }
    if (textInputLastName.value === "") {
        error.hidden = false
    } else {
        form.hidden = true
        error.hidden = true
        hello.hidden = false
        hello.textContent = "Bonjour " + textInputFirstName.value + " " + textInputLastName.value
    }
}




let formEx2 = document.createElement("form")
document.body.appendChild(formEx2)

// creation of the "p" tag for Gross monthly salary
let pGrossMonthlySalary = document.createElement("p")
formEx2.appendChild(pGrossMonthlySalary)

// creation of the "Gross monthly salary" label
let grossMonthlySalary = document.createElement("label")
grossMonthlySalary.textContent = "Salaire mensuel brut"
pGrossMonthlySalary.appendChild(grossMonthlySalary)

//creation of the numerical field for Gross monthly salary
let inputGrossMonthlySalary = document.createElement("input")
inputGrossMonthlySalary.setAttribute("type", "number")
pGrossMonthlySalary.appendChild(inputGrossMonthlySalary)

//creation of the "p" tag for net monthly salary
let pNetMonthlySalary = document.createElement("p")
formEx2.appendChild(pNetMonthlySalary)

// creation of the "Net monthly salary" label
let netMonthlySalary = document.createElement("label")
netMonthlySalary.textContent = "Salaire mensuel net"
pNetMonthlySalary.appendChild(netMonthlySalary)

//creation of the numerical field for Net monthly salary
let inputpNetMonthlySalary = document.createElement("input")
inputpNetMonthlySalary.setAttribute("type", "number")
pNetMonthlySalary.appendChild(inputpNetMonthlySalary)

// Creation of the "p" tag for "Gross annual salary"
let pGrossAnnualSalary = document.createElement("p")
formEx2.appendChild(pGrossAnnualSalary)

// creation of the "Gross annual salary" label
let grossAnnualSalary = document.createElement("label")
grossAnnualSalary.textContent = "Salaire annuel brut"
pGrossAnnualSalary.appendChild(grossAnnualSalary)

// creation of the numerical field for "Gross annual salary"
let inputGrossAnnualSalary = document.createElement("input")
inputGrossAnnualSalary.setAttribute("type", "number")
pGrossAnnualSalary.appendChild(inputGrossAnnualSalary)

//creation of the "p" tag for "Net annual salary"
let pNetAnnualSalary = document.createElement("p")
formEx2.appendChild(pNetAnnualSalary)

// creation of the "Net Annual Salary" label
let netAnnualSalary = document.createElement("label")
netAnnualSalary.textContent = "Salaire annuel net"
pNetAnnualSalary.appendChild(netAnnualSalary)

//creation of the numerical field for "Net annual salary"
let inputNetAnnualSalary = document.createElement("input")
inputNetAnnualSalary.setAttribute("type", "number")
pNetAnnualSalary.appendChild(inputNetAnnualSalary)


grossMonthlySalary.addEventListener("keypress", function (event) {
}, false)
netMonthlySalary.addEventListener("keypress", function (event){

} , false)
grossAnnualSalary.addEventListener("keypress",function (event){

} , false)
netAnnualSalary.addEventListener("keypress", function (event){

}, false)



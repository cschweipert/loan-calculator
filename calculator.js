// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");
const loanAmount = document.getElementById("loan-amount");
const loanYears = document.getElementById("loan-years");
const loanRate = document.getElementById("loan-rate");
console.log(loanAmount, loanYears, loanRate)

/** Retrieves current form values and returns {amount, years, rate}. */

function getFormValues() {
  const input = {
    loanAmount: +(loanAmount.value),
    loanYears: +(loanYears.value),
    loanRate: +(loanRate.value)
  }
  console.log(input)
  return input
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
  const input = getFormValues();
  const periodicInterest = loanRate.value / 12;
  console.log("periodicInterest = ", periodicInterest)
  const monthlyPayment = (loanAmount.value * periodicInterest) / (1 - (1 + periodicInterest) ** (-loanYears.value * 12));
  console.log("monthly payment = ", monthlyPayment)
  return monthlyPayment;
};

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
  const formValues = getFormValues();
  console.log(formValues)
  const monthlyPayment = calcMonthlyPayment(formValues.loanAmount, formValues.loanYears, formValues.loanRate);
  const element = document.getElementById("calc-monthly-payment");
  element.innerText = "$" + monthlyPayment.toFixed(2);
};

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // you can decide on some initial values
  loanAmount.innerHTML = 1000000;
  loanYears.innerHTML = 30;
  loanRate.innerHTML = 3;
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);

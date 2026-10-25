document.querySelector('#clickMe').addEventListener('click', ShowPaliOutcome)

function ShowPaliOutcome(){

const paliEntered = document.querySelector("#PaliEntered").value;

console.log(paliEntered)
  // go to this address and give us whats there
  fetch(`/api?pali=${paliEntered}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      const result = document.querySelector('#choice')
      result.textContent = data.isPaliOutcome
      result.className = data.isPaliOutcome.endsWith('is not Palindrome') ? 'nomatch' : 'match'

    });

}


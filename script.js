document.getElementById('voteForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from refreshing the page

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  if (name === '' || age === '') {
    alert('Please enter valid details.');
    return;
  }

  const ageNum = parseInt(age);

  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ageNum > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  checkVotingEligibility
    .then((message) => alert(message))
    .catch((error) => alert(error));
});

let results = [
  { gender: "Boys", age: "U15", team: "STA 2010 ECNL", record: "3-0-0" },
  { gender: "Boys", age: "U16", team: "VDA 2009 ECNL", record: "2-0-1" },
  { gender: "Boys", age: "U17", team: "Richmond United ECNL 08", record: "2-0-1" },
  { gender: "Girls", age: "U15", team: "World Class FC 2010 ECNL", record: "3-0-0" },
  { gender: "Girls", age: "U19", team: "Arlington SA 07/06 ECNL", record: "2-0-1" }
];

function showResults() {
  let gender = document.getElementById("genderFilter").value;
  let age = document.getElementById("ageFilter").value;
  let table = document.getElementById("resultsTable");
  table.innerHTML = "";

  results.forEach(r => {
    if ((gender === "All" || r.gender === gender) &&
        (age === "All" || r.age === age)) {

      table.innerHTML += `
        <tr>
          <td>${r.gender}</td>
          <td>${r.age}</td>
          <td><a href="team.html?team=${encodeURIComponent(r.team)}">${r.team}</a></td>
          <td>${r.record}</td>
        </tr>
      `;
    }
  });
}

function addResult() {
  results.push({
    gender: gender.value,
    age: age.value,
    team: team.value,
    record: record.value
  });
  showResults();
}

showResults();

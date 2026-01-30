fetch("http://localhost:5000/")
  .then(res => res.text())
  .then(data => console.log(data));
function addSubject() {
  const input = document.getElementById("subjectInput");
  const subject = input.value.trim();

  if (subject === "") {
    alert("Please enter a subject name");
    return;
  }

  const list = document.getElementById("subjectList");
  const li = document.createElement("li");
  li.textContent = subject;
  list.appendChild(li);

  input.value = "";
}

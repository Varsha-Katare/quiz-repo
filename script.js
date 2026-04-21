async function submitQuiz() {
  const data = {
    q1: q1.value,
    q2: q2.value,
    q3: q3.value
  };

  await fetch("http://localhost:3000/submit", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  alert("Saved in backend!");
}
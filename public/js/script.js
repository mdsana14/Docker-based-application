document.getElementById("regForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const formData = Object.fromEntries(new FormData(e.target));
  
  try {
    const res = await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const msg = await res.text();
    alert(msg);
  } catch (err) {
    alert("Error connecting to server!");
    console.error(err);
  }
});

  window.promises = [];

    // Create 5 promises that resolve randomly between 1–5 seconds
    for (let i = 1; i <= 5; i++) {
      const delay = Math.floor(Math.random() * 5 + 1) * 1000; // 1–5 seconds
      const promise = new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Promise ${i} resolved in ${delay / 1000} seconds`);
        }, delay);
      });
      promises.push(promise);
    }

    // Wait for the first promise to resolve
    Promise.any(promises)
      .then((result) => {
        document.getElementById("output").innerText = result;
      })
      .catch((error) => {
        document.getElementById("output").innerText = "All promises rejected";
      });
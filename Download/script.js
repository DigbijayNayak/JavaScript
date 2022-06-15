function downloadFile() {
  fetch("https://orangevalleycaa.org/api/videos")
    .then((resp) => resp.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      // the filename you want
      a.download = "myFile.txt";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      alert("your file has downloaded!"); // or you know, something with better UX...
    })
    .catch(() => alert("oh no!"));
}

// function downloadFile(data, name = "myFile.txt") {
//   const blob = new Blob([data], { type: "text/plain" });
//   const href = URL.createObjectURL(blob);
//   URL.revokeObjectURL(href);
//   const a = Object.assign(document.createElement("a"), {
//     href,
//     style: "display:none",
//     download: name,
//   });
//   document.body.appendChild(a);
//   a.click();
//   URL.revokeObjectURL(href);
//   a.remove();
// }
// const dat =
//   "https://images.unsplash.com/photo-1654789460791-74c79093c37e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
// downloadFile(dat);

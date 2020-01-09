self.addEventListener("install", e => {
  console.log("hi");
})

self.addEventListener("activate", e => {
  console.log("hello");
})

self.addEventListener("fetch", e => {
  console.log("bye");
})
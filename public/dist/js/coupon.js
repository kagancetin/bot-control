document.querySelector("#couponCreateForm").onsubmit = (e) => {
  // e.preventDefault()
  const formData = new FormData(e.target)
  let data = {}
  for (let [key, value] of formData) {
    data[key] = value
  }
  console.log(e)
  console.log(data)
  const xhr = new XMLHttpRequest()
  xhr.open("POST", `/coupon/create`, true)
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  xhr.onload = () => {
    if (!xhr.response.error)
      console.log("asd")
    else
      console.log("error", xhr.response.error)
  }
  xhr.send(JSON.stringify(data))
}
const form = document.querySelector('form')

async function uploadFile(file) {
  if (!file[0]) return alert('cannot upload null')
  const formData = new FormData()

  Object.keys(file).forEach((key) => {
    formData.append('image', file.item(key))
  })

  const req = await fetch('/api/v1/upload', {
    method: 'POST',
    body: formData,
  })
  const res = await req.json()
  console.log(res)
}

form.addEventListener('submit', (e) => {
  const imageInput = document.getElementById('file')
  e.preventDefault()
  uploadFile(imageInput.files)
})

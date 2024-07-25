let selectedImage = null;

async function uploadImage() {
  const input = document.getElementById('uploadImage');
  const file = input.files?.[0];
  if (!file) {
    alert('Please select a file');
    return;
  }

  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('http://localhost:3000/api/images/upload', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
      const data = await response.json();
      alert('Image uploaded successfully');
      addImageToContainer(data.filename);
    } else {
      const errorData = await response.json();
      alert(`Error uploading image: ${errorData.error}`);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error uploading image');
  }
}

function addImageToContainer(filename) {
  const Container = document.getElementById('image');
  const img = document.createElement('img');
  img.style.width = '15%';
  img.style.padding = '45px';
  img.src = `../../uploads/${filename}`;
  img.onclick = () => selectImage(filename);
  Container?.appendChild(img);
}

function selectImage(filename) {
  selectedImage = filename;
  const images = document.querySelectorAll('#image img');
  images.forEach((img) => img.classList.remove('selected'));
  const selectedImg = Array.from(images).find((img) =>
    img.src.includes(filename),
  );
  selectedImg?.classList.add('selected');
}

async function resizeImage2() {
  if (!selectedImage) {
    alert('Please select an image from the gallery');
    return;
  }

  const width = document.getElementById('widthInput').value;
  const height = document.getElementById('heightInput').value;

  if (!width || !height) {
    alert('Please specify width and height');
    return;
  }

  const url = `http://localhost:3000/api/images/resize?filename=${selectedImage}&width=${width}&height=${height}`;
  const urlDisplay = document.getElementById('urlForResizedImage');
  if (urlDisplay) {
    urlDisplay.innerHTML = `<p>Resized image URL: <a href="${url}" target="_blank">${url}</a></p>`;
  }
}

const initialImages = [
  'encenadaport.jpg',
  'fjord.jpg',
  'icelandwaterfall.jpg',
  'palmtunnel.jpg',
  'santamonica.jpg',
];
initialImages.forEach(addImageToContainer);

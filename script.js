async function proxyRequest() {
  const urlInput = document.getElementById('urlInput');
  const resultContainer = document.getElementById('resultContainer');

  const url = urlInput.value;

  try {
    const response = await fetch(`/proxy?url=${encodeURIComponent(url)}`);
    const data = await response.text();
    resultContainer.innerHTML = data;
  } catch (error) {
    console.error(error);
    resultContainer.innerHTML = 'Error proxying the request';
  }
}

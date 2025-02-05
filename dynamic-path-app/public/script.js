document.getElementById('getPathBtn').addEventListener('click', function() {
    fetch('/get-dynamic-path')
      .then(response => response.json())
      .then(data => {
        document.getElementById('pathDisplay').innerText = 'Dynamic Path: ' + data.dynamicPath;
      })
      .catch(error => console.error('Error fetching path:', error));
  });
  
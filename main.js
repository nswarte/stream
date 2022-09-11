(function () {
  onload = _ => {
    fetch("http://localhost:9001")
      .then((response) => response.body)
      .then((body) => {
        if (body === undefined || body === null) return;

        const reader = body.getReader();
        const decoder = new TextDecoder();

        function process (response) {
          const p = document.createElement("p");
          p.innerText = decoder.decode(response.value);
          document.body.appendChild(p);

          if (!response.done) reader.read().then(process);
        };
        reader.read().then(process);
      });
  };
})();

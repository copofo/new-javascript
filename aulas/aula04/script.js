document.addEventListener("DOMContentLoaded", function() {
    const copyButton = document.getElementById("copyButton");
    const codeSnippet = document.getElementById("codeSnippet");
  
    copyButton.addEventListener("click", () => {
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = codeSnippet.textContent;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);
      copyButton.textContent = "Copiado!";
      setTimeout(() => {
        copyButton.textContent = "Copiar";
      }, 2000);
    });
  });
  
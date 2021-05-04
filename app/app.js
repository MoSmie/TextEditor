let textEditor = document.getElementById("textEditor");
let saveContentBtn = document.getElementById("saveBtn");
let errorInfo = document.getElementById("error");
let areWeSaving = false

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw Error("failed to execute request");
  }
}

function initiateTextEditor() {
    fetch(`/api/text`)
    .then(checkStatus)
    .then((response) => response.json())
    .then((data) => {
      textEditor.innerHTML = data.content;
      errorInfo.innerHTML = "";
    })
    .catch((err) => {
      errorInfo.innerHTML += "Error: Could not load the file.";
    });
}

function format(command, value) {
  document.execCommand(command, false, value);
}

saveContentBtn.addEventListener("click", function () {
  if (areWeSaving) {
    return
  } 

  areWeSaving = true
  //saveContentBtn.innerHTML = "saving..."

  let requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: textEditor.innerHTML }),
  };

  fetch(`/api/text`, requestOptions)
  .then(() => {
      areWeSaving = false
      //saveContentBtn.innerHTML = "SAVE"

  })
  .catch((err) => {
    areWeSaving = false
    errorInfo.innerHTML += "Error: Could not save.";
  });
});


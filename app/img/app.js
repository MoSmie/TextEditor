
let textEditor;
let addItemBtn = document.getElementById("save")
let contentOfTextEditor; 

function initiateDocs() {
    // fetch(`/api/text`)
    //   .then(checkStatus)
    //   .then((response) => response.json())
    //   .then((data: Array<Recipe>) => {
    //     setAllRecipes(data);
    //   })
    //   .catch((err: Error) => {
    //     setError("Error! Could not load recipes");
    //   });


    textEditor = document.getElementById("textBox");
}

function format(command, value) {
    document.execCommand(command, false, value);

}

addItemBtn.addEventListener('click', function() {
    contentOfTextEditor = textEditor.innerHTML; 
    console.log(contentOfTextEditor)

    let json = JSON.stringify(contentOfTextEditor);
    console.log(json)
})
format ()
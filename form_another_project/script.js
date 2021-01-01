/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */



((D, B, log = (arg) => console.log(arg)) => {
  const dropZone = D.querySelector("div");
  const input = D.querySelector("input");
  let file;

  D.addEventListener("dragover", (ev) => ev.preventDefault());
  D.addEventListener("drop", (ev) => ev.preventDefault());

  dropZone.addEventListener("drop", (ev) => {
    ev.preventDefault();

    log(ev.dataTransfer);

    file = ev.dataTransfer.files[0];

    log(file);

    handleFile(file);
  });

  dropZone.addEventListener("click", () => {
    input.click();
    input.addEventListener("change", () => {
      log(input.files);

      file = input.files[0];

      log(file);
      const dateStamp = file.lastModified;
      handleFile(file);
    });
  });
  var context = [];
  var recordsBP = [];
  var oneStrformFile = "";
  const handleFile = (file) => {
    dropZone.remove();
    input.remove();

    // log(file.type);
    // let fileExtention = file.name.split(".")[file.name.split(".").length = 1]
    if (
      (file.name != "DataTreeBP.CSV") &&
      (file.name != "DataTreeSubBP.CSV")
    ) { return; }



    switch (file.name) {

      case "DataTreeBP.CSV":
        // createText("DataTreeBP.CSV");
        const reader = new FileReader();
        //let textArray = 
        reader.readAsText(file, "windows-1251");

        reader.onload = async (dateStamp) => {
          //B.innerHTML = `<p><pre>${reader.result}</pre></p>`
          context = reader.result.split("\n");

          for (let i = 0; i < context.length; i++) {
            oneStrformFile = context[i].split("\",\"");
            recordsBP.push(
              [oneStrformFile[0].slice(1), oneStrformFile[1],
              oneStrformFile[2], oneStrformFile[3], oneStrformFile[4],
              oneStrformFile[5], oneStrformFile[6], oneStrformFile[7],
              oneStrformFile[8], dateStamp]
            )
            let myJson = {
              id: oneStrformFile[0].slice(1),
              num: oneStrformFile[1],
              name: oneStrformFile[2],
              owner: oneStrformFile[3],
              shortname: oneStrformFile[4],
              detalisationexist: oneStrformFile[5],
              parent: oneStrformFile[6],
              datebegin: oneStrformFile[7],
              dateend: oneStrformFile[8],
              dateload: dateStamp

            };
           // var myJSONstr = JSON.stringify(myJson);
            const url = 'http://localhost:8081/api/bpload/';
           // let data = { username: 'example' };

            try {
              const response = await fetch(url, {
                method: 'POST', // или 'PUT'
                body: JSON.stringify(myJson), // данные могут быть 'строкой' или {объектом}!
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              const json = await response.json();
              console.log('Успех:', JSON.stringify(json));
            } catch (error) {
              console.error('Ошибка:', error);
            }

          }


          // return recordsBP;
        };
        let s = 0;
        break;

      default:
        B.innerHTML = `<h3>Unknown File Format!</h3>`;
        const timer = setTimeout(() => {
          location.reload();
          clearTimeout(timer);
        }, 2000);
        break;
    }
  };

  const createImage = (image) => {
    const imageEl = D.createElement("img");
    imageEl.src = URL.createObjectURL(image);
    log(imageEl);
    B.append(imageEl);
    URL.revokeObjectURL(image);
  };

  const createAudio = (audio) => {
    const audioEl = D.createElement("audio");
    audioEl.setAttribute("controls", "");
    audioEl.src = URL.createObjectURL(audio);
    log(audioEl);
    B.append(audioEl);
    audioEl.play();
    URL.revokeObjectURL(audio);
  };

  const createVideo = (video) => {
    const videoEl = D.createElement("video");
    videoEl.setAttribute("controls", "");
    videoEl.setAttribute("loop", "true");
    videoEl.src = URL.createObjectURL(video);
    log(videoEl);
    B.append(videoEl);
    videoEl.play();
    URL.revokeObjectURL(video);
  };

  const createText = (text) => {
    const reader = new FileReader();
    reader.readAsText(text, "windows-1251");
    reader.onload = () => (B.innerHTML = `<p><pre>${reader.result}</pre></p>`);
  };
  const createXml = (text) => {
    const reader = new FileReader();
    var oParser = new DOMParser();
    var oDOM = oParser.parseFromString(text, "application/xml");
    // print the name of the root element or error message
    console.log(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
    // reader.readAsText(text, "windows-1251");
    reader.onload = () => (B.innerHTML = `<p><pre>${reader.result}</pre></p>`);
  };
  const createIframe = (pdf) => {
    const iframe = D.createElement("iframe");
    iframe.src = URL.createObjectURL(pdf);
    iframe.width = innerWidth;
    iframe.height = innerHeight;
    log(iframe);
    B.append(iframe);
    URL.revokeObjectURL(pdf);
  };
})(document, document.body);


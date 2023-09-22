import Icons from "../../assets/icons/Icons";
import './Document_Section.css';

let files = [];
export default function DisplayFiles(fileName, size) {
  let dotNum = fileName.indexOf(".");
 
  let spaceNum = fileName.indexOf(" ");

  if (spaceNum !== -1 && spaceNum <= dotNum)
    fileName = fileName.slice(0, spaceNum);
  else fileName = fileName.slice(0, dotNum);
  files.push({ nameOfFile: fileName, fileSize: size });
  console.log(files);
  display();
}

function display() {
  let html = "";
  for (let i = 0; i < files.length; i++) {
   
    html += `

    <div class="fileContainer" >
               
  
<img src=${Icons.excel_icon} alt="file_icon" />
<h6>${files[i].nameOfFile}</h6>
<p>${files[i].fileSize}</p>

<img src=${Icons.cross_icon} alt="cross-icon" />
</div> 
`

   
  }
  document.getElementById("upload-file").innerHTML= html;
 
}



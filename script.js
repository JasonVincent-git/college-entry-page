var form = document.getElementById('form');
var collegeName = document.getElementById('collegeName');
var repName = document.getElementById('repName');
var repEmail = document.getElementById('repEmail');

var cName = Array();
var rName = Array();
var rEmail = Array();

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
  form.reset();
  Table();
});

function checkInputs(){
  
  if(collegeName.value.trim() === '') {
		setErrorFor(collegeName, 'College Name cannot be blank');
	}else{setSuccessFor(collegeName);}
  if(repName.value.trim() === '') {
		setErrorFor(repName, 'Representative Name cannot be blank');
	}else{setSuccessFor(repName);}
  if(repEmail.value.trim() === '') {
		setErrorFor(repEmail, 'Representative Email cannot be blank');
	}else{setSuccessFor(repEmail);}
  
  if(collegeName.value!=='' && repName.value!=='' && repEmail.value!==''){
    cName.push(collegeName.value.trim());
    rName.push(repName.value.trim());
    rEmail.push(repEmail.value.trim());
  }
}


function setErrorFor(input, message) {
	const Control = input.parentElement;
  Control.className = "control error";
	const small = Control.querySelector('small');
	small.innerText = message;
}
function setSuccessFor(input){
  const Control = input.parentElement;
  Control.className = "control success";
}

function Table(){
  var text = "<table>";
  text += "<tr>";
  text += "<th>" + "College Name" + "</th>";
  text += "<th>" + "Representative Name" + "</th>";
  text += "<th>" + "Representative Email" + "</th>";
  text += "</tr>";
  for(i=0; i<cName.length; i++){
    text += "<tr>";
    text += "<td>" + cName[i] + "</td>";
    text += "<td>" + rName[i] + "</td>";
    text += "<td>" + rEmail[i] + "</td>";
    text += "</tr>";
  }
  text+= "</table>";
  
  document.getElementById("table").innerHTML = text;
}
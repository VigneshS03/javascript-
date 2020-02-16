function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num=="")
	{
		document.getElementById("output-value").innerText=num;
	}
	else{
	document.getElementById("output-value").innerText=getformatted(num);	
	}
}

function getformatted(num)
{
	if(num=="-")
	{
		return "";
	}
	var n=Number(num);
	var value=n.toLocaleString("en");
	return value;
}
function reversenumber(num){
	return Number(num.replace(/,/g,''));
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
	operator[i].addEventListener('click',function(){
		if(this.id=="clear")
		{
				printHistory("");
				printOutput("");
		}
		if(this.id=="backspace"){
			var output=reversenumber(getOutput()).toString();
			if(output){
				output=output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!="")
			{
				if(isNaN(history[history.length-1]))
				{
					history=history.substr(0,output.length-1);
					printOutput(output);
				}
			}
			if(output!=""||history!="")
			{
				output=reversenumber(output);
				history=history+output;
				if(this.id=="=")
				{
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	}); 
}

var number=document.getElementsByClassName("number");
for(var i=0;i<operator.length;i++)
{
	number[i].addEventListener('click',function(){
		var output=reversenumber(getOutput());
		if(output!=NaN)
		{
			output=output+this.id;
			printOutput(output);
		}
	}); 
}
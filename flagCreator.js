settings = new Array();
settings['controlPane'] = $('#controlPane');
settings['previewPane'] = $("#previewPane");

var paintInfo = 
{
    "layers": [
        {
            "name": "Background",
            "elements": [
	            {
                    "name": "empty",
                    "displayName": "None",
                    "colors": []
                },
                {
                    "name": "solidBackground",
                    "displayName": "Solid Background",
                    "colors": [
                        {
                        	"type":"rect",
                            "width": 1,
                            "height": 1,
                            "x": 0,
                            "y": 0
                        }
                    ]
                }                
            ]
        }
    ]
}

var previewWindowInfo = 
{
	"height":200,
	"width":350
}
var dataArray = new Array();
function generateDataArray(){
	for(x=0;x<paintInfo.layers.length;x++){
		layerPush = new Array();
		layerPush['name'] = paintInfo.layers[x].name;
		layerPush['activeElement'] = new Array();
		layerPush.activeElement['elementNum'] = 0;
		layerPush.activeElement['colors'] = new Array();
		dataArray.push(layerPush);
	}
}



function initUI(){
	var html = new Array();
	generateDataArray();
	//create the control pane
	html.push("<h1>Control Pane</h1>");
	html.push("<h2>Layers</h2>");
	for(x=0;x<paintInfo.layers.length;x++){
		html.push("<h3>"+paintInfo.layers[x].name+"</h3>");
		html.push("<div class='btn-group'>");
		for(y=0;y<paintInfo.layers[x].elements.length;y++){
			html.push("<button type='button' class='btn btn-default' onclick='elementButtonClick("+x+","+y+")'>"+paintInfo.layers[x].elements[y].displayName+"</button>");
		}
		
		html.push("</div>");
	}
	console.log(html);
	var content;
	for(i=0;i<html.length;i++){
		content = content + html[i];
	}
	$("#controlPane").append(content);

	//create the preview pane
	$("#previewPane").append("<div id='previewPicture'></div><div id='previewControls'></div>");
}

function elementButtonClick(layerNum,elementNum){
	dataArray[layerNum].activeElement = new Array(); //create array of data
	//set array data
	dataArray[layerNum].activeElement['elementNum'] = elementNum; //number of the element
	//updat the data array to store the colors needed
	dataArray[layerNum].activeElement['colors'] = new Array();
	for(x=0;x<paintInfo.layers[layerNum].elements[elementNum].colors.length;x++){
		dataArray[layerNum].activeElement['colors'].push("#000000");
	}
	//get number of colors that need to be picked
	updatePreviewPaneControls();
	elementColors = paintInfo.layers[layerNum].elements[elementNum].colors.length;
	//get element name, and push out the colors. 
}

function updatePreviewPaneControls(){
	$("#previewControls").empty();
	//run through each layer
	for(x=0;x<dataArray.length;x++){
		//get the name of the layer, and the active element
		//output needs to be in form of layer: active element
		layerName = paintInfo.layers[x].name; //directly getting the layer name
		activeElement = dataArray[x].activeElement.elementNum; //get the activeElementNum
		activeElementName = paintInfo.layers[x].elements[activeElement].displayName;
		titleName = layerName + ": " + activeElementName; //the title that is going to be displayed

		//get the number of colors that are needed, and generate colorpickers accordingly. 
		elementColorNum = paintInfo.layers[x].elements[activeElement].colors.length;
		html = new Array();
		html.push(titleName + "<br>");
		while(elementColorNum > 0){
			--elementColorNum;
			dataLayer = x; //assigning a human readable value to the same variable
			html.push("<input type='color' data-layer='"+ dataLayer + "' data-element='" + elementColorNum + "' class='spectrum'>");
		}
		pushHTML($("#previewControls"),html);
		startSpectrum();
	}
}

function pushHTML(element,array){
	var content = "";
	for(i=0;i<array.length;i++){
		content = content + array[i];
	}
	element.append(content);
}

function startSpectrum(){
	$(".spectrum").spectrum({
		color: "#f00",
		showInput: true,
		clickoutFiresChange: true,
		change: function(color){
			//get info on the element from the data attributes
			domData = $(this).data();
			value = $(this).val();
			//assign human redable values to the variables
			layerNum = domData.layer;
			elementNum = domData.element;
			//update the array to reflect the value
			dataArray[layerNum].activeElement.colors[elementNum] = value;
			updateImage();
		}
	});
}

function updateImage(){
	svgCode = generateSVG();
	$("#previewPicture").empty();
	$("#previewPicture").append(svgCode);
}

function generateSVG(){
	svg = new Array();
	svg.push("<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.0' x='0' y='0' width='"+previewWindowInfo.width+"' height='"+previewWindowInfo.height + "'>");
	//cycle through each layer
	for(x=0;x<dataArray.length;x++){
		//cycle through the array
		//get active element
		activeElementNum  = dataArray[x].activeElement.elementNum;
		colorArray = dataArray[x].activeElement.colors; //get the selected colors for the img
		//cycle through all of the colors in the array
		for(y=0;y<paintInfo.layers[x].elements[activeElementNum].colors.length;y++){
			console.log(x);
			layer = generateSVGLayer(paintInfo.layers[x].elements[activeElementNum].colors[y],colorArray[y]);
			svg.push(layer);

		}
	}

	//svg.push("<rect width='"+previewWindowInfo.width+"' height='"+previewWindowInfo.height + "' x='0' y='0' fill='#333333' />");

	svg.push("</svg>");
	var content = "";
	for(x=0;x<svg.length;x++){
		content = content + svg[x];
	}
	return content;
}

function generateSVGLayer(colorObject,colorHex){
	element = new Array();
	element.push("<");
	element.push(colorObject.type + " ");
	for (var key in colorObject) {
		if (colorObject.hasOwnProperty(key)) {
		    //console.log(key + " -> " + colorObject[key]);
		    var pushString = "";
		    switch(key){
		    	case "width":
		    		//get actual width from the percentage
		    		actualWidth = previewWindowInfo.width * colorObject[key];
		    		pushString = "width = '"+actualWidth+"' ";
		    		break;
				case "height":
					//get actual height from the percentage
					actualHeight = previewWindowInfo.height * colorObject[key];
					pushString = "height = '" + actualHeight + "' ";
					break;
				case "x":
					pushString = "x = '" + colorObject[key] + "' ";
					break;
				case "y":
					pushString = "y = '" + colorObject[key] + "' ";
					break; 	
		    }
		    element.push(pushString);
		}
	}
	element.push("fill = '" + colorHex + "' ");
	element.push("/>")
	finalStr = compileArray(element);
	return finalStr;
}

function compileArray(array){
	var string = "";
	for (c=0;c<array.length;c++){
		string = string + array[c];
	}
	return string;
}
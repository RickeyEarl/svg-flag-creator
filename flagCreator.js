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
                    "name": "solidBackground",
                    "displayName": "Solid Background",
                    "colors": [
                        {
                            "width": 100,
                            "height": 100,
                            "x": 0,
                            "y": 0
                        }
                    ]
                },
                {
                    "name": "empty",
                    "displayName": "None",
                    "colors": []
                }
            ]
        }
    ]
}
var dataArray = new Array();
function generateDataArray(){
	for(x=0;x<paintInfo.layers.length;x++){
		layerPush = new Array();
		layerPush['name'] = paintInfo.layers[x].name;
		layerPush['activeElement'] = new Array();
		layerPush.activeElement['elmentNum'] = 0;
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
}

function elementButtonClick(layerNum,elementNum){
	dataArray[layerNum].activeElement = elementNum;
	//get number of colors that need to be picked
	updatePreviewPaneControls();
	elementColors = paintInfo.layers[layerNum].elements[elementNum].colors.length;
	//get element name, and push out the colors. 
}

function updatePreviewPaneControls(){
	$("#previewPane").empty();
	//run through each layer
	for(x=0;x<dataArray.length;x++){
		//get the name of the layer, and the active element
		//output needs to be in form of layer: active element
		layerName = paintInfo.layers[x].name; //directly getting the layer name
		activeElement = dataArray[x].activeElement; //get the activeElementNum
		activeElementName = paintInfo.layers[x].elements[activeElement].displayName;
		titleName = layerName + ": " + activeElementName; //the title that is going to be displayed
		console.log(titleName);

		//get the number of colors that are needed, and generate colorpickers accordingly. 
		elementColorNum = paintInfo.layers[x].elements[activeElement].colors.length;
		html = new Array();
		html.push(titleName + "<br>");
		while(elementColorNum > 0){
			--elementColorNum;
			html.push("<input type='color' class='spectrum'>");
		}
		pushHTML($("#previewPane"),html);
		$(".spectrum").spectrum({
		    color: "#f00",
		    change: function(color) {
		       console.log(color.toHexString());
		    }
		});
	}
}

function pushHTML(element,array){
	var content = "";
	for(i=0;i<array.length;i++){
		content = content + array[i];
	}
	element.append(content);
}

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
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 1,
                                "x": 0,
                                "y": 0
                            }
                        ]
                    ]
                },
                {
                    "name": "halfSplitHoriz",
                    "displayName": "2 Color 1/2 Horizontal Split",
                    "colors": [
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.5,
                                "x": 0,
                                "y": 0.5
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.5,
                                "x": 0,
                                "y": 0
                            }
                        ]
                    ]
                },
                {
                    "name": "halfSplitVert",
                    "displayName": "2 Color 1/2 Vertical Split",
                    "colors": [
                        [
                            {
                                "type": "rect",
                                "width": 0.5,
                                "height": 1,
                                "x": 0.5,
                                "y": 0
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 0.5,
                                "height": 1,
                                "x": 0,
                                "y": 0
                            }
                        ]
                    ]
                },
                {
                    "name": "thirdSplitVert",
                    "displayName": "3 Color 1/3 Vertical Split",
                    "colors": [
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.3,
                                "x": 0,
                                "y": 0.6
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.3,
                                "x": 0,
                                "y": 0.3
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.3,
                                "x": 0,
                                "y": 0
                            }
                        ]
                    ]
                },
                {
                    "name": "thirdSplitHoriz",
                    "displayName": "3 Color 1/3 Horizontal Split",
                    "colors": [
                        [
                            {
                                "type": "rect",
                                "width": 0.3,
                                "height": 1,
                                "x": 0.6,
                                "y": 0
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 0.3,
                                "height": 1,
                                "x": 0.3,
                                "y": 0
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 0.3,
                                "height": 1,
                                "x": 0,
                                "y": 0
                            }
                        ]
                    ]
                },
                {
                    "name": "2ColorCheck",
                    "displayName": "2 Color Large Rectangles",
                    "colors": [
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 1,
                                "x": 0,
                                "y": 0
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 0.5,
                                "height": 0.5,
                                "x": 0,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.5,
                                "height": 0.5,
                                "x": 0.5,
                                "y": 0.5
                            }
                        ]
                    ]
                },
                {
                    "name": "stripesHoriz",
                    "displayName": "Horizontal Stripes",
                    "colors": [
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 1,
                                "x": 0,
                                "y": 0
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.1,
                                "x": 0,
                                "y": 0.1
                            },
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.1,
                                "x": 0,
                                "y": 0.3
                            },
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.1,
                                "x": 0,
                                "y": 0.5
                            },
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.1,
                                "x": 0,
                                "y": 0.7
                            },
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 0.1,
                                "x": 0,
                                "y": 0.9
                            }
                        ]
                    ]
                },
                {
                    "name": "stripesVert",
                    "displayName": "Vertical Stripes",
                    "colors": [
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 1,
                                "x": 0,
                                "y": 0
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 1,
                                "x": 0.1,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 1,
                                "x": 0.3,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 1,
                                "x": 0.5,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 1,
                                "x": 0.7,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 1,
                                "x": 0.9,
                                "y": 0
                            }
                        ]
                    ]
                },
                {
                    "name": "fullCheck",
                    "displayName": "Full checkered",
                    "colors": [
                        [
                            {
                                "type": "rect",
                                "width": 1,
                                "height": 1,
                                "x": 0,
                                "y": 0
                            }
                        ],
                        [
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.2,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.4,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.6,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.8,
                                "y": 0
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.1,
                                "y": 0.2
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.3,
                                "y": 0.2
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.5,
                                "y": 0.2
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.7,
                                "y": 0.2
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.9,
                                "y": 0.2
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0,
                                "y": 0.4
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.2,
                                "y": 0.4
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.4,
                                "y": 0.4
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.6,
                                "y": 0.4
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.8,
                                "y": 0.4
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.1,
                                "y": 0.6
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.3,
                                "y": 0.6
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.5,
                                "y": 0.6
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.7,
                                "y": 0.6
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.9,
                                "y": 0.6
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0,
                                "y": 0.8
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.2,
                                "y": 0.8
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.4,
                                "y": 0.8
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.6,
                                "y": 0.8
                            },
                            {
                                "type": "rect",
                                "width": 0.1,
                                "height": 0.2,
                                "x": 0.8,
                                "y": 0.8
                            },
                        ]
                    ]
                },
                {
                	"name" : "diagSplitHalf",
                	"displayName" : "1/2 Split Diagional",
                	"colors" : [
                		[
                			{
                				"type" : "rect",
                				"width" : 1,
                				"height" : 1,
                				"x" : 0,
                				"y" : 0
                			}
                		],
                		[
                			{
                				"type" : "polygon",
                				"points":[
                					[0,0],
                					[0,1],
                					[1,1]
            					]
                			}
                		]
                	]
                },
                {
                	"name" : "diagSplitHalfFlipped",
                	"displayName" : "1/2 Split Diagional Flipped",
                	"colors" : [
                		[
                			{
                				"type" : "rect",
                				"width" : 1,
                				"height" : 1,
                				"x" : 0,
                				"y" : 0
                			}
                		],
                		[
                			{
                				"type" : "polygon",
                				"points":[
                					[1,0],
                					[0,1],
                					[1,1]
            					]
                			}
                		]
                	]
                },
                {
                	"name" : "diagSplitHalfFlipped",
                	"displayName" : "1/2 Split Diagional Flipped",
                	"colors" : [
                		[
                			{
                				"type" : "rect",
                				"width" : 1,
                				"height" : 1,
                				"x" : 0,
                				"y" : 0
                			}
                		],
                		[
                			{
                				"type" : "polygon",
                				"points":[
                					[0,0],
                					[0.5,0.5],
                					[0,1]
            					]
                			},
                			{
                				"type" : "polygon",
                				"points":[
                					[1,0],
                					[0.5,0.5],
                					[1,1]
            					]
                			}
                		]
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
	updateImage();
}

function elementButtonClick(layerNum,elementNum){
	dataArray[layerNum].activeElement = new Array(); //create array of data
	//set array data
	dataArray[layerNum].activeElement['elementNum'] = elementNum; //number of the element
	//updat the data array to store the colors needed
	dataArray[layerNum].activeElement['colors'] = new Array();
	for(x=0;x<paintInfo.layers[layerNum].elements[elementNum].colors.length;x++){
		dataArray[layerNum].activeElement['colors'].push("#ffffff");
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
			console.log(value);
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
			for(z=0;z<paintInfo.layers[x].elements[activeElementNum].colors[y].length;z++){
				layer = generateSVGLayer(paintInfo.layers[x].elements[activeElementNum].colors[y][z],colorArray[y]);
				svg.push(layer)
			}
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
					pushString = "x = '" + (previewWindowInfo.width * colorObject[key]) + "' ";
					break;
				case "y":
					pushString = "y = '" + (previewWindowInfo.height * colorObject[key]) + "' ";
					break; 	
				case "points":
					pointString = getPointsStringFromArray(colorObject[key]);
					pushString = "points= '" + pointString + "' ";
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

function getPointsStringFromArray(pointArray){
	pointStringReturnString = new Array();
	for(t=0;t<pointArray.length;t++){
		xval = pointArray[t][0];
		yval = pointArray[t][1];
		realXVal = xval * previewWindowInfo.width;
		realYVal = yval * previewWindowInfo.height;
		pointStringReturnString.push(realXVal + "," + realYVal + " ");
	}
	compileString = compileArray(pointStringReturnString);
	return compileString;
}

function compileArray(array){
	var string = "";
	for (c=0;c<array.length;c++){
		string = string + array[c];
	}
	return string;
}
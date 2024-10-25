var canvas = new fabric.Canvas('paper',{
	isDrawingMode: true
});

$("#select").click(function(){
    canvas.isDrawingMode = false;
});
$("#draw").click(function(){
    canvas.isDrawingMode = true;
});

$("#group").on('click', function() {
    var activegroup = canvas.getActiveGroup();
    var objectsInGroup = activegroup.getObjects();

    activegroup.clone(function(newgroup) {
        canvas.discardActiveGroup();
        objectsInGroup.forEach(function(object) {
		    canvas.remove(object);  
	    });
        canvas.add(newgroup);
        
    });
});

$("#ungroup").click(function(){
   var activeObject = canvas.getActiveObject();
    if(activeObject.type=="group"){
        var items = activeObject._objects;
        alert(items);
        activeObject._restoreObjectsState();
        canvas.remove(activeObject);
        for(var i = 0; i < items.length; i++) {
          canvas.add(items[i]);
          canvas.item(canvas.size()-1).hasControls = true;
        }
         
        canvas.renderAll();
    }
});

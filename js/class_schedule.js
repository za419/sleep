var edit =  document.getElementById("edit");
var table = document.getElementById("table");
edit.onclick=function(){
	var ope = edit.innerHTML;
	if (ope == "Edit") {
		var rows = table.rows;
		for (var i = 1; i < rows.length; i++) {
			var len = rows[i].cells.length;
			var j = 0;
			if (len == 8) j = 1;
			for (; j < rows[i].cells.length; j++) {
				var cell = rows[i].cells[j];
				var course = cell.innerHTML;
				if (course.length > 1) {
					course = course.split('<br>');
					cell.innerHTML = "<input type='text' id = c"+i+j+" value = '"+course[0]+"' class = 'class_input'/><br><input type='text' id = t"+i+j+" value = '"+course[1]+"' class = 'time_input'/>";
				}
				else
					cell.innerHTML = "<input type='text' id = c"+i+j+" placeholder='class' class = 'class_input'/><br><input type='text' id = t"+i+j+" placeholder='time' class = 'time_input'/>";

			}
		}
		edit.innerHTML = "Save";
	}else {
		var rows = table.rows;
		for (var i = 1; i < rows.length; i++) {
			var len = rows[i].cells.length;
			var j = 0;
			if (len == 8) j = 1;
			for (; j < rows[i].cells.length; j++) {
				var cell = rows[i].cells[j];
				var course = document.getElementById("c"+i+j).value;
				var time = document.getElementById("t"+i+j).value;
				if (course.length > 1) {
					course = course.split('<br>');
					cell.innerHTML = course+"<br>"+time;
				}
				else
					cell.innerHTML = "";

			}
		}
		edit.innerHTML = "Edit";
	}
}





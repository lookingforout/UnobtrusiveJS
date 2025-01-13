document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnClick").addEventListener("click", () => {
      alert("Аз се появявам при единично кликване.");
    });
  
    document.getElementById("btnDblClick").addEventListener("dblclick", () => {
      alert("Аз се появявам при двукратно кликване.");
    });
  
    document.getElementById("btnMouseDown").addEventListener("mousedown", () => {
      alert("Аз се появявам при натискане на бутона.");
    });
  
    document.getElementById("btnMouseMove").addEventListener("mousemove", () => {
      alert("Аз се появявам при минаване на мишката през мен.");
    });
  
    document.getElementById("btnMouseOut").addEventListener("mouseout", () => {
      alert("Аз се появявам след минаване на мишката през мен.");
    });
  
    document.getElementById("btnMouseOver").addEventListener("mouseover", () => {
      alert("Аз се появявам при първото преминаване на мишката през мен.");
    });
  
    document.getElementById("btnMouseUp").addEventListener("mouseup", () => {
      alert("Аз се появявам след натискане.");
    });
  
    document.getElementById("btnWheel").addEventListener("wheel", () => {
      alert("Аз се появявам при използване на колелото на мишката.");
    });
  
    const btnMultiple = document.getElementById("btnMultiple");
    btnMultiple.addEventListener("click", () => {
      console.log("onclick");
    });
    btnMultiple.addEventListener("mousedown", () => {
      console.log("onmousedown");
    });
    btnMultiple.addEventListener("mouseup", () => {
      console.log("onmouseup");
    });
  
    document.getElementById("btnTwoAlerts").addEventListener("click", () => {
      alert("Първо съобщение.");
      alert("Второ съобщение.");
    });
  
    let counter = 0;
    document.getElementById("btnCounter").addEventListener("click", () => {
      counter++;
      alert(`Брояч: ${counter}`);
    });
  });  
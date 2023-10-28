var $table = document.getElementById("customers"),
    $n = 50, $rowCount = $table.rows.length,
    $firstRow = $table.rows[0].firstElementChild.tagName,
    $hasHead = ($firstRow === "TH"),
    $tr = [], $i, $ii, $j = ($hasHead) ? 1 : 0,
    $th = ($hasHead ? $table.rows[(0)].outerHTML : "");
var $pageCount = Math.ceil($rowCount / $n);
if ($pageCount > 1) {
    $lastElement = 0;
    for ($i = $j, $ii = 0; $i < $rowCount; $i++, $ii++) {
        $tr[$ii] = $table.rows[$i].outerHTML; $lastElement = $ii + 1
    } $table.insertAdjacentHTML("afterend", "<div id='buttons'></div"); sort(1);
} 
function sort($p) 
{ 
    var $rows = $th, $s = (($n * $p) - $n); 
    for ($i = $s; $i < ($s + $n) && $i < $tr.length; $i++) 
    $rows += $tr[$i]; $table.innerHTML = $rows; 
    document.getElementById("buttons").innerHTML = pageButtons($pageCount, $p); 
    document.getElementById("id" + $p).setAttribute("class", "active"); 
}
 function pageButtons($pCount, $cur) 
 { 
    var $prevDis = ($cur == 1) ? "disabled" : "",
    $nextDis = ($cur == $pCount) ? "disabled" : "", 
    $buttons = "<input type='button' value='< Prev' onclick='sort(" + ($cur - 1) + ")' " + $prevDis + ">"; 
    for ($i = 1; $i <= $pCount; $i++) 
    $buttons += "<input type='button' id='id" + $i + "'value='" + $i + "' onclick='sort(" + $i + ")'>"; 
    $buttons += "<input type='button' value='Next >>' onclick='sort(" + ($cur + 1) + ")' " + $nextDis + ">"; return $buttons;
 } 
 function addRow() {
   
    var row = document.createElement("tr"); 
    var td1 = document.createElement("td");
    var td2 = document.createElement("td"); 
    var td3 = document.createElement("td"); 
    var td4 = document.createElement("td"); 
    var td5 = document.createElement("td");
    var td6 = document.createElement("td"); 
    td1.innerHTML = document.getElementById("item").value; 
    td2.innerHTML = document.getElementById("quantity").value;
    td3.innerHTML = document.getElementById("price").value;
    td4.innerHTML = document.getElementById("item1").value; 
    td5.innerHTML = document.getElementById("quantity1").value; 
    td6.innerHTML = document.getElementById("price1").value;
    row.appendChild(td1); row.appendChild(td2); 
    row.appendChild(td3); row.appendChild(td4); 
    row.appendChild(td5); row.appendChild(td6); 
    let legthOfNewTable = $tr.length; $tr[legthOfNewTable] = row.outerHTML;
    
    sort(1);
}
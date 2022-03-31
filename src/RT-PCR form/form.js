
import { checkEmptyInput } from "./inputvalidation.js";
import { store } from "./entrytable.js";


export function move() {
    if (!checkEmptyInput()) {
      document.getElementById("msg").style.display = "none";
      var fname = document.getElementById("fname").value,
        dob = document.getElementById("dob").value,
        gender = document.getElementById("gender").value,
        city = document.getElementById("city").value,
        date = document.getElementById("date").value,
        time = document.getElementById("time").value,
        lab = document.getElementById("lab").value,
        report = document.getElementById("report").value,
        result = document.getElementById("result").value,
        aadhar = document.getElementById("aadhar").value;
      let store_obj = {
        firstname: fname,
        "date of birth": dob,
        gender: gender,
        city: city,
        date: date,
        time: time,
        lab: lab,
        report: report,
        result: result,
        aadhar: aadhar,
      };
      store.push(store_obj);
      var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        cell8 = newRow.insertCell(7),
        cell9 = newRow.insertCell(8),
        cell10 = newRow.insertCell(9);
      cell1.innerHTML = store_obj["firstname"];
      cell2.innerHTML = store_obj["date of birth"];
      cell3.innerHTML = store_obj["gender"];
      cell4.innerHTML = store_obj["city"];
      cell5.innerHTML = store_obj["date"];
      cell6.innerHTML = store_obj["time"];
      cell7.innerHTML = store_obj["lab"];
      cell8.innerHTML = store_obj["report"];
      cell9.innerHTML = store_obj["result"];
      cell10.innerHTML = store_obj["aadhar"];
    }
  }
   export function myFunction() {
      var input, i;
      input = document.getElementById("find").value;
     var table = document.getElementById("table");
      var tr = table.getElementsByTagName("tr");
      if (tr.length === 1) {
        document.getElementById("msg").innerHTML =
          "***There Is No Record Found!***";
      } else {
        for (i = 1; i < tr.length; i++) {
          if (table.rows[i].cells[9].innerHTML === input) {
            var newRow1 = table1.insertRow(table1.length),
              cell1 = newRow1.insertCell(0),
              cell2 = newRow1.insertCell(1),
              cell3 = newRow1.insertCell(2),
              cell4 = newRow1.insertCell(3),
              cell5 = newRow1.insertCell(4),
              cell6 = newRow1.insertCell(5),
              cell7 = newRow1.insertCell(6),
              cell8 = newRow1.insertCell(7),
              cell9 = newRow1.insertCell(8),
              cell10 = newRow1.insertCell(9);
            cell1.innerHTML = table.rows[i].cells[0].innerHTML;
            cell2.innerHTML = table.rows[i].cells[1].innerHTML;
            cell3.innerHTML = table.rows[i].cells[2].innerHTML;
            cell4.innerHTML = table.rows[i].cells[3].innerHTML;
            cell5.innerHTML = table.rows[i].cells[4].innerHTML;
            cell6.innerHTML = table.rows[i].cells[5].innerHTML;
            cell7.innerHTML = table.rows[i].cells[6].innerHTML;
            cell8.innerHTML = table.rows[i].cells[7].innerHTML;
            cell9.innerHTML = table.rows[i].cells[8].innerHTML;
            cell10.innerHTML = table.rows[i].cells[9].innerHTML;
          }
        }
      }
    }
  
// function getTime() {
//   var country = document.getElementById("timezone").value;

//   let url = `http://worldtimeapi.org/api/timezone/${country}`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       var d = new Date();
//       let diff = d.getTimezoneOffset();
//       // console.log(offc);
//       utc = d.getTime() + d.getTimezoneOffset() * 60000;
//       let offset = data.utc_offset;

//       let [h, m] = offset.split(":");

//       let op = offset.charAt(0);

//       let off = Math.floor(h.substring(1) + "." + m);

//       if (op == "+") {
//         var newd = new Date(utc + 3600000 * off);
//       } else {
//         var newd = new Date(utc - 3600000 * off);
//       }

//       var readableDate = newd.toLocaleString();
//       document.getElementById("tresult").innerHTML = readableDate;
//       // document.getElementById('diff').innerText= "Time Difference : "+(offc + off);
//     });
// }

// function disp_TZ() {
//   //tz='Africa/Accra'
//   tz = f1.tz.options[f1.tz.options.selectedIndex].value;
//   str = new Date().toLocaleString("en-NZ", {
//     timeZone: tz,
//     timeZoneName: "short",
//   });

//   document.getElementById("ct").innerHTML = str + " , " + tz;

//   dt2 = new Date();
//   str2 = new Date(
//     dt2.toLocaleString("en-US", {
//       timeZone: tz,
//     })
//   );

//   diff = dt2.getTime() - str2.getTime();
//   dt3 = new Date(dt2.getTime() - diff);
//   hour = dt3.getHours();
//   minute = dt3.getMinutes();
//   seconds = dt3.getSeconds();
//   str3 = hour + ":" + minute + ":" + seconds;
//   document.getElementById("ct2").innerHTML = str3;

//   display_c();
// }
// function display_c() {
//   refresh = 1000;
//   mytime = setTimeout("disp_TZ()", refresh);
// }
// var my_timezones = ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa"];
// for (i = 0; i < my_timezones.length; i++) {
//   addOption(document.f1.tz, my_timezones[i], my_timezones[i]);
// }
// function addOption(selectbox, text, value) {
//   var optn = document.createElement("OPTION");
//   optn.text = text;
//   optn.value = value;
//   selectbox.options.add(optn);
// }

const sheetId = "1ti08DEHgZ-AXc6OVL0YNhXp5vObOOS1qlLsKB3MvrYA";  
const apiKey = "AIzaSyDLLRg4pzDhNBL8kj4ke3Z6WWaE70FBp7c";  

const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Лист1?key=${apiKey}&timestamp=${new Date().getTime()}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    let rows = data.values.slice(1);
    let tableBody = document.querySelector("#priceTable tbody");

    tableBody.innerHTML = "";  // Очищуємо таблицю перед оновленням

    rows.forEach(row => {
      let imgSrc = row[2] ? row[2] : "https://via.placeholder.com/80"; 
      let tr = `<tr>
          <td><img src="${imgSrc}" alt="${row[0]}"></td>
          <td>${row[0]}</td>
          <td>${row[1]}</td>
      </tr>`;
      tableBody.innerHTML += tr;
    });
  })
  .catch(error => console.error("Помилка завантаження даних: ", error));


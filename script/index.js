// const url = 'https://www.cbr-xml-daily.ru/daily_json.js';


// async function getUSD(url) {
//   try {
//     const response = await fetch(url);
//     console.log (response);
//     const data = await response.json();
//     console.log(data);
    
//     const div = document.createElement('div');
//     div.classList.add('ararararararar');
//     div.setAttribute('style', 'color: green; border: 5px solid black; border-radius: 5px');
//     console.log(div);
//     div.textContent = data.Valute.USD.ID;

//     document.querySelector('h1').textContent = data.Valute.USD.Name;
//     document.querySelector('.screen__captions p').textContent = data.Valute.USD.Value;

//     document.querySelector('.screen__captions').insertAdjacentElement('afterbegin', div);
    
//   } catch (err) {
//     console.log('ERROR >>>', err);
//   }

  
// }

// getUSD(url);

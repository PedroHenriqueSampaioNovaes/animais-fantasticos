export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      const valorReal = (100 / bitcoin.BRL.sell).toFixed(4); // 100 reais em bitcoin
      btcPreco.innerText = valorReal;
    });
}

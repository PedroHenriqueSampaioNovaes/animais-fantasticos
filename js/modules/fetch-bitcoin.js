export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.btc-preco');
    const valorReal = (100 / bitcoin.BRL.sell).toFixed(4);
    btcPreco.innerText = valorReal;
  })
}
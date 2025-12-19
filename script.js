document.getElementById('calcBtn').addEventListener('click', () => {
const score = Number(document.getElementById('score').value)
const avg = Number(document.getElementById('average').value)
const sd = Number(document.getElementById('sd').value)


const errorEl = document.getElementById('error')
const resultEl = document.getElementById('result')


errorEl.textContent = ''
resultEl.textContent = ''


if ([score, avg, sd].some(v => isNaN(v))) {
errorEl.textContent = 'すべて数値で入力してください'
return
}


if (sd === 0) {
errorEl.textContent = '標準偏差は0以外にしてください'
return
}


const hensachi = 50 + 10 * (score - avg) / sd
resultEl.textContent = `あなたの偏差値：${hensachi.toFixed(1)}`
})
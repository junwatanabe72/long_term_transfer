// string
export const appTitle = '不動産所有期間チェッカー'
export const lastH = '平成31年'
export const firstR = '令和元年'
export const yearChar = '年'
export const acYear = '取得年'
export const shortTerm = '短期譲渡'
export const longTerm = '長期譲渡'
export const overTerm = '10年超'

// date

const date = new Date()
const defaultYear = date.getFullYear()

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i
  }
}
const targetRange = 10
export const arr = [
  ...range(defaultYear - targetRange, defaultYear + targetRange),
]

// exchange wareki
const options = { era: 'short' as 'short' }
export const wareki = (num: number) => {
  const date = new Date(num.toString())
  const full = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(
    date,
  )
  const sp = full.split(/年|\//)
  return `${sp[0]}${yearChar}`
}

export const longTermYears = 6
export const overTermYears = 5

// head
export const description =
  '不動産売却時に長期譲渡所得と見做されるか、不動産の所有期間を判別するアプリケーションです！'
export const url = 'https://real-estate-holding-period-checker.work/'
export const imagePath = ''

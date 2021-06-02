// string
export const appTitle = '不動産所有期間チェッカー'
export const lastH = '平成31年'
export const firstR = '令和元年'
export const yearChar = '年'
export const acYear = '取得年'
export const shortTerm = '短期譲渡'
export const longTerm = '長期譲渡'
export const overTerm = '10年超'
export const tableHeads = ['西暦', '和暦', 'memo']

// date
const date = new Date()
const defaultYear = date.getFullYear()

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i
  }
}
const targetRange = 10
export const years = [
  ...range(defaultYear - targetRange, defaultYear + targetRange),
]

// exchange wareki
const short = 'short'
const options = { era: short as typeof short }
export const wareki = (num: number): string => {
  const date = new Date(num.toString())
  const full = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', options).format(
    date,
  )
  // iosとchromeでfullの出力が異なる
  const sp = full.split(/年|\//)
  return `${sp[0]}${yearChar}`
}

export const longTermYears = 6
export const overTermYears = 5

// head
export const description =
  '不動産売却時に長期譲渡所得と見做されるか、不動産の所有期間を判別するアプリケーションです！'
export const url = 'https://real-estate-holding-period-checker.work/'
export const imagePath = '../../../public/logo192.png'

// howto
export const howToText = '使い方は簡単！'
export const howToText2 = ['不動産取得年を', 'するだけ！']

export const ninjaID = '775269bed10e865976ced4b3e97329ca'

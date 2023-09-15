document.addEventListener('DOMContentLoaded', () => {
  fitTexts()
})

const fitTexts = () => {
  const texts = document.querySelectorAll('.fit-text')
  texts.forEach(text => fitText(text))
}

const fitText = (el) => {
  const min = 16 // Todo: make adjustable
  const max = getStyleValue(el, 'font-size')

  const textWidth = getWidth(el)
  const textLength = el.textContent.length

  const relativeSpace = textWidth / textLength // More characters, less space
  const fontModifier = 1.5 // Adjust if needed based on font character width

  const suggestedSize = Math.round(relativeSpace * fontModifier)

  const size =
    suggestedSize > max ? max
    : suggestedSize < min ? min
    : suggestedSize

  const info = {
    text: el.textContent,
    relativeSpace,
    'max (i.e. original size)': max,
    suggestedSize,
    size
  }

  // console.table(info)

  el.style.fontSize = `${size}px`;
}

const getStyleValue = (el, style) => {
  const value = window.getComputedStyle(el).getPropertyValue(style).replace('px', '')
  return parseInt(value)
}

const getWidth = (el) => {
  const leftPadding = getStyleValue(el, 'padding-left')
  const rightPadding = getStyleValue(el, 'padding-right')
  const totalPadding = leftPadding + rightPadding
  const availableWidth = el.offsetWidth - totalPadding

  return availableWidth
}

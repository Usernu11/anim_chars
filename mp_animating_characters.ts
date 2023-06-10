const bodyEl: HTMLBodyElement | null = document.querySelector('body')
const txtEl: HTMLDivElement | null = document.querySelector('.text')
const txt: string = '30 Days Of JavaScript Challenge 2023 Bohdan Lavrentiev'
const containerEl: HTMLDivElement | null = document.querySelector('.container')
const fontsArray: string[] = ['Comfortaa', 'Iceland', 'Josefin Sans', 'Kanit', 'Prompt', 'Righteous', 'Roboto Mono']

if (txtEl) {
  txtEl.textContent = txt ?? ''
}

const randomColorHex = (): void => {
  const lettersArray = (txtEl?.textContent ?? '').split('')
  if (txtEl) {
    txtEl.remove() // remove text to make new one with colors
  }

  for (let i = 0; i < lettersArray.length + 1; i++) {
    const newLetter = document.createElement('span')
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)

    if (bodyEl) {
      bodyEl.style.backgroundColor = `#${randomColor}` // change bg color
    }

    if (containerEl) {
      containerEl.appendChild(newLetter)
      containerEl.style.fontFamily = fontsArray[Math.floor(Math.random() * 6)]
    }

    if (newLetter) {
      newLetter.style.color = `#${randomColor}`
      newLetter.style.fontSize = '140px'
      newLetter.style.opacity = '0'
      newLetter.textContent = lettersArray?.[i] || ''

      const opacityInterval = randomOpacityInt()
      newLetter.style.transition = `opacity ${opacityInterval}ms`
      setTimeout(() => {
        newLetter.style.opacity = '1'
      }, 0)
    }
  }
}

const randomOpacityInt = (): number => {
  // Generate a random opacity change interval between 1 and 3 seconds
  return Math.floor(Math.random() * 3000) + 1000
}

randomColorHex()
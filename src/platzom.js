export default function platzom(str) {
  let translation = str

  // Si la palabra termina en "ar", se le quitan esos 2 caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }
  // Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation = translation + 'pe'
  }
  // Si la palabra traducida tiene 10 o mas letras
  // se debe partir a la mitad y unir con un guion del medio
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }
  // Si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayus y minus
  const reverse = (str) => str.split('').reverse().join('')
  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  return translation
  
}

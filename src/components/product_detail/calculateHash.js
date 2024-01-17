const CryptoJS = require('crypto-js');

function calculateExtendedHash(parameters) {
  // Ordena alfabéticamente según el nombre del parámetro (exceptuando sharedsecret y hashExtended)
  const sortedParameters = parameters
    .filter(param => param.name !== 'sharedSecret' && param.name !== 'hashExtended')
    .sort((a, b) => a.name.localeCompare(b.name));

  // Crea el stringForExtendedHash concatenando los valores de los parámetros separados por pipes "|"
  const stringForExtendedHash = sortedParameters.map(param => param.value).join('|');

  // Calcula el hash utilizando HMAC-SHA256 y el sharedSecret como llave
  const hash = CryptoJS.HmacSHA256(stringForExtendedHash, 'sharedSecret');

  // Convierte el hash a cadena utilizando Base64
  const hashString = CryptoJS.enc.Base64.stringify(hash);

  return hashString;
}

module.exports = calculateExtendedHash;

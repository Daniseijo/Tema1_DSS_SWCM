// Entrega 1.3
// Asignatura: SWCM
// Nombre: Daniel Sánchez Seijo
// DNI: 52005819J
// Nombre: José Santos Sánchez Sánchez
// DNI: 26256070Y

var assert = require('assert');
var wc = require('./wordcount');

//Test caracteres

assert.equal("15",wc.count("Estoy muy bien.").caracteres(),'Caracteres A1. Una línea');
assert.equal("16",wc.count("Estoy\n muy bien.").caracteres(),'Caracteres A2. Dos líneas');
assert.equal("16",wc.count("¿Cómo estás hoy?").caracteres(),'Caracteres A3. Tildes e interrogaciones');
assert.equal("38",wc.count("¿Cómo estás hoy?\n\tEstoy bien, gracias.").caracteres(),'Caracteres A4. Tabulador en segunda línea');
assert.equal("18",wc.count("¿Cómo es-\ntás hoy?").caracteres(),'Caracteres A5. Palabra partida en dos líneas');
assert.equal("47",wc.count("Es-\nterno-\ncleido-\nmas-\ntoideo en cuatro líneas").caracteres(),'Caracteres A6. Palabra con 4 guiones en 4 líneas');
assert.equal("23",wc.count("Esterno-cleidomastoideo").caracteres(),'Caracteres A7. Palabra partida con guiones');
assert.equal("54",wc.count("¿Me puedes pasar la sal? Será todo un placer. Gracias.").caracteres(),'Caracteres A8. Varias frases');

console.log('Test caracteres: passed. 8 Assertions OK');

//Test palabras

assert.equal("3",wc.count("Estoy muy bien.").palabras(),'Palabras A1. Una línea');
assert.equal("3",wc.count("Estoy\n muy bien.").palabras(),'Palabras A2. Dos líneas');
assert.equal("3",wc.count("¿Cómo estás hoy?").palabras(),'Palabras A3. Tildes e interrogaciones');
assert.equal("6",wc.count("¿Cómo estás hoy?\n\tEstoy bien, gracias.").palabras(),'Palabras A4. Tabulador en segunda línea');
assert.equal("3",wc.count("¿Cómo es-\ntás hoy?").palabras(),'Palabras A5. Palabra partida en dos líneas');
assert.equal("4",wc.count("Es-\nterno-\ncleido-\nmas-\ntoideo en cuatro líneas").palabras(),'Palabras A6. Palabra con 4 guiones en 4 líneas');
assert.equal("1",wc.count("Esterno-cleidomastoideo").palabras(),'Palabras A7. Palabra partida con guiones');
assert.equal("10",wc.count("¿Me puedes pasar la sal? Será todo un placer. Gracias.").palabras(),'Palabras A8. Varias frases');

console.log('Test palabras: passed. 8 Assertions OK');

//Test frases

assert.equal("1",wc.count("Estoy muy bien.").frases(),'Frases A1. Una línea');
assert.equal("1",wc.count("¿Cómo estás hoy?").frases(),'Frases A2. Tildes e interrogaciones');
assert.equal("2",wc.count("¿Cómo estás hoy?\n\tEstoy bien, gracias.").frases(),'Frases A3. Tabulador en segunda línea');
assert.equal("1",wc.count("¿Cómo es-\ntás hoy?").frases(),'Frases A4. Palabra partida en dos líneas');
assert.equal("1",wc.count("Es-\nterno-\ncleido-\nmas-\ntoideo en cuatro líneas").frases(),'Frases A5. Palabra con 4 guiones en 4 líneas');
assert.equal("1",wc.count("Esterno-cleidomastoideo").frases(),'Frases A6. Palabra partida con guiones');
assert.equal("3",wc.count("¿Me puedes pasar la sal? Será todo un placer. Gracias.").frases(),'Frases A7. Varias frases');

console.log('Test frases: passed. 7 Assertions OK');

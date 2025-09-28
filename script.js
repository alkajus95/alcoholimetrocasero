
const traducciones = {
	es: {
		titulo: 'Alcoholímetro Casero con Arduino y MQ-3',
		nav: ['¿Qué buscamos proteger?', 'Física', 'Química'],
		protegerTitle: '¿Qué buscamos cuidar y proteger?',
		protegerList: [
			'La vida y la seguridad de las personas en la vía pública.',
			'La salud física y mental de quienes consumen alcohol.',
			'La conciencia sobre los riesgos de manejar bajo efectos del alcohol.'
		],
		fisicaTitle: 'Aspectos Físicos',
		fisicaH3: '¿Cómo funciona el sensor MQ-3?',
		fisicaList: [
			'Detecta vapores de alcohol en el aire mediante un material semiconductor (SnO₂).',
			'La resistencia eléctrica del sensor varía según la concentración de alcohol.',
			'El Arduino mide ese cambio y lo traduce en una señal digital.',
			'El sensor MQ-3 es sensible a la temperatura y la humedad, factores que pueden afectar la medición.',
			'Se utiliza un divisor de voltaje para leer la resistencia variable del sensor con el Arduino.'
		],
		ohmTitle: 'Ley de Ohm:',
		ohmEq: 'V = I × R',
		ohmList: [
			'<b>V</b>: Voltaje (tensión) aplicado al sensor.',
			'<b>I</b>: Corriente que circula por el sensor.',
			'<b>R</b>: Resistencia del sensor, que cambia según la cantidad de alcohol detectada.'
		],
		ohmExp: 'Cuando el sensor MQ-3 detecta alcohol, su resistencia <b>R</b> disminuye, lo que provoca un aumento en la corriente <b>I</b> (si el voltaje <b>V</b> es constante). Así, el Arduino puede calcular la concentración de alcohol midiendo la variación de resistencia.',
		ohmEj: 'Ejemplo: Si el sensor tiene una resistencia de 2kΩ y se aplica un voltaje de 5V, la corriente será I = 5V / 2000Ω = 0.0025A (2.5mA).',
		factoresTitle: 'Factores físicos a considerar:',
		factoresList: [
			'<b>Temperatura:</b> El sensor puede requerir un tiempo de calentamiento para estabilizarse.',
			'<b>Humedad:</b> Altos niveles de humedad pueden alterar la respuesta del sensor.',
			'<b>Ventilación:</b> Es importante realizar la medición en un ambiente controlado para evitar lecturas erróneas.'
		],
		quimicaTitle: 'Aspectos Químicos',
		quimicaH3: 'Óxido-Reducción y el papel del SnO₂',
		quimicaList: [
			'El sensor MQ-3 utiliza óxido de estaño (SnO₂) como material sensible.',
			'Cuando el etanol entra en contacto con el SnO₂, ocurre una reacción de óxido-reducción: el etanol se oxida y el SnO₂ se reduce parcialmente, liberando electrones.',
			'Estos electrones aumentan la conductividad del sensor, permitiendo detectar la presencia de alcohol.',
			'La reacción química principal es:<br><span style="font-family:monospace;">C₂H₅OH + O₂ (SnO₂) → CH₃CHO + H₂O + e⁻</span>',
			'La cantidad de electrones liberados depende de la concentración de alcohol en el aire.'
		],
		quimicaPorque: '¿Por qué se usa SnO₂?',
		quimicaPorqueList: [
			'El SnO₂ es un semiconductor tipo n, muy sensible a gases reductores como el etanol.',
			'La superficie del SnO₂ adsorbe oxígeno, que reacciona con el etanol y libera electrones.',
			'Este proceso de óxido-reducción es reversible, permitiendo que el sensor se use muchas veces.'
		],
		quimicaFactores: 'Otros factores químicos:',
		quimicaFactoresList: [
			'Presencia de otros compuestos orgánicos volátiles (VOC) puede interferir en la medición.',
			'El sensor MQ-3 es más selectivo al etanol, pero puede responder a otros alcoholes.',
			'El proceso de limpieza del sensor se realiza quemando los residuos con el calentador interno.'
		],
		langBtn: 'English'
	},
	en: {
		titulo: 'Homemade Breathalyzer with Arduino and MQ-3',
		nav: ['What do we want to protect?', 'Physics', 'Chemistry'],
		protegerTitle: 'What do we want to care for and protect?',
		protegerList: [
			'The life and safety of people in public spaces.',
			'The physical and mental health of those who consume alcohol.',
			'Awareness of the risks of driving under the influence of alcohol.'
		],
		fisicaTitle: 'Physical Aspects',
		fisicaH3: 'How does the MQ-3 sensor work?',
		fisicaList: [
			'Detects alcohol vapors in the air using a semiconductor material (SnO₂).',
			'The electrical resistance of the sensor varies according to the alcohol concentration.',
			'The Arduino measures that change and translates it into a digital signal.',
			'The MQ-3 sensor is sensitive to temperature and humidity, which can affect the measurement.',
			'A voltage divider is used to read the variable resistance of the sensor with the Arduino.'
		],
		ohmTitle: 'Ohm’s Law:',
		ohmEq: 'V = I × R',
		ohmList: [
			'<b>V</b>: Voltage applied to the sensor.',
			'<b>I</b>: Current flowing through the sensor.',
			'<b>R</b>: Sensor resistance, which changes according to the amount of alcohol detected.'
		],
		ohmExp: 'When the MQ-3 sensor detects alcohol, its resistance <b>R</b> decreases, causing an increase in current <b>I</b> (if voltage <b>V</b> is constant). Thus, the Arduino can calculate the alcohol concentration by measuring the resistance variation.',
		ohmEj: 'Example: If the sensor has a resistance of 2kΩ and a voltage of 5V is applied, the current will be I = 5V / 2000Ω = 0.0025A (2.5mA).',
		factoresTitle: 'Physical factors to consider:',
		factoresList: [
			'<b>Temperature:</b> The sensor may require a warm-up time to stabilize.',
			'<b>Humidity:</b> High humidity levels can alter the sensor’s response.',
			'<b>Ventilation:</b> It is important to take the measurement in a controlled environment to avoid erroneous readings.'
		],
		quimicaTitle: 'Chemical Aspects',
		quimicaH3: 'Redox and the role of SnO₂',
		quimicaList: [
			'The MQ-3 sensor uses tin oxide (SnO₂) as the sensitive material.',
			'When ethanol comes into contact with SnO₂, a redox reaction occurs: ethanol is oxidized and SnO₂ is partially reduced, releasing electrons.',
			'These electrons increase the conductivity of the sensor, allowing alcohol detection.',
			'The main chemical reaction is:<br><span style="font-family:monospace;">C₂H₅OH + O₂ (SnO₂) → CH₃CHO + H₂O + e⁻</span>',
			'The number of electrons released depends on the alcohol concentration in the air.'
		],
		quimicaPorque: 'Why use SnO₂?',
		quimicaPorqueList: [
			'SnO₂ is an n-type semiconductor, very sensitive to reducing gases such as ethanol.',
			'The surface of SnO₂ adsorbs oxygen, which reacts with ethanol and releases electrons.',
			'This redox process is reversible, allowing the sensor to be used many times.'
		],
		quimicaFactores: 'Other chemical factors:',
		quimicaFactoresList: [
			'The presence of other volatile organic compounds (VOC) can interfere with the measurement.',
			'The MQ-3 sensor is more selective to ethanol, but can also respond to other alcohols.',
			'The sensor is cleaned by burning residues with the internal heater.'
		],
		langBtn: 'Español'
	}
};

let idioma = 'es';

function traducir(lang) {
	const t = traducciones[lang];
	document.getElementById('titulo-principal').textContent = t.titulo;
	document.getElementById('nav-proteger').textContent = t.nav[0];
	document.getElementById('nav-fisica').textContent = t.nav[1];
	document.getElementById('nav-quimica').textContent = t.nav[2];
	document.getElementById('proteger-title').textContent = t.protegerTitle;
	const pl = document.getElementById('proteger-list');
	pl.innerHTML = t.protegerList.map(x => `<li>${x}</li>`).join('');
	document.getElementById('fisica-title').textContent = t.fisicaTitle;
	document.getElementById('fisica-h3').textContent = t.fisicaH3;
	const fl = document.getElementById('fisica-list');
	fl.innerHTML = t.fisicaList.map(x => `<li>${x}</li>`).join('');
	document.getElementById('ohm-title').textContent = t.ohmTitle;
	document.getElementById('ohm-eq').textContent = t.ohmEq;
	const ol = document.getElementById('ohm-list');
	ol.innerHTML = t.ohmList.map(x => `<li>${x}</li>`).join('');
	document.getElementById('ohm-exp').innerHTML = t.ohmExp;
	document.getElementById('ohm-ej').textContent = t.ohmEj;
	document.getElementById('factores-title').textContent = t.factoresTitle;
	const flist = document.getElementById('factores-list');
	flist.innerHTML = t.factoresList.map(x => `<li>${x}</li>`).join('');
		document.getElementById('quimica-title').textContent = t.quimicaTitle;
		document.getElementById('quimica-h3').textContent = t.quimicaH3;
		const ql = document.getElementById('quimica-list');
		// Para el cuarto elemento, extraer solo el span para el id quimica-eq
		ql.innerHTML = t.quimicaList.map((x, i) => {
			if (i === 3) {
				// El span va con id para poder traducirlo
				return `<li>La reacción química principal es:<br><span style="font-family:monospace;" id="quimica-eq">${lang === 'es' ? 'C₂H₅OH + O₂ (SnO₂) → CH₃CHO + H₂O + e⁻' : 'C₂H₅OH + O₂ (SnO₂) → CH₃CHO + H₂O + e⁻'}</span></li>`;
			}
			return `<li>${x}</li>`;
		}).join('');
	document.getElementById('quimica-porque').textContent = t.quimicaPorque;
	const qpl = document.getElementById('quimica-porque-list');
	qpl.innerHTML = t.quimicaPorqueList.map(x => `<li>${x}</li>`).join('');
	document.getElementById('quimica-factores').textContent = t.quimicaFactores;
	const qfl = document.getElementById('quimica-factores-list');
	qfl.innerHTML = t.quimicaFactoresList.map(x => `<li>${x}</li>`).join('');
		const langBtn = document.getElementById('lang-btn');
		if (langBtn) langBtn.textContent = t.langBtn;
}

document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('lang-btn').addEventListener('click', () => {
		idioma = idioma === 'es' ? 'en' : 'es';
		traducir(idioma);
		// El texto del botón ya se actualiza en traducir()
	});
});

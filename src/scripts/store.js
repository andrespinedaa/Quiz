const estadoCompartido = {
	valor: 0,
	observadores: [],

	actualizarValor(nuevoValor) {
		this.valor = nuevoValor;
		this.notificarObservadores();
	},
	suscribirObservador(observador) {
		this.observadores.push(observador);
	},
	notificarObservadores() {
		this.observadores.forEach((observador) => observador.actualizar(this.valor));
	},
};
// Crear observador
export const observadorButtons = {
	value: 0,
	actualizar(nuevoValor) {
		this.value = nuevoValor;
		console.log("Observador 1 actualizado:", nuevoValor);
	},
	actualizarEstado(nuevoValor) {
		estadoCompartido.actualizarValor(nuevoValor);
	},
};
estadoCompartido.suscribirObservador(observadorButtons);
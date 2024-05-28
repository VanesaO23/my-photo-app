export async function post(req) {
	const data = await req.request.formData();
	const files = data.getAll('files');

	// Aquí debes guardar los archivos en el servidor o un servicio en la nube
	// Por ejemplo, guardar en un sistema de archivos local o subir a AWS S3

	// Suponiendo que guardamos los archivos y tenemos sus URLs
	const images = files.map((file) => ({
		url: `https://yourstorage.example.com/${file.name}`, // URL de la imagen guardada
		name: file.name
	}));

	return {
		status: 200,
		body: images
	};
}

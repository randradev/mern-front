import React from "react";

function Formulario() {
    const handleSubmit = async (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)

        // Obtiene los valores ingresados por el usuario desde el formulario
        const formData = new FormData(event.target);
        const data = {
            name: formData.get('name'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        try {
            const response = await fetch('http://localhost:1995/api/crear', {
                method: 'POST', // Envia una solicitud POST al servidor
                headers: {
                    'Content-Type': 'application/json', // El servidor espera datos en formato JSON
                },
                body: JSON.stringify(data) // Convierte los datos a JSON y los envía al backend
            });

            if (response.ok) {
                // Si el registro es exitoso, se puede manejar la respuesta aquí
                alert("Registro exitoso")
            } else {
                // Si hay errores en la respuesta, se pueden manejar aquí
                alert("No funcionó")
            }
        } catch (error) {
            // Maneja errores de red, como por ejemplo problemas de conexión
            alert("Este es un error catch")
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Input para el nombre */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" name="name" className="form-control" id="name" aria-describedby="nameHelp" />
                </div>
                {/* Input para el apellido */}
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Apellido</label>
                    <input type="text" name="lastName" className="form-control" id="lastName" aria-describedby="lastNameHelp" />
                </div>
                {/* Input para el email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                {/* Input para la contraseña */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" name="password" className="form-control" id="password" />
                </div>
                {/* Botón de envío */}
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}


export default Formulario;
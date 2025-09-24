import React, { useRef } from "react";

const allowedExtensions = ['doc', 'docx', 'pdf', 'jpg', 'jpeg', 'png'];

function UploadTable() {
    const fileInputsRef = useRef([]);

    const descartarArchivos = () => {
        fileInputsRef.current.forEach(input => {
            if (input) input.value = '';
        });
    };

    const enviarArchivos = (e) => {
        e.preventDefault();
        for (const input of fileInputsRef.current) {
            const file = input?.files?.[0];
            if (file) {
                const ext = file.name.split('.').pop().toLowerCase();
                if (!allowedExtensions.includes(ext)) {
                    alert(`El archivo "${file.name}" no tiene una extensión permitida.`);
                    return;
                }
            }
        }
        alert('Funcionalidad de envío de archivos al servidor aún no implementada.');
        if (window.confirm("¿Confirma subir los siguientes archivos? Esta acción no se puede deshacer")) {
            alert('Archivos enviados (simulado).');
        } else {
            alert('Envío cancelado.');
        }
    };

    // Helper to assign refs to file inputs
    const setFileInputRef = (el, idx) => {
        fileInputsRef.current[idx] = el;
    };

    return (
        <form onSubmit={enviarArchivos}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            Título<br />
                            <input type="file" name="profesorado_titulo" ref={el => setFileInputRef(el, 0)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                        <td>
                            Título<br />
                            <input type="file" name="tecnicatura_titulo" ref={el => setFileInputRef(el, 1)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Posgrados<br />
                            <input type="file" name="profesorado_posgrados" ref={el => setFileInputRef(el, 2)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                        <td>
                            Posgrados<br />
                            <input type="file" name="tecnicatura_posgrados" ref={el => setFileInputRef(el, 3)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Postítulos<br />
                            <input type="file" name="profesorado_postitulos" ref={el => setFileInputRef(el, 4)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                        <td>
                            Postítulos<br />
                            <input type="file" name="tecnicatura_postitulos" ref={el => setFileInputRef(el, 5)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Antigüedad docente<br />
                            <input type="file" name="profesorado_antiguedad" ref={el => setFileInputRef(el, 6)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                        <td>
                            Antigüedad docente<br />
                            <input type="file" name="tecnicatura_antiguedad" ref={el => setFileInputRef(el, 7)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Antecedentes de desarrollo profesionales<br />
                            <input type="file" name="profesorado_antecedentes" ref={el => setFileInputRef(el, 8)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                        <td>
                            Antecedentes de desempeño profesionales<br />
                            <input type="file" name="tecnicatura_antecedentes" ref={el => setFileInputRef(el, 9)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Cargos obtenidos por concurso<br />
                            <input type="file" name="profesorado_cargos" ref={el => setFileInputRef(el, 10)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                        <td>
                            Otros antecedentes orientados al perfil personal<br />
                            <input type="file" name="tecnicatura_cargos" ref={el => setFileInputRef(el, 11)} />
                            <input type="text" name="profesorado_titulo_text" placeholder="Descripción del archivo" />
                            <input type="text" name="profesorado_titulo_text2" placeholder="Nombre de la entidad emisora" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
                <button type="button" className="discardButton" onClick={descartarArchivos}>
                    Descartar archivos seleccionados
                </button>
                <button type="submit" className="submitButton">
                    Enviar todos los archivos
                </button>
            </div>
        </form>
    );
}

export default UploadTable;
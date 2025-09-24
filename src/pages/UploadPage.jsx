import React from "react";
import Header from "../components/AppHeader";
import UploadTable from "../components/UploadTable";

export function UploadPage() {
    return (
        <div>
            <Header />
            <h2>Página de Subida de Archivos</h2>
            {/* Aquí puedes agregar el formulario o la funcionalidad para subir archivos */}
            <UploadTable />
        </div>
    );
}
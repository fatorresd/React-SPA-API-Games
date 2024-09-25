export const activeClass = () => {
    // Crear funcion de validar si esta activo el className
    const validateClassName = (isActive) => {
        return `nav-link ${isActive ? 'active' : ''}`;
    }

    return {
        validateClassName
    };
}

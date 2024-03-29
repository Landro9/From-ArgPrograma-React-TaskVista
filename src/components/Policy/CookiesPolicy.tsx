import './style.css';

const PoliticaCookies = () =>{
    return (
        <div className="politicas-container">
        <h1>Politicas de Cookies</h1>
        <h4>La ley de cookies es una obligación que deben cumplir las páginas web
            que hagan uso de este tipo de información, excepto aquellas que presenten
            un servicio solicitado expresamente por el usuario o que sean estrictamente
            necesarias para permitir la comunicación entre el equipo del usuario y la red.</h4>
        <h4>El artículo 22 de la Ley de Servicios de la Sociedad de la Información y
            de Comercio Electrónico (LSSI) es el que regula esta normativa aunque ha
            sido modificada posteriormente por el Real Decreto-Ley 13/2012.</h4>
        <h4>De esta forma os lo comentábamos en la entrada donde además explicamos
            que tipo de cookies deben cumplir con la ley, cuales quedan exentas y
            los requisitos que debe cumplir el sitio web. Uno de estos requisitos era
            disponer de una política de cookies. En esta entrada vamos a concretar
            cuáles son los elementos que debe contener la política de nuestro sitio web.</h4>
        <h4>Hay que tener en cuenta que si por ejemplo utilizamos Google Analytics para
            medir el tráfico y los accesos de nuestra página web, ya estamos instalando
            y utilizando las cookies. Lo más común para cumplir con la normativa de
            cookies es que, además del aviso donde pedimos el consentimiento para su uso,
            detallemos la política como un aspecto más del aviso legal del sitio web y
            que ésta esté permanentemente accesible y a disposición del usuario,
            tal como indica la ley. Por lo tanto en el «aviso legal» estarán detallados
            todos los aspectos que legalmente deba cumplir el sitio, ofreciendo también
            al usuario información relativa al sitio web (finalidad, responsable del
            sitio web, contacto, etc.).</h4>
        <h4>La política de cookies debe contener la siguiente información:</h4>
        <ul className="items">
            <li>Qué son las cookies. Breve explicación sobre la misión que cumplen las
                cookies en un sitio web. En la página web de INTECO por ejemplo recogemos
                que las cookies son:«pequeños archivos de información que el servidor envía
                al ordenador de quien accede a la página para el correcto funcionamiento y
                visualización de los sitios Web por parte del usuario, así como la recogida
                de estadísticas».</li>
            <li>Para que se utilizan. Explicación clara y detallada sobre la
                finalidad para las que utilizamos las cookies en nuestro sitio web,
                ya sean cookies de seguimiento, que almacenen información sobre los
                usuarios y que permite analizar el comportamiento de un usuario; o
                cookies publicitarias que permiten la gestión de los espacios
                publicitarios (frecuencia y contenido de los anuncios), entre otras que
                fueron detalladas en el artículo mencionado anteriormente.</li>
            <li>Quién las instala. Además de para que se utilizan debemos indicar
                quién es el que instala las cookies en el equipo del usuario, bien sea
                el propietario del portal o terceras personas o empresas. Por ejemplo,
                podemos ver en la página web de Inteco la información que se recoge y su
                finalidad para cada una de las cookies, más concretamente para la de
                Google Analytics.</li>
            <li>Cómo se rechazan. Este aspecto es quizá el más práctico y
                técnico. Debemos realizar una pequeña explicación de cómo se
                pueden rechazar las cookies de nuestro sitio web sea cual sea el navegador
                que utilice el usuario. Para ello lo más común es realizar una pequeña guía
                con capturas de pantalla de los navegadores más populares donde se
                especifique como rechazar y eliminar las cookies. A modo de ejemplo
                añadimos a este post algunas capturas del estado de las cookies en
                Chrome y Firefox, los dos navegadores más populares.</li>
        </ul>
        <h4>Además siguiendo con el ejemplo práctico, vamos a analizar la política de
            cookies de la que disponemos en nuestra web de inteco.es. Incluido en el
            «aviso legal», aparece la política de cookies que incluye las cookies que
            se instalan, el tipo de cookie, la temporalidad, la titularidad, la
            finalidad y los dominios en los que se utiliza. Además aparece un apartado
            de cómo modificar la configuración de las cookies donde se indican los pasos
            a seguir en los cuatro navegadores más populares: Internet Explorer,
            Firefox, Google Chrome y Safari.</h4>
        <h4>Este no es más que un ejemplo de una correcta política de
            cookies. Lo importante es que en ésta aparezca toda la información
            mencionada anteriormente y éste accesible de forma permanente a los
            usuarios. Pero sobre todo, debemos de mantener actualizada esta política y
            notificar cualquier cambio en la misma que afecte a la información de los
            visitantes.</h4>
    </div>
    )
}

export default PoliticaCookies
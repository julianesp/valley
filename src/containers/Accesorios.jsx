import React from 'react'
import '@styles/General.scss'
import '@styles/Accesorios.scss'

const Accesorios = () => {
    return (
        <section class="accesorios">
            <section class="accesorios-tipo">
                <h2>Celulares</h2>
                <ul class="contenedor">
                    <li class="caja">
                        <h3>Usb iPhone</h3>
                        {/* <img src="@products/celulares/cableusbiphone/1.jpg" alt="" /> */}
                        <img src="../assets/pictures/celulares/cableusbiphone/1.jpg" alt="" />
                        <button onclick="iphone()">Ver</button>
                    </li>
                    <li class="caja">
                        <h3>Memoria SanDisk</h3>
                        <img src="assets/accesorios/celulares/sandisk16/foto1.jpg" />
                        <button onclick="iphone()">Ver</button>
                    </li>
                    <li class="caja">
                        <h3>Usb carga rápida</h3>
                        <img src="assets/accesorios/celulares/cableusb/1.png" />
                        <button onclick="iphone()">Ver</button>
                    </li>
                    <li class="caja">
                        <h3>Soporte estático para celulares</h3>
                        <img src="assets/accesorios/celulares/soporte/1.jpg" />
                        <button onclick="iphone()">Ver</button>
                    </li>
                    <li class="caja">
                        <h3>Soporte móvil para celulares</h3>
                        <img src="assets/accesorios/celulares/soporte movil/1.jpg" />
                        <button
                            onclick="iphone()">Ver</button>
                    </li>
                    <li class="caja">
                        <h3>Correa reloj inteligente</h3>
                        <img src="assets/accesorios/celulares/Correa/1.jpg" />
                        <button
                            onclick="iphone()">Ver</button>
                    </li>
                    <li class="caja">
                        <h3>Vidrio Redmi Note 9</h3>
                        <img src="assets/accesorios/celulares/vidrio/1.jpg" />
                        <button onclick="iphone()">Ver</button>
                    </li>
                    <li class="caja">
                        <h3>Micrófono</h3>
                        <img src="assets/accesorios/celulares/Microfono/1.jpg" />
                        <button onclick="iphone()">Ver</button>
                    </li>
                    <li class="caja">
                        <h3>Adaptador Usb - Tipo C</h3>
                        <img src="assets/accesorios/celulares/usbtipoc/1.jpg" />
                        <button onclick="iphone()">Ver</button>
                    </li>
                </ul>
            </section>
        </section>
    );
}


export default Accesorios
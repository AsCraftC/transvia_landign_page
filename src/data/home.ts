import type { HomeData } from "@/data/interfaces";

//Imágenes Servicios
import servicio1 from '@/assets/home/service1.jpg';
import servicio2 from '@/assets/home/service2.jpg';
import servicio3 from '@/assets/home/service3.jpg';

export const homeData : HomeData = {
    eslogan         : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    estadisticas    : [
        {
            valor   : 30,
            etiqueta: "AÑOS DE SERVICIO"
        },
        {
            valor   : 123456,
            etiqueta: "KILÓMETROS CONSTRUIDOS"
        },
        {
            valor   : 472,
            etiqueta: "PROYECTOS APROBADOS"
        },
    ],
    servicios       : [
        {
            id          : 1,
            imagen      : servicio1,
            titulo      : "Servicio 1",
            descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id          : 2,
            imagen      : servicio2,
            titulo      : "Servicio 2",
            descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id          : 3,
            imagen      : servicio3,
            titulo      : "Servicio 3",
            descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
}
 
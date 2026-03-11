/* LISTA DE PERFUMES HOMBRE */

const perfumesHombre = [

{nombre:"Absolut Armani"},
{nombre:"Animal"},
{nombre:"Anteuz"},
{nombre:"Aqua di Gio"},
{nombre:"Aramis"},
{nombre:"Armani Profumo"},
{nombre:"Azzaro"},
{nombre:"Bad Boy"},
{nombre:"Bad Boy Dazzling"},
{nombre:"Barahara King"},
{nombre:"Blue de Chanel"},
{nombre:"Blue Jeans"},
{nombre:"Blue Light"},
{nombre:"Boss Bottled"},
{nombre:"Boss Unlimited"},
{nombre:"Burberry"},
{nombre:"Carlo Corinto"},
{nombre:"Carolina Herrera"},
{nombre:"CK One"},
{nombre:"CK Two"},
{nombre:"Código Negro"},
{nombre:"Cool Water"},
{nombre:"Creed Adventure"},
{nombre:"CR7 Legacy"},
{nombre:"Decire"},
{nombre:"Drakkar"},
{nombre:"Dolce Gabbana"},
{nombre:"Emblem Mont Blanc"},
{nombre:"Emporio"},
{nombre:"Eros Versace"},
{nombre:"Eternity"},
{nombre:"Gentleman Givenchy"},
{nombre:"Halloween"},
{nombre:"Heritage"},
{nombre:"Honor y Gloria"},
{nombre:"Hugo Boss"},
{nombre:"Hugo"},
{nombre:"Hugo Dark Blue"},
{nombre:"Hugo Red"},
{nombre:"Hugo Reverse"},
{nombre:"Invictus"},
{nombre:"Invictus Platinum"},
{nombre:"Invictus Victory"},
{nombre:"Jean Paul"},
{nombre:"Jovan"},
{nombre:"Khamrah"},
{nombre:"Lacoste Esencial"},
{nombre:"Lacoste Magnetic"},
{nombre:"Lacoste Red"},
{nombre:"Lacoste White"},
{nombre:"Lavanda"},
{nombre:"Legend Mont Blanc"},
{nombre:"Legend Night Mont Blanc"},
{nombre:"Louis Vuitton"},
{nombre:"Mambo"},
{nombre:"Minotauro"},
{nombre:"Mont Blanc"},
{nombre:"Nautica"},
{nombre:"Nautica Voyage"},
{nombre:"Obsession"},
{nombre:"One Million"},
{nombre:"One Million Lucky"},
{nombre:"One Million Royal"},
{nombre:"Oscar de la Renta"},
{nombre:"Paco"},
{nombre:"Paco Rabanne"},
{nombre:"Pachuly"},
{nombre:"Paris Hilton"},
{nombre:"Phantom Paco"},
{nombre:"Rabanne"},
{nombre:"Pi Givenchy"},
{nombre:"Polo"},
{nombre:"Polo 67"},
{nombre:"Polo Blue"},
{nombre:"Polo Red"},
{nombre:"Polo Sport"},
{nombre:"Sándalo"},
{nombre:"Safari"},
{nombre:"Santal 33"},
{nombre:"Sauvage"},
{nombre:"Scandal Jean Paul"},
{nombre:"Star Walker"},
{nombre:"Swiss Army"},
{nombre:"The One Dolce Gabbana"},
{nombre:"The One Sport"},
{nombre:"Tom Ford Vainilla"},
{nombre:"Tommy"},
{nombre:"Ungaro"},
{nombre:"Ungaro 3"},
{nombre:"Ungaro For Men"},
{nombre:"Valentino"},
{nombre:"Valentino Roma"},
{nombre:"Vetiver"},
{nombre:"X Space Paco Rabanne"},
{nombre:"Yves Saint Laurent"},
{nombre:"Yves Saint Laurent Elixir"},
{nombre:"212"},
{nombre:"212 Black Extra"},
{nombre:"212 Héroes"},
{nombre:"212 Sexy"},
{nombre:"212 VIP"},
{nombre:"212 VIP Black"},
{nombre:"212 VIP Club"},
{nombre:"360"},
{nombre:"360 Blue"},
{nombre:"360 Red"},
{nombre:"Eros Flame"}

]

/* LISTA DE PERFUMES MUJER */

const perfumesMujer = [

{nombre:"212"},
{nombre:"212 Sexy"},
{nombre:"212 VIP"},
{nombre:"212 VIP Rosa"},
{nombre:"360"},
{nombre:"360 Red"},
{nombre:"5ta Avenida"},
{nombre:"Aires del Tiempo"},
{nombre:"Amarige"},
{nombre:"Amor Amor"},
{nombre:"Anaïs Anaïs"},
{nombre:"Animal"},
{nombre:"Angel"},
{nombre:"Angel o Demonio"},
{nombre:"Aqua di Gio"},
{nombre:"Ariana Grande"},
{nombre:"Bade Pink Lataffa"},
{nombre:"Be Delicious"},
{nombre:"Billie Eilish"},
{nombre:"Bubble Gum Moschino"},
{nombre:"Burberry Her"},
{nombre:"Can Can"},
{nombre:"Carolina Herrera"},
{nombre:"CH D CH"},
{nombre:"Chance de Chanel"},
{nombre:"Chanel No.5"},
{nombre:"Cloud Ariana Grande"},
{nombre:"Coco Chanel"},
{nombre:"Coco Mademoiselle"},
{nombre:"Cool Water"},
{nombre:"Dazzle Paris Hilton"},
{nombre:"Ed Hardy"},
{nombre:"Electrify Paris Hilton"},
{nombre:"Elixir Shakira"},
{nombre:"Emporio"},
{nombre:"Escape"},
{nombre:"Eternity"},
{nombre:"Fantasy"},
{nombre:"Feme"},
{nombre:"Flower Kenzo"},
{nombre:"Gabrielle de Chanel"},
{nombre:"Gold Rush"},
{nombre:"Good Girl"},
{nombre:"Halloween"},
{nombre:"Heiress"},
{nombre:"Hugo Boss"},
{nombre:"Hugo Woman"},
{nombre:"I Love Moschino"},
{nombre:"Isahy Miyagui"},
{nombre:"Jador"},
{nombre:"Jean Paul"},
{nombre:"Jovan"},
{nombre:"La Vida Es Bella"},
{nombre:"Lacoste Magnetic"},
{nombre:"Light Blue"},
{nombre:"Miau K.P"},
{nombre:"Miss Dior"},
{nombre:"Mon Guerlain"},
{nombre:"Ombre Rose"},
{nombre:"Olympia Paco"},
{nombre:"Rabanne"},
{nombre:"One Million"},
{nombre:"Paloma Picasso"},
{nombre:"Paris"},
{nombre:"Paris Hilton"},
{nombre:"Piña Bebé"},
{nombre:"Poison"},
{nombre:"Ralph Lauren"},
{nombre:"Sansara"},
{nombre:"Scandal Jean Paul"},
{nombre:"Selena Gómez"},
{nombre:"Sexy Graffiti"},
{nombre:"Shalimar"},
{nombre:"Thank U Next Ariana Grande"},
{nombre:"Tommy"},
{nombre:"Toy 2 Pearl"},
{nombre:"Trésor"},
{nombre:"Valentino"},
{nombre:"Yara Lataffa"},
{nombre:"Yawns"},
{nombre:"Yes I Am"}

]


/* MOSTRAR PERFUMES */

function mostrarPerfumes(lista, id){

const contenedor = document.getElementById(id)

contenedor.innerHTML = ""

lista.forEach(perfume => {

contenedor.innerHTML += `

<div class="producto">

<h3>${perfume.nombre}</h3>

<button onclick="pedir('${perfume.nombre}')">
Preguntar por WhatsApp
</button>

</div>

`

})

}


/* BOTON WHATSAPP */

function pedir(nombre){

const numero = "5215568800259"

const mensaje = `Hola, me interesa el perfume ${nombre}. ¿Me puedes dar información?`

window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`)

}


/* CARGAR PERFUMES AL INICIO */

mostrarPerfumes(perfumesHombre,"hombreLista")
mostrarPerfumes(perfumesMujer,"mujerLista")


/* BUSCADOR */

const buscador = document.getElementById("searchInput")

if(buscador){

buscador.addEventListener("keyup",function(){

let texto = this.value.toLowerCase()

let hombre = perfumesHombre.filter(p =>
p.nombre.toLowerCase().includes(texto)
)

let mujer = perfumesMujer.filter(p =>
p.nombre.toLowerCase().includes(texto)
)

mostrarPerfumes(hombre,"hombreLista")
mostrarPerfumes(mujer,"mujerLista")

})

function mostrar(id){

let pantallas = document.querySelectorAll(".pantalla")

pantallas.forEach(p=>{
p.style.display="none"
})

document.getElementById(id).style.display="block"

/* mostrar u ocultar catalogo */

let header = document.getElementById("headerCatalogo")

if(id === "inicio"){
header.style.display = "none"
}else{
header.style.display = "block"
}

/* CAMBIAR COLOR DE FONDO */

document.body.classList.remove("fondo-mujer","fondo-hombre","fondo-normal")

if(id === "mujer"){
document.body.classList.add("fondo-mujer")
}
else if(id === "hombre"){
document.body.classList.add("fondo-hombre")
}
else{
document.body.classList.add("fondo-normal")
}

}

mostrar("inicio")

}

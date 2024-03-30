// Definimos a função que mostra os slides
function mostrarSlides(n) {  
    // Recolhemos todos os slides da página e colocamos numa array/tabela
    var slides = document.getElementsByClassName("slide"); 

    // Se n for superior ao número de slides
    if (n > slides.length) { 
        // Ressetamos o contador de indice de slide à 1
        slide_index = 1;
    } 

    // Se n for inferior ao número de slides
    if (n < 1) { 
        // Definimos o contador de indice de slide ao tamanho da elemento da tabela
        slide_index = slides.length;
    } 

    // Percorremos a tabela de slides
    for (var i = 0; i < slides.length; i++) {
        // Escondemos cada elemento nela  
        slides[i].style.display = "none";  
    } 

    /* Mostramos o elemento no compartimento slide_index - 1
       Visto que o indice de uma tabela em JS começa em 0
       Na primeira execução slide_index = 1, então slide_index - 1 é igual à 0, 
       por conseguinte vai mostrar o primeiro elemento da tabela, neste caso slides[0] 
    */
    slides[slide_index - 1].style.display = "block";
    //console.log(slide_index - 1);  
}

// Inicializamos o indice do slide a ser mostrado em primeiro
var slide_index = 1;  

// Mostramos o primeiro slide
mostrarSlides(slide_index);  

// Definimos a função para mostrar o próximo slide
function proximoSlide(n) {
    /* Sempre que o utilizador clicar na seta para direita onclick="proximoSlide(1)"
       incrementamos slide_index de n, n sendo igual à 1
    */
    mostrarSlides(slide_index += n);  
}    
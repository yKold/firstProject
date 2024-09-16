export enum tipo {
    PaoFrances = 1,
    PaoDeForma = 2,
    PaoIntegral = 3,
    PaoDeMilho = 4,
    PaoDeQueijo = 5,
    BoloSimples = 6,
    BoloDeChocolate = 7,
    BoloDeCenoura = 8,
    BoloDeFuba = 9,
    RoscaDoce = 10,
    RoscaSalgada = 11,
    Croissant = 12,
    Brioche = 13,
    TortaSalgada = 14,
    TortaDoce = 15,
    Coxinha = 16,
    Empada = 17,
    Pastel = 18,
    Esfiha = 19,
    BiscoitoDoce = 20,
    BiscoitoSalgado = 21,
    BolachaRecheada = 22,
    Sonho = 23,
    Quiche = 24,
    PaoDeBatata = 25,
    Focaccia = 26,
    Donut = 27,
    Muffin = 28,
    PaoDeCebola = 29,
    PizzaBroto = 30,
    Salgadinho = 31
}
export interface Product {
    Id: number;
    Name: string;
    Descricao: string;
    Preco: number;
    Quantidade: number;
    Tipo: tipo;
}


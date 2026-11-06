import drinks from "@/assets/sec_drinks.jpg";
import bebidas from "@/assets/sec_bebidas.jpg";
import mar from "@/assets/sec_mar.jpg";
import porcoes from "@/assets/sec_porcoes.jpg";

export type Item = { name: string; desc?: string; price: number };
export type Group = { title: string; items: Item[] };
export type Section = { id: string; title: string; kicker: string; image: string; groups: Group[] };

export const brl = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 });

export const menu: Section[] = [
  {
    id: "bebidas",
    title: "Bebidas",
    kicker: "Geladas, do jeito que a praia pede",
    image: bebidas,
    groups: [
      {
        title: "Sem álcool",
        items: [
          { name: "Água sem gás", price: 7 },
          { name: "Água com gás", price: 8 },
          { name: "Água tônica", price: 9 },
          { name: "Água de coco", price: 15 },
          { name: "Refrigerantes", desc: "Coca, Coca Zero, Guaraná, Guaraná Zero, Sprite", price: 9 },
          { name: "Red Bull", desc: "Tradicional, Melancia, Tropical", price: 16 },
          { name: "Sucos", desc: "Morango, abacaxi, maracujá, limão, laranja, frutas vermelhas, kiwi", price: 15 },
          { name: "Suco de açaí", price: 21 },
          { name: "Coquetel de frutas", desc: "Laranja, abacaxi e groselha", price: 25 },
          { name: "Limonada suíça", price: 21 },
          { name: "Gelo", price: 20 },
        ],
      },
      {
        title: "Cervejas",
        items: [
          { name: "Heineken long neck", price: 18 },
          { name: "Stella Pure Gold long neck", price: 18 },
          { name: "Corona long neck", price: 18 },
          { name: "Corona sem álcool lata", price: 17 },
          { name: "Cerveja lata", price: 15 },
          { name: "Heineken 600 ml", price: 25 },
          { name: "Stella Pure Gold 600 ml", price: 26 },
          { name: "Original 600 ml", price: 23 },
          { name: "Corona 600 ml", price: 26 },
        ],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks & Caipirinhas",
    kicker: "Pra brindar o pôr do sol",
    image: drinks,
    groups: [
      {
        title: "Drinks da casa",
        items: [
          { name: "Drink Tubarão", desc: "Gin, limão, água tônica e curaçau blue", price: 50 },
          { name: "Gin Classic", desc: "Gin, limão e água tônica", price: 50 },
          { name: "Meia Sete (67)", desc: "Gin, limão e Red Bull tradicional", price: 55 },
          { name: "Melancita Surf", desc: "Gin, limão e Red Bull melancia", price: 55 },
          { name: "Calor de Ubatuba", desc: "Gin, laranja e Red Bull tropical", price: 50 },
          { name: "Pôr do Sol", desc: "Aperol, prosecco, laranja e água com gás", price: 55 },
          { name: "Brisa de Verão (Mimosa)", desc: "Suco de laranja e prosecco", price: 55 },
          { name: "Marola (Mojito)", desc: "Rum, limão, hortelã e Sprite", price: 50 },
          { name: "Margarita", desc: "Tequila prata, Cointreau, sal e limão", price: 50 },
          { name: "Salto das Toninhas", desc: "Vodka, limão, curaçau blue e Sprite", price: 50 },
          { name: "Espanhola Tradicional", desc: "Vinho, leite condensado e abacaxi", price: 35 },
          { name: "Piña Colada", desc: "Rum, leite de coco e abacaxi", price: 50 },
          { name: "Sake Tonic Vintage", desc: "Saquê, laranja e água tônica", price: 50 },
          { name: "Red Highball", desc: "Red Label, limão e Sprite", price: 50 },
          { name: "Aperona", desc: "Corona, Aperol e limão · novo", price: 55 },
          { name: "Guinjo Spritz", desc: "Saquê, Aperol, laranja e água com gás", price: 55 },
        ],
      },
      {
        title: "Caipirinhas & batidas",
        items: [
          { name: "Caipirinha Velho Barreiro", price: 28 },
          { name: "Caipirinha Ypióca Ouro/Prata", price: 32 },
          { name: "Caipirinha Sagatiba", price: 32 },
          { name: "Caipirinha vodka nacional", price: 35 },
          { name: "Caipirinha Absolut", price: 45 },
          { name: "Caipirinha de saquê", price: 35 },
          { name: "Caipirinha de rum", price: 35 },
          { name: "Jorge Amado", desc: "Cachaça Gabriela, maracujá e limão", price: 35 },
          { name: "Batida Velho Barreiro", price: 30 },
          { name: "Batida vodka nacional", price: 37 },
          { name: "Batida Absolut", price: 47 },
          { name: "Adicional de fruta", price: 5 },
          { name: "Adicional de leite condensado", price: 3 },
        ],
      },
      {
        title: "Doses",
        items: [
          { name: "Cachaça", price: 8 },
          { name: "Ypióca", price: 10 },
          { name: "Sagatiba", price: 14 },
          { name: "Vodka nacional", price: 15 },
          { name: "Gin nacional", price: 15 },
          { name: "Saquê", price: 15 },
          { name: "Rum", price: 20 },
          { name: "Absolut", price: 25 },
          { name: "Campari", price: 25 },
          { name: "Tequila", price: 35 },
          { name: "Red Label", price: 40 },
          { name: "Black Label", price: 45 },
        ],
      },
    ],
  },
  {
    id: "mar",
    title: "Frutos do Mar",
    kicker: "Direto do litoral pra sua mesa",
    image: mar,
    groups: [
      {
        title: "Peixes e frutos do mar",
        items: [
          { name: "Camarão à dorê", price: 120 },
          { name: "Camarão alho e óleo", price: 130 },
          { name: "Lula à dorê", price: 130 },
          { name: "Lula alho e óleo", price: 135 },
          { name: "Pescada", price: 110 },
          { name: "Cação", price: 115 },
          { name: "Tilápia", price: 110 },
          { name: "Trio Mix", desc: "Pescada, lula e camarão", price: 145 },
          { name: "Duo Mix", desc: "Pescada e camarão", price: 135 },
          { name: "Ceviche de tilápia", price: 80 },
        ],
      },
      {
        title: "Porções extras",
        items: [
          { name: "Arroz", price: 15 },
          { name: "Feijão", price: 15 },
          { name: "Fritas", price: 15 },
          { name: "Salada", price: 15 },
        ],
      },
    ],
  },
  {
    id: "petiscos",
    title: "Porções & Petiscos",
    kicker: "Pra dividir entre uma onda e outra",
    image: porcoes,
    groups: [
      {
        title: "Porções",
        items: [
          { name: "Calabresa", price: 60 },
          { name: "Batata frita", price: 48 },
          { name: "Mandioca", price: 48 },
          { name: "Polenta", price: 48 },
          { name: "Batata com mandioca", price: 54 },
          { name: "Batata com polenta", price: 54 },
          { name: "Polenta com mandioca", price: 54 },
        ],
      },
      {
        title: "Iscas e bolinhos",
        items: [
          { name: "Bolinho de bacalhau", desc: "20 unidades", price: 80 },
          { name: "Bolinho de camarão c/ catupiry", desc: "20 unidades", price: 80 },
          { name: "Isca de picanha acebolada", price: 145 },
          { name: "Isca de filé de frango empanado", price: 100 },
          { name: "Mini hambúrguer com fritas", desc: "2 unidades", price: 50 },
          { name: "Fish tacos", desc: "2 unidades", price: 60 },
          { name: "Adicional de queijo", price: 8 },
        ],
      },
      {
        title: "Entradas",
        items: [
          { name: "Pastel de queijo", price: 17 },
          { name: "Pastel de pizza", price: 17 },
          { name: "Pastel de carne", price: 17 },
          { name: "Pastel de carne com queijo", price: 20 },
          { name: "Pastel de palmito", price: 20 },
          { name: "Pastel de camarão", price: 23 },
          { name: "Pastel de frango c/ catupiry", price: 23 },
          { name: "Tapioca doce", desc: "Coco com leite condensado", price: 33 },
          { name: "Tapioca frango c/ catupiry", price: 33 },
          { name: "Tapioca margarita", price: 33 },
          { name: "Adicional de catupiry", price: 5 },
        ],
      },
    ],
  },
];

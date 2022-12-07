import mongoose from 'mongoose'
import slugify from 'slugify'

const schemaDefinition = {
  name: String,
  image: String,
  isOrganic: Boolean,
  from: String,
  nutrients: [String],
  quantity: String,
  price: String,
  description: String,
  slug: String,
}

const schema = mongoose.Schema(schemaDefinition)

schema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })

  next()
})

const Product = mongoose.model('Product', schema)

export default Product

// const products = [
//   {
//     id: 'alface',
//     name: 'Alface',
//     image:
//       'https://images.unsplash.com/photo-1595739431055-6c308d9f5af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     isOrganic: true,
//     from: 'Brasil',
//     nutrients: 'Vitamina A',
//     quantity: '300g',
//     price: 'R$8',
//     description: `A alface possui baixo teor calórico, já que cada 100 g dela contém somente 15 calorias. A folha contém vitamina A, vitamina C, niacina (vitamina do complexo B) e minerais como cálcio, fósforo e ferro. É rica também em zinco, cobre, enxofre, silício, ácido fólico e clorofila.

//     O seu consumo auxilia no funcionamento da visão, no processo de cicatrização, no combate de infecções, além de fortalecer ossos e dentes. Também funciona como calmante, combate a insônia e tem efeito diurético e laxante.

//     Não existe restrição no que diz respeito à quantidade de alface consumida por dia, mas o recomendado é comer de seis a oito folhas diariamente."
//     `,
//   },
//   {
//     id: 'banana',
//     name: 'Banana',
//     image:
//       'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
//     isOrganic: false,
//     from: 'Brasil',
//     nutrients: 'Vitamina A, Cálcio',
//     quantity: '300g',
//     price: '7,90',
//     description: `A bananeira (Musa spp.) é uma planta típica de regiões tropicais úmidas, que não possui um caule lenhoso mas sim um caule suculento subterrâneo, chamado de rizoma. A parte que fica na superfície, que acabamos por chamar de caule, é um pseudocaule formado por uma superposição da base das folhas que podem chegar de 2 a 6 metros de altura.

//     Sua reprodução se dá a partir de um broto que surge em outra bananeira, que ao se soltar cai no solo onde irá dar origem a outra bananeira. Essa nova planta irá florescer, dar um cacho que ao ficar maduro irá cair e em seguida a planta morre, encerrando seu ciclo de vida.`,
//   },
//   {
//     id: 'brocolis',
//     name: 'Brócolis',
//     image:
//       'https://images.unsplash.com/photo-1587351177732-5b0739d1bd44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
//     isOrganic: true,
//     from: 'Brasil',
//     nutrients: 'Vitamina C',
//     quantity: '3',
//     price: '15,00',
//     description:
//       'O brócolis é uma variedade de Brassica oleracea e é uma planta herbácea, de caule longo e ereto, com folhas de nervuras pouco salientes e pedúnculos compridos. No Brasil, cultivam-se dois tipos de brócolis: o ramoso e o de cabeça. O ramoso ou maço apresenta grande número de pequenas inflorescências, que apresentam botões florais maiores. Já o brócolis de cabeça apresenta uma inflorescência central, maior, mais compacta e com botões florais bem menores do que os apresentados pelo brócolis ramoso.',
//   },
//   {
//     id: 'morango',
//     name: 'Morango',
//     image:
//       'https://images.unsplash.com/photo-1587815073078-f636169821e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     isOrganic: true,
//     from: 'Brasil',
//     nutrients: 'Vitamina A',
//     quantity: '300g',
//     price: 'R$8',
//     description: `O morangueiro é uma planta perene, rasteira, com caule que cresce paralelo ao chão e raízes aéreas. Suas folhas são trifoliadas, verde brilhante e dispostas em espiral para aproveitamento máximo da luz solar. Possui flores com 5 pétalas e brancas, com 20 a 30 estames e um número variado de pistilos (conjunto dos órgãos femininos das flores) que pode ir de 60 a 600, que irão dar a origem aos aquênios (frutos com semente única) que agrupados formarão o morango. Por isso é chamado de pseudofruto, pois é constituído de vários frutos.`,
//   },
//   {
//     id: 'laranja',
//     name: 'Laranja',
//     image:
//       'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     isOrganic: true,
//     from: 'Brasil',
//     nutrients: 'Vitamina C',
//     quantity: '300g',
//     price: 'R$10',
//     description: `A laranja é o fruto da laranjeira, árvore da família Rutaceae. Possui porte médio que pode atingir até 8 metros de altura, tronco de cor castanho e copa de formato arredondado. A fruta é de origem asiática, foi levada pelos árabes para a península Ibérica e de lá se propagou pelo mundo.

//     O interior da laranja é formado por gomos, cujo sabor varia do doce ao levemente ácido. É uma fruta rica em vitamina C, sais minerais como ferro, potássio, cálcio. O formato e a cor da fruta variam de acordo com a espécie.`,
//   },
//   {
//     id: 'abacaxi',
//     name: 'Abacaxi',
//     image:
//       'https://images.unsplash.com/photo-1594057688333-dd64260465d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
//     isOrganic: true,
//     from: 'Brasil',
//     nutrients: 'Vitamina A',
//     quantity: '900g',
//     price: 'R$15',
//     description: `O abacaxi é um fruto revestido por uma casca áspera, formada pela união das brácteas e sépalas das flores da planta. Devido ao fato da casca da fruta ser áspera e espinhosa, é comum na gíria brasileira o emprego da expressão “descascar um abacaxi” para designar a resolução de um problema ou situação difícil. A “coroa” do abacaxi, o que lhe confere o título de “rei dos frutos” é, na verdade, um tufo de folhas resultante do tecido meristemático apical que a planta apresenta. Sua polpa é suculenta, de sabor ácido e doce.

//     A fruta é uma ótima fonte de vitamina C, importante para aumentar a resistência do organismo contra algumas doenças, além de ser rica em Cálcio, Ferro, Fósforo e Magnésio. Seu xarope é indicado para combater a bronquite e o chá de sua casca é eficiente no combate a processos inflamatórios.`,
//   },
//   {
//     id: 'lime1',
//     name: 'Limão',
//     image:
//       'https://images.unsplash.com/photo-1578855691621-8a08ea00d1fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     isOrganic: false,
//     from: 'Brasil',
//     nutrients: 'Vitamina C',
//     quantity: '300g',
//     price: 'R$8',
//     description: `Rico em vitamina C, o limão ajuda a fortalecer as defesas do corpo para prevenir várias doenças. Também é uma boa fonte de potássio, magnésio, cálcio e fósforo. O limão ainda possui várias propriedades benéficas ao organismo, tais como: bom para a circulação (redução da pressão arterial), ajuda a digestão, previne alguns tipos de câncer, reduz os níveis de colesterol, adstringente, antibacteriano e antiviral. Utilizado como gargarejo, o limão é bom para aliviar a dor de garganta, úlceras na boca e gengivite. Além disto, o limão possui uma substância própria denominada limoneno que protege o corpo contra os efeitos destrutivos dos radicais livres.`,
//   },
//   {
//     id: 'lime2',
//     name: 'Limão Siciliano',
//     image:
//       'https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     isOrganic: false,
//     from: 'Brasil',
//     nutrients: 'Vitamina A',
//     quantity: '300g',
//     price: 'R$8',
//     description: `Rico em vitamina C, o limão ajuda a fortalecer as defesas do corpo para prevenir várias doenças. Também é uma boa fonte de potássio, magnésio, cálcio e fósforo. O limão ainda possui várias propriedades benéficas ao organismo, tais como: bom para a circulação (redução da pressão arterial), ajuda a digestão, previne alguns tipos de câncer, reduz os níveis de colesterol, adstringente, antibacteriano e antiviral. Utilizado como gargarejo, o limão é bom para aliviar a dor de garganta, úlceras na boca e gengivite. Além disto, o limão possui uma substância própria denominada limoneno que protege o corpo contra os efeitos destrutivos dos radicais livres.`,
//   },
//   {
//     id: 'tomate',
//     name: 'Tomate',
//     image:
//       'https://images.unsplash.com/photo-1594975620064-bad38e1c9e30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     isOrganic: true,
//     from: 'Brasil',
//     nutrients: 'Vitamina A',
//     quantity: '300g',
//     price: 'R$8',
//     description: `O tomate, fruto do tomateiro (Solanum lycopersicum), é um dos frutos mais consumidos em todo o mundo. O mesmo é originário da América do Sul, mais especificamente da região que vai do norte do Chile até a Colômbia. Sabe-se que grandes quantidades de tomates selvagens eram cultivadas na civilização inca, região do atual Peru. Ao contrário do que alguns consideram, o tomate não é um legume, mas sim, um fruto, uma vez que é produto do desenvolvimento do ovário e do óvulo da flor.
//     `,
//   },
// ]

// export function getAll() {
//   return products
// }

// export function getOne(id) {
//   return products.find((product) => product.id === id)
// }

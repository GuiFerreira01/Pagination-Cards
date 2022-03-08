import React, { useState } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {
  const [posts] = useState([{
    id: 1,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3234381/2/3234381205P1.jpg',
    title: 'Smartphone Samsung Galaxy S20',
    description: "128GB 4G Wi-Fi Tela 6.5'' Dual Chip 6GB RAM Câmera Tripla + Selfie 32MP - Cloud Navy",
  },
  {
    id: 2,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3591023/2/3591023246_1GG.jpg',
    title: 'iPhone 12',
    description: "Apple 64GB iOS 5G Wi-Fi Tela 6.1'' Câmera 12MP - Preto"
  },
  {
    id: 3,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3145516/5/3145516526_1SZ.jpg',
    title: 'Capinha iPhone 11PRO',
    description: 'ase Arco-íris Colorida'
  },
  {
    id: 4,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/4296134/9/4296134998_1SZ.jpg',
    title: 'Notebook Lenovo',
    description: 'Ultrafino Ideapad 3 AMD Ryzen 5 8GB 256GB SSD Linux 15.6" Prata'
  },
  {
    id: 5,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/1819240/9/1819240977_1SZ.jpg',
    title: 'Fone de Ouvido Philips',
    description: 'TAUH202 Bluetooth Wireless com Microfone e até 15 horas de bateria - Preto'
  },
  {
    id: 6,
    img: 'https://images-americanas.b2w.io/produtos/43687101/imagens/cadeira-escritorio-executiva-home-office-trevalla-tl-cde-26-1-preta/43687101_1_xlarge.jpg',
    title: 'Cadeira Escritório',
    description: 'Executiva Home Office Trevalla TL-CDE-26-1 Preta'
  },
  {
    id: 7,
    img: 'https://images-americanas.b2w.io/produtos/3854746383/imagens/mesa-80x60-varias-cores-para-escritorio-escrivaninha-tampo-30mm-kasmobile/3854746391_1_xlarge.jpg',
    title: 'Mesa 80x60',
    description: 'Várias Cores Para Escritório Escrivaninha Tampo 30mm kasmobile'
  },
  {
    id: 8,
    img: 'https://images-americanas.b2w.io/produtos/3110656351/imagens/mousepad-gamer-fortrek-speed-mpg102-preto-e-vermelho-44-x-35cm/3110656351_1_xlarge.jpg',
    title: 'Mousepad',
    description: 'Fortrek Speed MPG102 Preto e Vermelho 44 x 35cm'
  },
  {
    id: 9,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg',
    title: 'Smart Tv 43',
    description: ' UHD Samsung 4k 43AU7700 Processador Crystal 4k Tela Sem Limites Alexa Built In Controle Único'
  },
  {
    id: 10,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/1371035/9/1371035915_1SZ.jpg',
    title: 'Geladeira/Refrigerador Electrolux',
    description: '382 litros TW42S Inox Top Freezer Com Dispenser de Água 110v'
  },
  {
    id: 11,
    img: 'https://images-americanas.b2w.io/produtos/43687101/imagens/cadeira-escritorio-executiva-home-office-trevalla-tl-cde-26-1-preta/43687101_1_xlarge.jpg',
    title: 'Cadeira Escritório',
    description: 'Executiva Home Office Trevalla TL-CDE-26-1 Preta'
  },
  {
    id: 12,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3145516/5/3145516526_1SZ.jpg',
    title: 'Capinha iPhone 11PRO',
    description: 'ase Arco-íris Colorida'

  },
  {
    id: 13,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3591023/2/3591023246_1GG.jpg',
    title: 'iPhone 12',
    description: "Apple 64GB iOS 5G Wi-Fi Tela 6.1'' Câmera 12MP - Preto"
  },
  {
    id: 14,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/4296134/9/4296134998_1SZ.jpg',
    title: 'Notebook Lenovo',
    description: 'Ultrafino Ideapad 3 AMD Ryzen 5 8GB 256GB SSD Linux 15.6" Prata'
  },
  {
    id: 15,
    img: 'https://images-americanas.b2w.io/produtos/3110656351/imagens/mousepad-gamer-fortrek-speed-mpg102-preto-e-vermelho-44-x-35cm/3110656351_1_xlarge.jpg',
    title: 'Mousepad',
    description: 'Fortrek Speed MPG102 Preto e Vermelho 44 x 35cm'
  },
  {
    id: 16,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3234381/2/3234381205P1.jpg',
    title: 'Smartphone Samsung Galaxy S20',
    description: "128GB 4G Wi-Fi Tela 6.5'' Dual Chip 6GB RAM Câmera Tripla + Selfie 32MP - Cloud Navy",

  },
  {
    id: 17,
    img: 'https://images-americanas.b2w.io/produtos/3854746383/imagens/mesa-80x60-varias-cores-para-escritorio-escrivaninha-tampo-30mm-kasmobile/3854746391_1_xlarge.jpg',
    title: 'Mesa 80x60',
    description: 'Várias Cores Para Escritório Escrivaninha Tampo 30mm kasmobile'
  },
  {
    id: 18,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/1819240/9/1819240977_1SZ.jpg',
    title: 'Fone de Ouvido Philips',
    description: 'TAUH202 Bluetooth Wireless com Microfone e até 15 horas de bateria - Preto'
  },
  {
    id: 19,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/1371035/9/1371035915_1SZ.jpg',
    title: 'Geladeira/Refrigerador Electrolux',
    description: '382 litros TW42S Inox Top Freezer Com Dispenser de Água 110v'
  },
  {
    id: 20,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg',
    title: 'Smart Tv 43',
    description: ' UHD Samsung 4k 43AU7700 Processador Crystal 4k Tela Sem Limites Alexa Built In Controle Único'
  },
  {
    id: 21,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3234381/2/3234381205P1.jpg',
    title: 'Smartphone Samsung Galaxy S20',
    description: "128GB 4G Wi-Fi Tela 6.5'' Dual Chip 6GB RAM Câmera Tripla + Selfie 32MP - Cloud Navy",
  },
  {
    id: 22,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/4296134/9/4296134998_1SZ.jpg',
    title: 'Notebook Lenovo',
    description: 'Ultrafino Ideapad 3 AMD Ryzen 5 8GB 256GB SSD Linux 15.6" Prata'
  },
  {
    id: 23,
    img: 'https://images-americanas.b2w.io/produtos/3854746383/imagens/mesa-80x60-varias-cores-para-escritorio-escrivaninha-tampo-30mm-kasmobile/3854746391_1_xlarge.jpg',
    title: 'Mesa 80x60',
    description: 'Várias Cores Para Escritório Escrivaninha Tampo 30mm kasmobile'
  },
  {
    id: 24,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3591023/2/3591023246_1GG.jpg',
    title: 'iPhone 12',
    description: "Apple 64GB iOS 5G Wi-Fi Tela 6.1'' Câmera 12MP - Preto"
  },
  {
    id: 25,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3145516/5/3145516526_1SZ.jpg',
    title: 'Capinha iPhone 11PRO',
    description: 'ase Arco-íris Colorida'
  },
  {
    id: 26,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/1371035/9/1371035915_1SZ.jpg',
    title: 'Geladeira/Refrigerador Electrolux',
    description: '382 litros TW42S Inox Top Freezer Com Dispenser de Água 110v'
  },
  {
    id: 27,
    img: 'https://images-americanas.b2w.io/produtos/43687101/imagens/cadeira-escritorio-executiva-home-office-trevalla-tl-cde-26-1-preta/43687101_1_xlarge.jpg',
    title: 'Cadeira Escritório',
    description: 'Executiva Home Office Trevalla TL-CDE-26-1 Preta'
  },
  {
    id: 28,
    img: 'https://images-americanas.b2w.io/produtos/3110656351/imagens/mousepad-gamer-fortrek-speed-mpg102-preto-e-vermelho-44-x-35cm/3110656351_1_xlarge.jpg',
    title: 'Mousepad',
    description: 'Fortrek Speed MPG102 Preto e Vermelho 44 x 35cm'
  },
  {
    id: 29,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/3068549/7/3068549711_1SZ.jpg',
    title: 'Smart Tv 43',
    description: ' UHD Samsung 4k 43AU7700 Processador Crystal 4k Tela Sem Limites Alexa Built In Controle Único'
  },
  {
    id: 30,
    img: 'https://images-americanas.b2w.io/produtos/01/00/img/1819240/9/1819240977_1SZ.jpg',
    title: 'Fone de Ouvido Philips',
    description: 'TAUH202 Bluetooth Wireless com Microfone e até 15 horas de bateria - Preto'
  }]);
  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);



  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Pagination Cards</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;

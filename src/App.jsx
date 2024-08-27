import './style.css';

function App() {
  return (
    <div>
      <header>
        <div className="logo">
          <img
            src="https://wikiwandv2-19431.kxcdn.com/_next/image?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/langes-640px-Olympic_rings_without_rims.svg.png&w=640&q=50"
            alt="Logo de los Juegos Olímpicos"
          />
        </div>
        <nav>
          <ul>
            <li><a href="https://olympics.com/es/olympic-games">Acerca de</a></li>
            <li><a href="https://es.wikipedia.org/wiki/Yusuf_Dike%C3%A7">Yusuf Dikec</a></li>
          </ul>
        </nav>
      </header>

      <main>

        <section data-cy="distributive-header" className="games-info">
          <h1>Juegos Olímpicos</h1>
          <h2>
            Los Juegos Olímpicos son la única competición verdaderamente global, multideportiva y que celebra el deporte en el mundo. Con más de 200 países que participan en más de 400 eventos entre los Juegos de Verano y de Invierno, los Juegos son donde todo el mundo acude a competir, a inspirarse y a estar juntos.
          </h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Olympic_rings_without_rims.svg/1200px-Olympic_rings_without_rims.svg.png"
            alt="Anillos Olímpicos"
            className="olympic-rings"
          />
        </section>

        <section id="yusuf">
          <h2>Yusuf Dikec</h2>
          <p>Yusuf Dikeç es un tirador deportivo turco que compite en las pruebas de pistola.</p>
          <p>Es un suboficial retirado de la Gendarmería Turca y miembro del Club Deportivo Jandarma Gücü.Participó en cinco Juegos Olímpicos de Verano: los de 2008, 2012, 2016, 2020 y 2024.</p>
          <div className="images-container">
            <img
              src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2024/08/06/17229365310225.jpg"
              alt="Yusuf Dikec Competencia"
              className="athlete-image"
            />
          </div>
          <p>Fecha de la competencia: 29 jul 2024</p>
          <p>Logros: Medalla de plata en la categoría de 10 metros.</p>
        </section>

        <section id="podium">
          <h2>Resultados Final 10 m pistola aire compr., equipos mixto Tiro - JJOO de París 2024</h2>
          <div className="podium-container">
            <div className="podium">
              <h3>1er Lugar</h3>
              <p>Zorana Arunovic</p>
              <p>Damir Mikec</p>
              <img
                src="https://thesrpskatimes.com/wp-content/uploads/2024/07/511783_tan2024-07-3011001991-8_f.jpg"
                alt="Medalla de oro"
                className="medal-image"
              />
            </div>
            <div className="podium">
              <h3>2do Lugar</h3>
              <p>Sevval Ilayda Tarhan</p>
              <p>Yusuf Dikec</p>
              <img
                src="https://www.yenimalatya.com.tr/sites/1465/uploads/2024/07/30/0207-17-8-aa-1729718404.jpg?"
                alt="Medalla de plata"
                className="medal-image"
              />
            </div>
            <div className="podium">
              <h3>3er Lugar</h3>
              <p>Manu Bhaker</p>
              <p>Sarabjot Singh</p>
              <img
                src="https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w960/f_auto/primary/jur8zurspron9zsjipqx"
                alt="Medalla de bronce"
                className="medal-image"
              />
            </div>
          </div>
        </section>

        <section id="competencias" className="competencias">
          <h2>Medallas</h2>
          <div className="container--tabs medallero">
            <div className="tab-content tab-content cont-clasificacion">
              <div id="tab-1" className="tab-pane active">
                <div className="data-table cf">
                  <table className="tabla-datos table-hover table-striped medallero">
                    <caption>Medallero París 2024</caption>
                    <colgroup>
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col" className="s-tleft">País</th>
                        <th scope="col"><i className="ico-olympics ico-gm"></i><span className="hidden-xs">Oro</span></th>
                        <th scope="col"><i className="ico-olympics ico-sm"></i><span className="hidden-xs">Plata</span></th>
                        <th scope="col"><i className="ico-olympics ico-bm"></i><span className="hidden-xs">Bronce</span></th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Estados Unidos</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/usa.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">40</span></td>
                        <td><span className="d-m">44</span></td>
                        <td><span className="d-m">42</span></td>
                        <td>126</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>China</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/chn.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">40</span></td>
                        <td><span className="d-m">27</span></td>
                        <td><span className="d-m">24</span></td>
                        <td>91</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Japón</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/jpn.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">20</span></td>
                        <td><span className="d-m">12</span></td>
                        <td><span className="d-m">13</span></td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Francia</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/fra.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">19</span></td>
                        <td><span className="d-m">13</span></td>
                        <td><span className="d-m">11</span></td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Gran Bretaña</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/gbr.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">18</span></td>
                        <td><span className="d-m">17</span></td>
                        <td><span className="d-m">18</span></td>
                        <td>53</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Corea del Sur</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/kor.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">14</span></td>
                        <td><span className="d-m">10</span></td>
                        <td><span className="d-m">12</span></td>
                        <td>36</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Italia</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/ita.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">11</span></td>
                        <td><span className="d-m">12</span></td>
                        <td><span className="d-m">17</span></td>
                        <td>40</td>
                      </tr>
                      <tr>
                        <th className="cont-nombre-equipo align-items-center" scope="row">
                          <span className="nombre-equipo" style={{ marginTop: 5 }}>Alemania</span>
                          <span className="cont-img-escudo">
                            <figure className="bandera s-inb">
                              <img
                                width="22"
                                height="16"
                                loading="lazy"
                                className="img-max-size"
                                src="//as01.epimg.net/img/comunes/fotos/fichas/paises/x-small/ger.png"
                                alt="Escudo/Bandera País"
                              />
                            </figure>
                          </span>
                        </th>
                        <td><span className="d-m">10</span></td>
                        <td><span className="d-m">12</span></td>
                        <td><span className="d-m">15</span></td>
                        <td>37</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Juegos Olímpicos</p>
      </footer>
    </div>
  );
}

export default App;

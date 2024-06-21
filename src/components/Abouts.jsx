import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import './About.css'

const About = () => {
    return (
        <div className="about-page">
            <div className="team-section">
                <div className="team-member-marina">
                    <div className="image">
                        <img className="oNamaSlike" src="/Assets/Images/MarinaProfil.jpg" alt="Team Member 1" />
                    </div>
                    <div className="sekcija-marina">
                        <h2>Marina Bajin</h2>
                        <p><i>psiholog, psihoterapeut pod supervizijom i akreditovani savetnik Asocijacije sistemskih terapeuta</i></p>
                        <div className="linkovi">
                            <Popup
                                trigger={<button className="link">Biografija</button>}
                                modal
                                contentStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
                            >
                                <div className="biografija">
                                    <h1 className="psiholog-naslov">Biografija</h1>
                                    <hr />
                                    <p className="psiholog-tekst">
                                        Zvanje i diplomu master psihologa je stekla na Fakultetu za sport i psihologiju Tims, u Novom Sadu.<br /><br />
                                        Član je:
                                        <ul>
                                            <li>Društva Psihologa Srbije (DPS)</li>
                                            <li>Evropske Federacije Psiholoških Asocijacija (EFPA)</li>
                                            <li>Udruženja za psihoterapiju, savetovanje i koučing Srbije</li>
                                        </ul>
                                    </p>
                                </div>
                            </Popup>
                            <Popup
                                trigger={<button className="link">Specijalnost</button>}
                                modal
                                contentStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
                            >
                                <div>
                                    <h1 className="psiholog-naslov">Specijalnost</h1>
                                    <hr />
                                    <p className="psiholog-tekst">
                                        Tokom akademskih i master studija, stekla je osnovna znanja iz Racionalno-emotivno-bihejvioralne
                                        terapije (REBT) i kognitivno-bihejvioralne terapije (KBT).
                                        Usled želje i potrebe za daljim učenjem i usavršavanjem, nastavlja svoj dalji profesionalni razvoj
                                        u pravcu Sistemske porodične psihoterapije.
                                        Dosadašnjim usavršavanjem stekla je zvanje psihoterapeuta pod supervizijom i akreditovanog savetnika
                                        Asocijacije sistemskih terapeuta (AST).<br /><br />
                                        Praktičko iskustvo stekla je kroz rad sa ženama, žrtvama nasilja, volontiranjem u
                                        Sigurnoj ženskoj kući, koja se nalazi u okviru Centra za socijalni rad.<br /><br />
                                        Marina je specijalizovana za tretmane:
                                        <ul>
                                            <li>ličnog rasta i razvoja</li>
                                            <li>anksioznosti</li>
                                            <li>interpersonalnih i porodičnih odnosa</li>
                                            <li>suočavanja sa stresom</li>
                                            <li>prokrastinacije</li>
                                            <li>motivacije</li>
                                        </ul>
                                    </p>
                                </div>
                            </Popup>
                            <Popup
                                trigger={<button className="link">Pristup radu</button>}
                                modal
                                contentStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
                            >
                                <div>
                                    <h1 className="psiholog-naslov">Pristup radu

                                    </h1>
                                    <hr />
                                    <p className="psiholog-tekst">
                                    Veza između savetnika i klijenta, za mene, predstavlja odnos bezuslovnog prihvatanja, 
                                    zasnovan na dubokom razumevanju, nepokolebljivoj podršci i iskrenom poverenju.<br/><br/>
                                    Odnos između terapeuta i klijenta predstavlja putovanje koje podrazumeva proces učenja, 
                                    razvoja i promena u sigurnom okruženju.<br/><br/> U svom radu, pridajem veliki značaj ovoj posebnoj 
                                    vezi, smatrajući je ključnom za adekvatno vođenje klijenta, oslanjajući se na tehnike 
                                    aktivnog slušanja, dubokog razumevanja, na empatiju i mnogobrojne metode različitih terapijskih 
                                    modaliteta.<br/><br/> Ovakav pristup omogućava stvaranje optimalnog okruženja, u kojem se klijent oseća 
                                    prihvaćeno, slobodno i motivisano da istražuje, uči i prevazilazi svoje izazove.
                                    </p>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>

                <div className="team-member-kristina">
                    <div className="image">
                        <img className="oNamaSlike" src="/Assets/Images/Kristina.jpg" alt="Team Member 2" />
                    </div>
                    <div className="sekcija-kristina">
                        <h2>Kristina Tanasijin</h2>
                        <p><i>psiholog, akreditovani psihoterapeut pod supervizijom i psihoterapijski savetnik</i></p>
                        <div className="linkovi">
                            <Popup
                                trigger={<button className="link">Biografija</button>}
                                modal
                                contentStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
                            >
                                <div className="biografija">
                                    <h1 className="psiholog-naslov">Biografija</h1>
                                    <hr />
                                    <p className="psiholog-tekst">
                                        Kristina Tanasijin je stručnjak iz oblasti psihologije i psihoterapije s višegodišnjim iskustvom u
                                        pružanju podrške i terapije različitim klijentima.<br /><br /> Kristina Tanasijin poseduje diplomu iz psihologije sa
                                        visokim ocenama, stečenu na Univerzitetu u Novom Sadu. Nakon završenih osnovnih studija, posvetila se
                                        usavršavanju u oblasti psihoterapije, stekavši relevantne sertifikate i diplome.<br /><br /> Kristina je takođe aktivna
                                        članica profesionalnih udruženja koja promovišu standarde kvaliteta u pružanju psihološke i terapeutske
                                        podrške.<br /><br /> Član je:
                                        <ul>
                                            <li>Drustva Psihologa Srbije (DPS)</li>
                                            <li>Evropske Federacije Psiholoških Asocijaija (EFPA)</li>
                                            <li>Udruzenja za psihoterapiju</li>
                                            <li>savetovanje i koučing Srbije i Balkanske asocijacije transakcionih
                                                analitičara (TAUS).</li>
                                        </ul>
                                    </p>
                                </div>
                            </Popup>
                            <Popup
                                trigger={<button className="link">Specijalnost</button>}
                                modal
                                contentStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
                            >
                                <div>
                                    <h1 className="psiholog-naslov">Specijalnost</h1>
                                    <hr />
                                    <p className="psiholog-tekst">
                                        Edukovana iz različitih terapijskih modaliteta (Transakciona analiza, Psihodinamska integrativna
                                        psihoterapija, Hipnoterapija, Regresoterapija i Integralna kauzalna psihoterapija).<br /><br />
                                        Zahvaljujući projektu podržanom od strane Agencije za bezbednost u saobraćaju,
                                        Ministarstva unutrašnjih poslova i Drustva Psihologa Srbije obučena je za
                                        intervenisanje u krizi i psihološku podršku porodicama, žrtvama i učesnicima saobraćajnih nezgoda.<br /><br />
                                        Kristina je specijalizovana za tretmane:
                                        <ul>
                                            <li>ličnog rasta i razvoja</li>
                                            <li>anksioznosti</li>
                                            <li>depresije</li>
                                            <li>trauma</li>
                                            <li>poremećaja ishrane</li>
                                            <li>poremećaja ličnosti</li>
                                        </ul>
                                    </p>
                                </div>
                            </Popup>
                            <Popup
                                trigger={<button className="link">Pristup radu</button>}
                                modal
                                contentStyle={{ maxHeight: '70vh', overflowY: 'auto' }}
                            >
                                <div>
                                    <h1 className="psiholog-naslov">Pristup radu
                                    </h1>
                                    <hr />
                                    <p className="psiholog-tekst">
                                        Dobro dosli!<br /><br /> Moje ime je Kristina Tanasijin akreditovani sam psihoterapeut pod
                                        supervizijom i psihoterapijski savetnik.<br /><br /> Pružam podršku svakom pojedincu u njegovom
                                        putovanju ka ličnom razvoju. U zavisnosti od potrebe klijenta koristim integrativni pristup
                                        u terapji.<br /><br /> Takođe kombinujem elemente Transakcione analize, Psihodinamske i Integralne kauzalne
                                        psihoterapije.<br /><br /> U radu sa mnoštvom različitih klijenata stekla sam duboko razumevanje različitih
                                        aspekata i potreba klijenata kao i same ljudske psihodinamike.<br /><br /> Verujem u stvaranje sigurnog i
                                        empatičnog okruženja u terapijskom procesu sa klijentom. Svi klijenti mi mogu slobodno prepustiti
                                        svoje misli, osećanja i brige.
                                    </p>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mission-section">
                <div className="mission-text">
                    <h2>Filozofija Hemere</h2>
                    <p>
                        Naš tim je posvećen pružanju podrške onima koji govore naš jezik i dele našu kulturu,
                        bez obzira na to gde se nalaze u svetu. Razumemo važnost osećaja povezanosti sa
                        domom, posebno u izazovnim vremenima. Naš cilj je da vam pružimo osećaj topline i
                        bliskosti, mesto gde možete pronaći razumevanje i podršku, osećajući se kao kod
                        kuće, bez obzira na fizičku udaljenost.
                        Naša posvećenost radu inspirisana je željom da doprinesemo emocionalnom
                        blagostanju i pozitivnim promenama u životima naših klijenata. Kroz pažljivo vođene
                        seanse i individualizovane pristupe nastojimo da stvorimo sigurno okruženje puno
                        podrške i razumevanja za svakog pojedinca.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
import React from "react";

import './Services.css';

const Services = () => {
    return (
        <div className="services-container">
            <h1 className="page-title">Naše Usluge</h1>

            <div className="service-card savetovanje">
                <h2>Psihoterapija</h2>
                <p>Naša ponuda psihoterapije ističe se savremenim i pristupačnim načinom rada,
                    usmerenim na širok spektar psiholoških teškoća, poput anksioznosti, depresije, stresa i
                    prevazilaženje trauma. Kroz raznovrsne prilagodljive tehnike, težimo da pružimo
                    personalizovanu podršku koja promoviše dobrobit, otkrivanje unutrašnjih potencijala,
                    suočavanje sa izazovima i njihovo prevazilaženje. Svaki psihoterapijski proces je
                    prilagođen da odgovori na jedinstvene potrebe određenog pojedinca, promovišući rast,
                    samosvest i emocionalno blagostanje.
                </p>
            </div>
            <div className="service-card psihoterapija">
                <h2>Savetovanje</h2>
                <p>Savetodavni rad podrazumeva pružanje pomoći i podrške u rešavanju emotivnih i
                    interpersonalnih odnosa, učenje strategija suočavanja sa stresom i povećanje kvaliteta
                    života. Ova usluga je posebno pogodna za one koji traže profesionalnu podršku u
                    suočavanju sa stresom, prokrastinacijom (odlaganjem obaveza), međuljudskim
                    odnosima ili periodima tranzicije (promena mesta prebivališta, posla, razvod, itd.).
                    Pružamo vam poverljiv prostor za traživanje rešenja i promovisanje psiho-
                    emocionalne ravnoteže, vodeći vas ka razvoju emocionalne otpornosti i
                    samopouzdanja.
                </p>
            </div>

            {/* Add more service cards as needed */}

        </div>
    );
}

export default Services;
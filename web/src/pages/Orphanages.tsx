import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import market from '../img/local.svg';

import '../styles/pages/orphanages.css'
import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
    id: number;
    latitude: number;
    long: number;
    name: string
}

function Orphanages() {
    const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

    console.log(orphanages);

    useEffect(() => {
        api.get("/orphanages").then(res => {
            setOrphanages(res.data);
        });
    }, []);

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={market} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita :)</p>
                </header>

                <footer>
                    <strong>São Leopoldo</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>

            <Map 
                center={[-29.7240536,-51.1899153]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                />
                {orphanages.map(orphanage => {
                    return(
                        <Marker
                            key={orphanage.id}
                            icon={mapIcon}
                            position={[orphanage.latitude , orphanage.long]} 

                        >
                            <Popup 
                                closeButton={false}
                                minWidth={240}
                                maxWidth={240}
                                className="map-popup"
                            > 
                                {orphanage.name}
                                <Link to={`/orphanages/${orphanage.id}`}>
                                    <FiArrowRight size={20} color="#fff" />
                                </Link>
                            </Popup>
                        </Marker>
                    )
                })}
            </Map>

            <Link to="/orphanages/create" className="add-orphanage">
                <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
}

export default Orphanages;
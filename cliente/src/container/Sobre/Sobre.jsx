import React, { useEffect, useState } from 'react';
import "./Sobre.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const Sobre = () => {

    const [sobres, setSobres] = useState([]);

    useEffect(() => {
        const query = '*[_type == "sobres"]';
        client.fetch(query).then((data) => {
            setSobres(data);
        });
    }, []);
    return (
        <>
            <h2 className='head-text'> Eu sei que <span>Bom Desenvolvimento</span> <br />Significa <span>Bom negócio</span></h2>

            <div className='app__perfis'>
                {
                    sobres.map((sobre, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            whileHover={{ scale: 1.1 }}
                            className='app__perfil-item'
                            key={sobre.titulo + index}
                        >
                            <img src={urlFor(sobre.imagem)} alt={sobre.titulo} />
                            <h2
                                className='bold-text'
                                style={{
                                    marginTop: 20,
                                }}
                            >{sobre.titulo}</h2>
                            <p className='p-text' style={{ marginTop: 10 }}>{sobre.descricao}</p>
                        </motion.div>
                    ))
                }
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Sobre, 'app__sobre'),
    'sobre',
    'app__whitebg'
);
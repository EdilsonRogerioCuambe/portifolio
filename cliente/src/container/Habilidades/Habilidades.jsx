import { useEffect, useState } from 'react';
import "./Habilidades.scss";
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import {Tooltip} from 'react-tooltip';
import { motion } from 'framer-motion';

const Habilidades = () => {

    const [habilidades, setHabilidades] = useState([]);
    const [experiencia, setExperiencia] = useState([]);

    useEffect(() => {
        const queryHabilidades = `*[_type == "habilidades"]`;
        const queryExperiencias = `*[_type == "experiencias"]`;

        client.fetch(queryExperiencias)
            .then((data) => {
                setExperiencia(data);
            })
            .catch((err) => console.log(err));

        client.fetch(queryHabilidades)
            .then((data) => {
                setHabilidades(data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <h2 className='head-text'>Habilidades & Experiencias</h2>
            <div className='app__skills-container'>
                <motion.div
                    className='app__skills-list'
                >
                    {habilidades?.map((habilidade, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className='app__skills-item app__flex'
                            key={habilidade.nome}
                        >
                            <div className='app__flex ' style={{ backgroundColor: habilidade.bgColor }}>
                                <img src={urlFor(habilidade.icon)} alt={habilidade.nome} />
                            </div>
                            <p className='p-text'>{habilidade.nome}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div
                    className='app__skills-exp'
                >
                    {experiencia?.map((experiencia) => (

                        <motion.div
                            className='app__skills-exp-item'
                            key={experiencia.ano}
                        >
                            <div className='app__skills-exp-year'>
                                <p className='bold-text'>{experiencia.ano}</p>
                            </div>
                            <motion.div className='app__skills-exp-works'>
                                {experiencia.trabalhos.map((trabalho) => (
                                    <>
                                    <motion.div
                                        whileInView={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.5 }}
                                        className='app__skills-exp-work'
                                        key={trabalho.nome}
                                        data-tip
                                        data-for={trabalho.cargo}
                                    >
                                        <h4 className='bold text'>{trabalho.cargo}</h4>
                                        <p className='p-text'>{trabalho.empresa}</p>
                                    </motion.div>
                                    <Tooltip
                                        id={trabalho.cargo}
                                        effect='solid'
                                        arrowColor='#fff'
                                        className='skills-tooltip'
                                    >
                                        {trabalho.descricao}
                                    </Tooltip>
                                </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Habilidades, 'app__skills'), 
    'habilidades',
    "app__whitebg"
);
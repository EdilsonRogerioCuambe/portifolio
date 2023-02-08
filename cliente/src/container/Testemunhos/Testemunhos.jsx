import "./Testemunhos.scss"
import { useEffect, useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import { motion } from 'framer-motion';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const Testemunhos = () => {

    const [testemunhos, setTestemunhos] = useState([]);
    const [marcas, setMarcas] = useState([]);
    const [atual, setAtual] = useState(0);

    useEffect(() => {
        const queryTestemunhos = `*[_type == "testemunhos"]`;
        const queryMarcas = `*[_type == "marcas"]`;
        
        client.fetch(queryTestemunhos)
            .then((data) => {
                setTestemunhos(data);
            })
            .catch((err) => console.log(err));

        client.fetch(queryMarcas)
            .then((data) => {
                setMarcas(data)
            })
            .catch((error) => console.log(error))
    }, []);

    const test = testemunhos[atual]

    const handleClick = (index) => {
        setAtual(index);
    }

    return (
        <>
            {
                testemunhos.length && (
                    <>
                        <div className="app__testimonial-item app__flex">
                            <img src={urlFor(test.imagem)} alt="testemunhos" />
                            <div className="app__testimonial-content">
                                <p className="p-text">{test.testemunho}</p>
                                <div>
                                    <h4 className="bold-text">{test.nome}</h4>
                                    <h5 className="bold-text">{test.empresa}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="app__testimonial-btns app__flex">
                            <div className="app__flex" onClick={() => handleClick(atual === 0 ? testemunhos.length - 1 : atual - 1)}>
                                <HiChevronDoubleLeft />
                            </div>
                            <div className="app__flex" onClick={() => handleClick(atual === testemunhos.length - 1 ? 0 : atual + 1)}>
                                <HiChevronDoubleRight />
                            </div>
                        </div>
                    </>
                )
            }
            <div className="app__testimonial-brands app__flex">
                {
                    marcas.map((marca) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5, type: "tween" }}
                            key={marca._id}
                        >
                            <img src={urlFor(marca.imagem)} alt={marca.nome} />
                        </motion.div>
                    ))
                }
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Testemunhos, "app__testimonial"),
    "testemunhos",
    "app__primarybg"
);
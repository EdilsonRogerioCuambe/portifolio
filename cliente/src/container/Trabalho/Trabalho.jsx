import { useEffect, useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import "./Trabalho.scss";


const Trabalho = () => {

    const [filtroAtivo, setFiltroAtivo] = useState("Todos");
    const [cardAnimado, setCardAnimado] = useState({ y: 0, opacity: 1 });
    const [trabalhos, setTrabalhos] = useState([]);
    const [trabalhosFiltrados, setTrabalhosFiltrados] = useState([]);

    const handleTrabalhoFiltro = (item) => {
        setFiltroAtivo(item);
        setCardAnimado({ y: 100, opacity: 0 });

        setTimeout(() => {
            if (item === "Todos") {
                setTrabalhosFiltrados(trabalhos);
            } else {
                const novoTrabalhos = trabalhos.filter((trabalho) => trabalho.tags.includes(item));
                setTrabalhosFiltrados(novoTrabalhos);
            }
            setCardAnimado({ y: 0, opacity: 1 });
        }, 500);
    }

    useEffect(() => {
        const query = `*[_type == "trabalhos"]`;
        client.fetch(query).then((res) => {
            console.log(res);
            setTrabalhos(res);
            setTrabalhosFiltrados(res);
        })
    }, [])

    return (
        <>
            <h2 className='head-text'>Minha sessão de <span>portfólio</span> criativo</h2>
            <div className='app__work-filter'>
                {
                    ["UI/UX", "Web App", "Mobile App", "React JS", "Todos"].map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleTrabalhoFiltro(item)}
                            className={`app__work-filter-item app__flex p-text ${filtroAtivo === item ? "item-active" : ""}`}
                        >
                            {item}
                        </div>
                    ))
                }
            </div>
            <motion.div
                animate={cardAnimado}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__work-portfolio'
            >
                {
                    trabalhosFiltrados.map((trabalho, index) => (
                        <div key={index} className='app__work-item'>
                            <div className='app__work-img app__flex'>
                                <img src={urlFor(trabalho.imagem)} alt={trabalho.titulo} />
                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.5 }}
                                    className='app__work-hover app__flex'
                                >
                                    <a href={trabalho.linkProjeto} target='_blank' rel='norefer'>
                                        <motion.div
                                            whileHover={{ scale: [1, 0.9] }}
                                            whileInView={{ scale: [1, 0.9] }}
                                            transition={{ duraation: 0.25 }}
                                            className='app__flex'
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>

                                    <a href={trabalho.linkRepositorio} target='_blank' rel='norefer'>
                                        <motion.div
                                            whileHover={{ scale: [1, 0.9] }}
                                            whileInView={{ scale: [1, 0.9] }}
                                            transition={{ duraation: 0.25 }}
                                            className='app__flex'
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>

                            <div className='app__work-content app__flex'>
                                <h4 className='bold-text'>{trabalho.titulo}</h4>
                                <p className='p-text' style={{ marginTop: 10 }}>{trabalho.descricao}</p>
                                <div className='app__work-tag app__flex'>
                                    <p className='p-text'>{trabalho.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </motion.div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Trabalho, "app__works"), 
    "trabalho",
    "app__primarybg"
);
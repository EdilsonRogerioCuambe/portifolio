import { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { images } from '../../constants';
import "./Footer.scss"

const Footer = () => {

    const [formulario, setFormulario] = useState({
        nome: '',
        email: '',
        mensagem: ''
    });

    const [enviado, setEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    const { nome, email, mensagem } = formulario;

    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    }
    
    const handleSubmit = async () => {
        setLoading(true);
        
        const contato = {
            _type: 'contato',
            nome: nome,
            email: email,
            mensagem: mensagem
        }

        client.create(contato).then(() => {
            setEnviado(true);
            setLoading(false);
            setFormulario({
                nome: '',
                email: '',
                mensagem: ''
            });
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    return (
        <>
            <h2 className='head-text'>Tome um café & converse comigo</h2>
            <div className='app__footer-cards'>
                <div className='app__footer-card'>
                    <img src={images.email} alt="email" />
                    <a href="mailto:edilson@aluno.unilab.edu.br" className='p-text'>
                        Edilson@aluno.unilab.edu.br
                    </a>
                </div>
                <div className='app__footer-card'>
                    <img src={images.mobile} alt="email" />
                    <a href="tel: (85) 98940-0950" className='p-text'>
                        (85) 98940-0950
                    </a>
                </div>
            </div>

            {
                !enviado ? <div className='app__footer-form app__flex'>
                <div className='app__flex'>
                    <input type="text" className='p-text' placeholder='Seu Nome' name='nome' value={nome} onChange={handleChangeInput} />
                </div>
                <div className='app__flex'>
                    <input type="email" className='p-text' placeholder='Seu Email' name='email' value={email} onChange={handleChangeInput} />
                </div>
                <div className=''>
                    <textarea onChange={handleChangeInput} className='p-text' name="mensagem" cols="30" placeholder='Sua mensagem' rows="10" />
                </div>
                <button type='button' className='p-text' onClick={handleSubmit}>
                    {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
            </div> : 
                <h3 className='head-text'>Muito Obrigado por entrar em contato!</h3>
            }

            
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contato",
    "app__whitebg"
);
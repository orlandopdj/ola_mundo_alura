import styles from './SobreMim.module.css'
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from '../../assets/sobre_mim_capa.png'
import fotoSobreMim from '../../assets/sobre_mim_foto.png'


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Orlando!
            </h3>
            <img
                src={fotoSobreMim}
                alt='foto de Orlando'
                className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>Oi, tudo bem? Eu sou estudante de Front-end na Alura e estou feliz de te ver por aqui.</p>

            <p className={styles.paragrafo}>Olá, meu nome é Orlando e sou um estudante dedicado de front-end na Alura. Com uma paixão pela criação de interfaces interativas e experiências de usuário envolventes, estou empenhado em aprimorar minhas habilidades de desenvolvimento web. Através do currículo abrangente da Alura, estou aprendendo os conceitos fundamentais de HTML, CSS e JavaScript, bem como explorando frameworks populares como React. Estou constantemente buscando expandir meu conhecimento e estar atualizado com as últimas tendências e melhores práticas da indústria, a fim de me tornar um desenvolvedor front-end competente e capaz de criar soluções inovadoras</p>

            <p className={styles.paragrafo}>Além dos estudos de front-end, tenho várias outras paixões que me mantêm animado e equilibrado. Uma delas é pedalar, adoro sentir o vento no rosto enquanto percorro trilhas e descubro novos lugares. Também sou um entusiasta de jogos, tanto no mundo virtual quanto no campo de futebol. Passo horas mergulhado em aventuras emocionantes e desafiadoras, e também adoro reunir amigos para uma partida de futebol animada. Além disso, tenho prazer em estudar e explorar novos códigos, mergulhando em projetos pessoais para aprimorar minhas habilidades e criar soluções criativas. Essas atividades me ajudam a relaxar, me divertir e também aperfeiçoar minhas habilidades além do mundo da programação.</p>


        </PostModelo>
    )
}
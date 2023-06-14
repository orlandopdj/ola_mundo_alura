import styles from './Banner.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minhaFoto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, mundo
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Orlando Junior, estudante de Front-end da Alura. Aqui compartilho vários conhecimentos que sigo aprendendo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido} 
                    aria-hidden={true}
                    alt='circulo colorido'/>

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Orlando Junior sorrindo'
                />
            </div>
        </div>
    )
}
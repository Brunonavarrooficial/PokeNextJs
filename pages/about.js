import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Em todo o Brasil, crianças recitam, fascinadas, palavras tão estranhas
        como Charmander ou Psyduck, sabem de cor uma lista infindável de outros
        nomes esquisitos e andam cheias de bugigangas feitas com as formas desses
        personagens. Eles são os Pokémon (abreviatura de pocket monsters,
        monstros de bolso em inglês), nova versão de uma febre que se repete de tempos
        em tempos: a dos personagens ou brinquedos que enlouquecem meninos e meninas,
        especialmente os menores de 10 anos.
      </p>
      <Image
        src={'/images/charizard.png'}
        width='300'
        height={'300'}
        alt='Charizard'
      />
    </div>
  )
}

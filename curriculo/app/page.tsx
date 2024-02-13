import Image from 'next/image';

export default function Home(){
    let imagePath = "/beach_background.jpg";
    
    return(
        <section>
            <section 
            style={{backgroundImage: `url(${imagePath})`}}
            className="bg-cover bg-center"
            >
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>
                                <p>Olá mundo</p>

            </section>
        </section>
    );
}
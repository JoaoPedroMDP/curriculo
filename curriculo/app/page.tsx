export default function Home() {
    let imagePath = "/beach_background.jpg";
    
    return(
        <section>
            <section style={{backgroundImage: `url(${imagePath})`}} className="bg-cover bg-center flex">
                <p>Olá mundo!</p>
            </section>
        </section>
    );
}
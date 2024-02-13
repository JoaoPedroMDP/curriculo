import Image from "next/image";

export default function Home() {
    let imagePath = "/beach_background.jpg";
    
    return(
        <section>
            <section style={{backgroundImage: `url(${imagePath})`}} className="bg-cover bg-center flex">
                <p>João Pedro Martins de Paula</p>
                <Image 
                className="rounded-full" 
                src={"/author_profile.png"} 
                width={200}
                height={300} 
                alt="Autor do currículo de touca, numa praia nublada com neblina"
                />
            </section>
        </section>
    );
}
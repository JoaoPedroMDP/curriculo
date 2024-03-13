export default function DataConsentSection({consented, updateConsent} : {consented: boolean | undefined, updateConsent: CallableFunction}){
    if(consented === undefined){
        return(
            <section id="data-consent" className="fixed bottom-0 bg-white text-black w-full px-5 py-3 flex flex-col text-center font-raleway">
                <h1 className="text-[20px] font-bold">Oráculo lhe oferece cookies. Aceitas?</h1>
                <p className="text-[15px]">Estão saborosos, hehehe</p>
                <div className="flex flex-row justify-around lg:justify-center lg:gap-20 mt-2">
                    <button onClick={() => updateConsent(false)} className="font-semibold border-[2px] border-black bg-zinc-200 px-5 py-1">Rejeitar</button>
                    <button onClick={() => updateConsent(true)} className="font-semibold border-[2px] text-yellow border-yellow bg-black px-5 py-1">Aceitar</button>
                </div>
            </section>
        );
    }
}
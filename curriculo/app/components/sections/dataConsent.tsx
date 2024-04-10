export default function DataConsentSection({consented, updateConsent} : {consented: boolean | undefined, updateConsent: CallableFunction}){
    if(consented === undefined){
        return(
            <section id="data-consent" className="print:hidden animate-slideIn fixed bottom-0 bg-white text-black w-full px-5 py-4 flex flex-col text-center font-raleway border-yellow border-t-8">
                <p className="text-[20px] font-bold">A &lsquo;Oráculo&rsquo; lhe oferece cookies. Aceitas?</p>
                <p className="text-[16px]">Estão saboroosos, hehehe</p>
                <p className="text-[12px] mt-2">Ao continuar na página, você aceita que dados de navegação sejam coletados.</p>
                <div className="flex flex-row justify-around lg:justify-center lg:gap-20 pt-3">
                    <button onClick={() => updateConsent(true)} className="font-semibold border-[2px] text-yellow border-yellow bg-black px-5 py-1">Entendi!</button>
                </div>
            </section>
        );
    }
}
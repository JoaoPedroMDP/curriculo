'use client';

export default function LearnableC({learnable}: {learnable: any, onClickHandler?: any}){
    let themeCustomization: string = learnable.theme == "dark" ? "group-hover:text-lightBlue after:bg-lightBlue" : "group-hover:text-yellow after:bg-yellow";
    let underlineConfig = "after:relative after:bottom-[1px] after:duration-200 after:block after:w-0 after:transition-width after:group-hover:w-[100%] after:h-[1px]"
    let textConfig = "text-nowrap text-center text-darkBlue"

    return (
    <div className={`group flex flex-grow justify-center transition-color duration-200 hover:bg-darkBlue p-5`}>
        <p 
        className={`${themeCustomization} ${underlineConfig} ${textConfig} w-min transition-color duration-300 cursor-pointer`}
        >
            {learnable.name}
        </p>
    </div>
    );
}
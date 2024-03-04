'use client';

export default function LearnableC({learnable}: {learnable: any, onClickHandler?: any}){
    let underlineConfig = "after:relative after:bottom-[1px] after:duration-200 after:block after:w-0 after:transition-width after:group-hover:w-[100%] after:h-[1px]"
    let textConfig = "text-nowrap text-center group-hover:text-whiteBlue text-[18px]"

    return (
    <div className={`group flex flex-grow justify-center transition-color duration-200 hover:bg-darkBlue p-5`}>
        <p className={`${underlineConfig} ${textConfig} after:bg-whiteBlue w-min transition-color duration-300 cursor-pointer`}>
            {learnable.name}
        </p>
    </div>
    );
}
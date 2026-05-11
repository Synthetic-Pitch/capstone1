type SizeType = {
    className?:string;
}
const Tablet = ({className}:SizeType) => {
    return (
        <div className={className}>
            <section className=" bg-[red] min-h-[calc(100dvh-58px)]">
               
            </section>
            <section className=" bg-[#e96464] h-dvh">
               
            </section>
        </div>
    );
};

export default Tablet;
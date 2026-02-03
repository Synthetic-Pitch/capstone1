type SizeType = {
    className?:string;
}
const Tablet = ({className}:SizeType) => {
    return (
        <div className={className}>Tablet</div>
    );
};

export default Tablet;
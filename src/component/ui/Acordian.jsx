
import PropTypes from 'prop-types';

const Accordian = ({ title, index, text, isActive, setActiveIndex }) => {
    const handleToggle = () => {
        const next = isActive ? null : index;
        setActiveIndex(next);
    }
    return (
        <div className={`w-full flex flex-col justify-center items-start gap-3 opacity-100 rounded-3xl p-6 max-w-[529px] border-2 ${isActive ? 'bg-[#e8ebf1]' : null}`} onClick={handleToggle}>
            <span className={`${isActive ? 'text-black font-xl text-2xl' : 'text-[#4f5662]'}`}>{title}</span>
            <span className={`${isActive ? 'text-[#4f5662]' : 'hidden'}`}>{text}</span>
        </div>
    );
};

Accordian.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    setActiveIndex: PropTypes.func.isRequired,
};

export default Accordian;






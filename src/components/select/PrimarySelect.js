export default function PrimarySelect({ options, optionsClassName }) {
    return (
        <select className='text-color-border transparent-background transparent-border-color text-color'>
            {options.map((option, index) =>
                <option key={index} className={optionsClassName} value={option}>{option}</option>
            )}
        </select>
    )
}

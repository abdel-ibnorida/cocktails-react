import './Filters.css'
import { useState } from "react";

const Filters = ({ setFilters }) => {

    const [checkInputRum, setCheckInputRum] = useState(true);
    const [checkInputVodka, setCheckInputVodka] = useState(true);
    const [checkInputGin, setCheckInputGin] = useState(true);
    const [checkInputWhiskey, setCheckInputWhiskey] = useState(true);

    const onHandleCheckRum = () => setCheckInputRum(!checkInputRum);
    const onHandleCheckVodka = () => setCheckInputVodka(!checkInputVodka);
    const onHandleCheckGin = () => setCheckInputGin(!checkInputGin);
    const onHandleCheckWhiskey = () => setCheckInputWhiskey(!checkInputWhiskey);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        setFilters([
            checkInputRum && "rum",
            checkInputVodka && "vodka",
            checkInputGin && "gin",
            checkInputWhiskey && "whiskey"
          ]);
    }
    return (
        <form className="Filters" onSubmit={onHandleSubmit} >
            <label htmlFor="rum">Rum</label>
            <input
                type="checkbox"
                name="rum"
                value={checkInputRum}
                onChange={onHandleCheckRum}
                checked={checkInputRum}
            />
            

            <label htmlFor="vodka">Vodka</label>
            <input
                type="checkbox"
                name="vodka"
                value={checkInputVodka}
                onChange={onHandleCheckVodka}
                checked={checkInputVodka}
            />

            <label htmlFor="gin">Gin</label>
            <input
                type="checkbox"
                name="gin"
                value={checkInputGin}
                onChange={onHandleCheckGin}
                checked={checkInputGin}
            />

            <label htmlFor="whiskey">Whiskey</label>
            <input
                type="checkbox"
                name="whiskey"
                value={checkInputWhiskey}
                onChange={onHandleCheckWhiskey}
                checked={checkInputWhiskey}
            />

            <input type="submit" value="Apply" />

        </form>
    )
}

export default Filters;
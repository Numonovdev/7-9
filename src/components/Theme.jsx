import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { light, dark } from '../redux/ThemeState';

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.value);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    function handleTheme(e) {
        e.preventDefault();
        if (theme === 'light') {
            dispatch(dark());
        } else {
            dispatch(light());
        }
    }

    return (
        <div className='px-2 py-1 w-20 rounded-full bg-white'>
            <button
                className="px-3 rounded-full bg-black"
                onClick={handleTheme}
            >.
            </button>
        </div>
    );
};

export default Theme;

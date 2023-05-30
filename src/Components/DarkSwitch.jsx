
import {MdOutlineLightMode } from 'react-icons/md'
import {MdLightMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

export default function DarkSwitch(){
    const { systemTheme, theme, setTheme } = useTheme()
    const currntTheme = theme === 'system' ? systemTheme:theme

    return(
        <>
        {
            currntTheme === 'dark' ? (<MdOutlineLightMode className="mx-4 text-2xl cursor-pointer hover:text-amber-500" onClick={()=> setTheme('light')} /> ):(<MdLightMode className="mx-4 text-2xl cursor-pointer hover:text-amber-500" onClick={()=> setTheme('dark')}/>)
        }
          

        </>
    )
}
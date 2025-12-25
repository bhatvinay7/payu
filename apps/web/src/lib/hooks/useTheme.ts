import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../redux/store'
import { toggleTheme, setTheme, initializeTheme } from '../redux/featuresSlice/themeSlice'
import { useEffect } from 'react'

export default function useTheme(): { value: string, call_Theme_Dispatch: () => Promise<void> } {
    const dispatch = useDispatch<AppDispatch>()
    const value = useSelector((state: RootState) => state.theme.mode)

    // Initialize theme on mount
    useEffect(() => {
        dispatch(initializeTheme())
    }, [dispatch])

    async function call_Theme_Dispatch() {
        dispatch(toggleTheme())
    }

    return {
        value,
        call_Theme_Dispatch
    }
}

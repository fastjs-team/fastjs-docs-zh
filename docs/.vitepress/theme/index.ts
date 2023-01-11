import DefaultTheme from 'vitepress/theme'
import './scroll.css'

try {
    const b = document.body

    b.onload = () => {
        setInterval(() => {
            b.querySelectorAll(".VPDocAsideOutline .outline-link").forEach(el => {
                el.innerHTML = el.innerHTML.replace(/v[0-9.]+/g, "")
            })
        }, 100)
    }
} catch (e) {

}
export default DefaultTheme
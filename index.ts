const w : number = window.innerWidth 
const h : number = window.innerHeight 
const strokeFactor : number = 90 
const parts : number = 4 
const scGap : number = 0.02 / parts 
const delay : number = 20 
const sizeFactor : number = 6.9 
const rFactor : number = 22.9 
const deg : number = Math.PI 
const backColor : string = "#bdbdbd"
const colors : Array<string> = [
    "#f44336",
    "#673AB7",
    "#00C853",
    "#2962FF",
    "#FFC107"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }
}
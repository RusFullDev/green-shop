import { ref ,onMounted} from "vue"


export function useIntersectionObserve(target){
    const isIntersecting = ref(false)

    const observer = new IntersectionObserver((entry)=>{

    })
    onMounted(()=>{
observer.observe(target)
    })

    return {isIntersecting}
}
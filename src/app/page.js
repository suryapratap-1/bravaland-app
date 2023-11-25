import Navbar from '@/component/Navbar'
import Banner from '@/component/Banner'
import LoopContent from '@/component/LoopContent'

export default function Home() {
    return (
        <main className='overflow-x-hidden'>
            <Navbar />
            <Banner />
            <LoopContent />
        </main>
    )
}

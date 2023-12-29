'use client'
import { Button } from '@/components/ui/button'

export default function Home() {
    return (
        <div className="tw-w-full">
            <Button onClick={() => alert('Hello')}>Tickme</Button>
        </div>
    )
}

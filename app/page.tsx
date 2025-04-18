import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <div className="flex text-5xl p-4 bg-zinc-300 text-zinc-700 justify-center">
                IBLOG
            </div>
            <div className=" h-[1000px] position relative -bottom-28 ">
                <div className="grid p-5">
                    <div className="flex justify-between ">
                        <div className="grid ">
                            <Link className="rounded border-4 border-cyan-400" href={"/photos"}>
                                <Image className="" src={"/image.jpg"} alt="image" height={100} width={100}/>
                            </Link> 
                            <div className="flex border-0 justify-center">
                                Photos
                            </div>
                        </div>
                        <div >
                            <Link href={"/videos"}>
                                videos
                            </Link> 
                            videos
                        </div>
                        <div>box</div>
                        <div>box</div>
                    </div>
                    <div className="flex justify-between" >
                        <div>box</div>
                        <div>box</div>
                        <div>box</div>
                        <div>box</div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}
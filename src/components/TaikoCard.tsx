import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import CountdownTimer from "@/components/ui/count-down-timer";

export const TaikoCard = ({ img }: { img: (string | null)[] }) => {
    return (
        <div className="flex-initial w-[340px] p-[15px] rounded-2xl bg-white">
            {/* Header */}
            <div className="h-[70px] flex place-content-between mb-[20px]">
                <div className="">
                    <div className="text-[14px] text-slate-400 mb-1 font-regular line-clamp-1">
                        UEFA Nations League 24/25
                    </div>
                    <p className="text-[18px] leading-tight	 font-medium line-clamp-2 ">
                        Belgium v. Italy
                    </p>
                </div>
                <Image
                    className="ml-[10px] w-[40px] h-[40px] relative"
                    src="/leagueLogo.webp"
                    width={40}
                    height={40}
                    alt="Robinos"
                />
            </div>

            {/* Options */}
            <div className="grid gap-[10px] grid-cols-2  mb-[10px]">
                {/* Option 1 */}
                <div className="border-slate-light bg-slate-gradient rounded-xl p-[15px] pt-[20px] transition duration-1000 outline-blue-700">
                    {/* Name */}
                    <div className="relative flex place-content-center">
                        <div className="text-14 font-medium text-center mb-4 truncate w-auto inline">
                            BEL
                        </div>
                        <span
                            className={`text-14 font-medium ml-[5px] negative`}
                        >
                            -0.5
                        </span>
                    </div>

                    {/* Image */}
                    <div className="h-100 w-100 mx-auto mb-4">
                        <Image
                            src={img[0] || "/leagueLogo.webp"}
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>

                    {/* ROI */}
                    <div className="flex place-content-between items-end">
                        <div>
                            <div className="text-14 text-slate-400 mb-1 font-regular">
                                ROI
                            </div>
                            <div className="text-20 font-medium">
                                2.53
                            </div>
                        </div>
                    </div>
                </div>

                {/* Option 2 */}
                <div className="border-slate-light bg-slate-gradient rounded-xl p-[15px] pt-[20px] transition duration-1000 outline-blue-700">
                    {/* Name */}
                    <div className="relative flex place-content-center">
                        <div className="text-14 font-medium text-center mb-4 truncate w-auto inline">
                            ITA
                        </div>
                        <span
                            className={`text-14 font-medium ml-[5px] positive`}
                        >
                            0.5
                        </span>
                    </div>

                    {/* Image */}
                    <div className="h-100 w-100 mx-auto mb-4">
                        <Image
                            src={img[1] || "/leagueLogo.webp"}
                            width={100}
                            height={100}
                            alt=""
                        />
                    </div>

                    {/* ROI */}
                    <div className="flex place-content-between items-end">
                        <div>
                            <div className="text-14 text-slate-400 mb-1 font-regular">
                                ROI
                            </div>
                            <div className="text-20 font-medium">
                                1.52
                            </div>
                        </div>
                        <Image
                            className="mb-[5px] hidden"
                            src="/img/4star.svg"
                            width={18}
                            height={18}
                            alt="Robinos"
                        />
                    </div>
                </div>
            </div>

            {/* Bar */}
            <div className="border-slate-light rounded-xl h-70 mb-[15px] flex place-content-between items-center px-4">
                <div className=" my-auto text-20 font-medium">
                    38%
                </div>
                <Progress
                    className="mx-[10px]"
                    value={38}
                />
                <div className=" my-auto text-20 font-medium">
                    62%
                </div>
            </div>

            {/* Pool prize */}
            <div className="h-[70px] bg-white border-slate-light rounded-xl px-[15px] flex place-content-between mb-4">
                <div className="my-auto">
                    <div className="text-14 text-slate mb-1 font-regular">
                        Prize pool
                    </div>
                    <div className="text-20 text-black font-medium">
                        40.0K
                        RBN
                    </div>
                </div>
                <div className="w-10 h-10 my-auto">
                    <Image
                        src="/leagueLogo.webp"
                        width={100}
                        height={100}
                        alt=""
                    />
                </div>
            </div>

            {/* Separator */}
            <div className="separator mb-[15px]"></div>

            {/* Footer */}
            <CountdownTimer timestamp={1731812400} />
        </div>
    )
}

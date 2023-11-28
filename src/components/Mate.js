export default function Mate({id, name, img, bio, github}) {
  return (
        <div class="basis-1/5 min-w-[305px] flex justify-center items-center  ring-8 ring-[#252436BF] bg-[#B8693E] shadow-lg md:w-1/2 lg:w-1/4">
            <div class="bg-[url('https://i.imgur.com/DNVGE5B.png')] w-full bg-repeat">
                <div class="mx-5 mt-2 flex justify-between items-center shadow-md border-2 px-2 pt-1 rounded-[2px] border-opacity-50  border-t-teal-50 border-l-teal-50  border-b-[#000000] border-r-[#000000]">
                    <span class="font-Merriweather font-bold text-lg">{name}</span>
                    <span><img src="https://static.wikia.nocookie.net/yugioh/images/a/a1/EARTH.svg" height="30" width="30" alt="att"/></span>
                </div>
                <div class="mx-7 my-1 flex justify-end items-center">
                    <span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Starball_Red.svg" height="20" width="20"alt="star"/>
                    </span>
                </div>
                <div
                    class="mx-auto rounded-[1px] ring-4 my-1 h-[260px] w-[260px] shadow-lg shadow-black ring-offset-0 ring-[#808080] ">
                    <img class="object-fill" src={img} alt="main_image"/>
                </div>
                <div class="mx-7 my-1 flex justify-end items-center">
                    <span class="text-xs font-bold font-Merriweather">NECH-EN026</span>
                </div>
                <div class="mx-2">
                    <div class="bg-[url('https://i.imgur.com/neIKEeX.png')] bg-repeat">
                        <div class="bg-slate-200 mx-1 my-2 px-1 ring-4 ring-[#FFC85F] font-Merriweather">
                            <h1 class="font-bold">[Psychic/Tuner/Effect]</h1>
                            <p class="text-[10px]">{bio}</p>
                            <hr class="h-1 bg-black"/>
                            <div class="flex gap-2 justify-end items-center">
                                <span>ATK/52300</span>
                                <span>DEF/1800</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mx-2 flex justify-between items-center">
                    <span class="text-[9px]">000000{id}</span>
                    <span class="text-[9px]">©1996 KAZUKI TAKAHASHI</span>
                </div>
            </div>
        </div>
  )
  // from https://tailwindcomponents.com/component/yugioh-card
}
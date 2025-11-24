import imgUntitledDesign11 from "figma:asset/f8940e4a79004818815b7cfb12a2c0a61cee06b9.png";
import imgPayWithQr from "figma:asset/1598191ee7cf043484952d74c8b13ffa7f08ed65.png";
import imgProfile from "figma:asset/4a5369b231c51329b2cd60094e35e45f54c0dcf0.png";
import img from "figma:asset/a55fa51cc24e84de597b43733a8dd7f4845fe54a.png";
import img1 from "figma:asset/4d7768993fbc281cd9ff2f1dfd967e40048ea7d5.png";
import img2 from "figma:asset/d746df349f2ec9976b6858246d97561a1c0cdcfd.png";
import img3 from "figma:asset/0e89df2c2ba48b7b6dea07bf4142b0698d412128.png";
import img4 from "figma:asset/8d512bd29fcc07cae4f51a5efa1d3b67f9aaac22.png";

function PinBar() {
  return (
    <div className="absolute contents left-[5px] top-[530px]" data-name="Pin Bar">
      <div className="absolute bg-white h-[31px] left-[5px] rounded-[6px] top-[530px] w-[392px]">
        <div aria-hidden="true" className="absolute border-2 border-[#56346f] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="absolute left-[12px] size-[27px] top-[532px]" data-name="Untitled design (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUntitledDesign11} />
      </div>
      <p className="absolute font-['Kokoro:Regular','Noto_Sans:Regular',sans-serif] h-[17px] leading-[normal] left-[212px] text-[12px] text-black text-center top-[536px] translate-x-[-50%] w-[358px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        CIIT COLLEGE OF ARTS AND TECHNOLOGY - Interweave BLDG.
      </p>
    </div>
  );
}

function PayFare() {
  return (
    <div className="absolute contents left-[59px] top-[126px]" data-name="Pay Fare">
      <div className="absolute left-[125px] pointer-events-none rounded-[50px] size-[164px] top-[126px]" data-name="PAY WITH QR">
        <div aria-hidden="true" className="absolute inset-0 rounded-[50px]">
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[50px] size-full" src={imgPayWithQr} />
          <div className="absolute bg-[#56346f] inset-0 mix-blend-screen rounded-[50px]" />
        </div>
        <div aria-hidden="true" className="absolute border-[#56346f] border-[5px] border-solid inset-0 rounded-[50px]" />
      </div>
      <p className="absolute font-['Konkhmer_Sleokchher:Regular',sans-serif] h-[56px] leading-[normal] left-[207.5px] not-italic text-[#56346f] text-[30px] text-center top-[286px] translate-x-[-50%] w-[297px]">PAY FARE</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#785b8d] h-[85px] left-0 top-0 w-[402px]" data-name="HEADER" />
      <p className="absolute font-['KoHo:SemiBold',sans-serif] inset-[1.29%_20.4%_91.31%_20.9%] leading-[normal] not-italic text-[48px] text-center text-white">TODAPAY</p>
      <div className="absolute left-[14px] size-[63px] top-[11px]" data-name="Profile">
        <img alt="" className="block max-w-none size-full" height="63" src={imgProfile} width="63" />
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="h-[852px] overflow-clip relative shrink-0 w-[402px]" data-name="MAIN">
      <div className="absolute box-border content-stretch flex flex-col h-[852px] items-center left-0 rounded-tl-[38px] rounded-tr-[38px] shadow-[0px_15px_75px_0px_rgba(0,0,0,0.18)] top-0 w-[402px]" data-name="MAIN SCREEN" />
      <div className="absolute bg-[#56346f] h-[330px] left-0 shadow-[0px_-5px_4px_0px_rgba(0,0,0,0.25)] top-[522px] w-[402px]" data-name="Footer" />
      <PinBar />
      <div className="absolute h-[43px] left-[70px] top-[706px] w-[262px]" data-name="PRIVATE BOOK">
        <div className="absolute bg-white bottom-0 left-[4.46%] right-0 rounded-[14px] top-0" data-name="BTN_Container">
          <div aria-hidden="true" className="absolute border-2 border-[#56346f] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute aspect-[225/225] left-0 pointer-events-none right-[83.44%] rounded-[38px] top-0" data-name="BTN_">
          <div aria-hidden="true" className="absolute inset-0 rounded-[38px]">
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[38px] size-full" src={img} />
            <div className="absolute bg-[#500089] inset-0 mix-blend-screen rounded-[38px]" />
          </div>
          <div aria-hidden="true" className="absolute border-[#56346f] border-[3px] border-solid inset-0 rounded-[38px]" />
        </div>
        <div className="absolute bottom-0 flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] justify-center leading-[0] left-[18.63%] not-italic right-[3.5%] text-[#56346f] text-[20px] text-center top-[6.98%]">
          <p className="leading-[normal]">BOOK A TRIKE</p>
        </div>
      </div>
      <div className="absolute h-[43px] left-[70px] top-[643px] w-[262px]" data-name="CREDITS_BUTTON">
        <div className="absolute bg-white bottom-0 left-[4.46%] right-0 rounded-[14px] top-0" data-name="BTN_Container">
          <div aria-hidden="true" className="absolute border-2 border-[#56346f] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute aspect-[225/225] left-0 pointer-events-none right-[83.44%] rounded-[38px] top-0" data-name="BTN_">
          <div aria-hidden="true" className="absolute inset-0 rounded-[38px]">
            <img alt="" className="absolute max-w-none object-50%-50% object-contain rounded-[38px] size-full" src={img1} />
            <div className="absolute bg-[#56346f] inset-0 mix-blend-screen rounded-[38px]" />
          </div>
          <div aria-hidden="true" className="absolute border-[#56346f] border-[3px] border-solid inset-0 rounded-[38px]" />
        </div>
        <div className="absolute bottom-0 flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] justify-center leading-[0] left-[18.63%] not-italic right-[3.5%] text-[#56346f] text-[20px] text-center top-[6.98%]">
          <p className="leading-[normal]">LOAD CREDITS</p>
        </div>
      </div>
      <div className="absolute h-[43px] left-[70px] top-[580px] w-[262px]" data-name="TERMINAL">
        <div className="absolute bg-white bottom-0 left-[4.46%] right-0 rounded-[14px] top-0" data-name="BTN_Container">
          <div aria-hidden="true" className="absolute border-2 border-[#56346f] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute aspect-[225/225] left-0 pointer-events-none right-[83.44%] rounded-[38px] top-0" data-name="BTN_">
          <div aria-hidden="true" className="absolute inset-0 rounded-[38px]">
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[38px] size-full" src={img2} />
            <div className="absolute bg-[#56346f] inset-0 mix-blend-screen rounded-[38px]" />
          </div>
          <div aria-hidden="true" className="absolute border-[#56346f] border-[3px] border-solid inset-0 rounded-[38px]" />
        </div>
        <div className="absolute bottom-0 flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] justify-center leading-[0] left-[18.63%] not-italic right-[3.5%] text-[#56346f] text-[19px] text-center text-nowrap top-[6.98%]">
          <p className="leading-[normal] whitespace-pre">TERMINAL LOCATOR</p>
        </div>
      </div>
      <div className="absolute h-[43px] left-[70px] top-[769px] w-[262px]" data-name="HISTORY_BUTTON">
        <div className="absolute bg-white bottom-0 left-[4.46%] right-0 rounded-[14px] top-0" data-name="BTN_Container">
          <div aria-hidden="true" className="absolute border-2 border-[#56346f] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
        </div>
        <div className="absolute aspect-[225/225] left-0 pointer-events-none right-[83.44%] rounded-[38px] top-0" data-name="BTN_">
          <div aria-hidden="true" className="absolute inset-0 rounded-[38px]">
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[38px] size-full" src={img3} />
            <div className="absolute bg-[#500089] inset-0 mix-blend-screen rounded-[38px]" />
          </div>
          <div aria-hidden="true" className="absolute border-[#56346f] border-[3px] border-solid inset-0 rounded-[38px]" />
        </div>
        <div className="absolute bottom-0 flex flex-col font-['Konkhmer_Sleokchher:Regular',sans-serif] justify-center leading-[0] left-[18.63%] not-italic right-[3.5%] text-[#56346f] text-[22px] text-center text-nowrap top-[6.98%]">
          <p className="leading-[normal] whitespace-pre">BOOKING HISTORY</p>
        </div>
      </div>
      <div className="absolute h-[144px] left-0 top-[378px] w-[402px]" data-name="MAP_MODAL">
        <div className="absolute h-[144px] left-0 top-0 w-[402px]" data-name="MAP_MODAL">
          <div className="absolute inset-0 opacity-[0.36] overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[245.83%] left-[-0.05%] max-w-none top-[-72.92%] w-[100.09%]" src={img4} />
          </div>
        </div>
      </div>
      <PayFare />
      <Group />
    </div>
  );
}

export default function MainScreen() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="MAIN SCREEN">
      <Main />
    </div>
  );
}
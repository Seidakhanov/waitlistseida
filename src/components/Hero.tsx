export const Hero = () => {
  return (
    <div className="lg:pt-[51px] md:pt-10 pt-[31px] lg:pb-44 md:pb-42 pb-[91px]">
      <div className="1360:max-w-[1320px] 1360:px-0 px-2.5 mx-auto relative">
        <a className="lg:block hidden" href="#!">
          <img src="./logo.svg" alt="" />
        </a>
        <div className="lg:flex md:mt-[75px]">
          <div className="max-w-[684px] relative z-20">
            <div className="flex md:gap-3 gap-2 md:mb-[34px] mb-4 md:justify-start justify-center">
              <div className="md:w-36 w-32 border border-[#d2d2d2] rounded-[9.6px] md:h-10 h-9 flex items-center justify-center gap-[7px]">
                <img src="./student.svg" alt="" />
                <span className="md:text-base text-[15px] leading-[100%]">
                  Практикум
                </span>
              </div>
              <div className="md:w-[115px] w-[103px] border border-[#d2d2d2] rounded-[9.6px] md:h-10 h-9 flex items-center justify-center gap-[7px]">
                <img src="./online.svg" alt="" />
                <span className="md:text-base text-[15px] leading-[100%]">
                  Онлайн
                </span>
              </div>
            </div>
            <h1 className="md:text-[54px] text-[28.03px] md:text-left text-center sm:w-auto w-[353px] sm:mx-0 mx-auto leading-[105%] font-semibold md:mb-[7px] mb-4">
              <span className="text-[#0AB965]">6-недельный</span> практикум по
              бизнес-финансам <br /> для предпринимателей
            </h1>
            <div className="border-[3px] md:w-fit w-[233px] md:mx-0 mx-auto mt-[13px] border-[#D9D9D9] md:rounded-[19px] sm:justify-start justify-between rounded-[10px] flex items-center md:gap-5 md:h-[81px] h-12 md:pl-6 pl-3.5 gap-2 md:pr-[33px] pr-[23px]">
              <img className="md:w-auto w-6" src="./math.svg" alt="" />
              <div className="w-[3px] md:h-9 h-5 bg-[#D9D9D9] rounded-[19px]"></div>
              <span className="md:text-[48px] text-[28px] text-[#0AB965] leading-[100%] font-semibold">
                17 модулей
              </span>
            </div>
            <div className="relative w-fit md:block hidden">
              <a
                className="bg-red-gradient
                shadow-[inset_0px_6px_12px_#ffffff73,_inset_0px_-7.2px_19.2px_#ffffff8c]
                flex items-center justify-center w-[440px] h-[120px] rounded-[18px] mt-[36px] border-b-[3px]
                text-white text-[34px] font-bold border-[#A30000] tracking-[4px]"
                href="#!"
              >
                ПЕРЕЙТИ В YOUTUBE
              </a>
              <div className="w-[290px] h-[45px] bg-btn-bg items-center z-10 absolute -bottom-5 bg-size-[100%_100%] justify-center flex gap- shadow-[0px_0px_7.8px_0px_#00000026] rounded-xl left-1/2 -translate-x-1/2">
                <span className="text-base leading-[15px] font-medium">
                  И ПОЛУЧИТЬ СКИДКУ <br />
                  НА 24 часа ЗА НОМЕР
                </span>
                <img src="./gift.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="lg:absolute md:relative lg:top-[50px] lg:-right-[30px] z-10">
            <img
              className="lg:mx-0 mx-auto md:h-[713px] md:min-w-auto min-w-[480px] -mt-[50px] relative md:left-0 md:translate-0 left-1/2 -translate-x-1/2"
              src="./hero-img.png"
              alt=""
            />
            <div className="absolute md:bottom-[76px] bottom-[105px] left-1/2 md:w-[454px] w-[262px] -translate-x-1/2 bg-white border-2 border-[#118F52] rounded-xl md:pt-[26px] pt-3.5 md:pb-9 pb-4 md:px-[33px] px-[19px]">
              <h3 className="md:text-[36px] text-[20px] leading-[117%] text-[#1A1B21] font-bold">
                Султан Сейдаханов
              </h3>
              <ul className="md:mt-3 mt-[7px] md:space-y-[11px] space-y-1.5">
                <li className="md:text-[21px] text-xs leading-[124%] text-[#1A1B21] flex items-start md:gap-2.5 gap-1.5 font-medium">
                  <img
                    className="md:mt-1 md:w-auto w-2.5"
                    src="./check.svg"
                    alt=""
                  />
                  В финансах <span className="text-[#0AB965]">7+ лет</span>
                </li>
                <li className="md:text-[21px] text-xs leading-[124%] text-[#1A1B21] flex items-start md:gap-2.5 gap-1.5 font-medium">
                  <img
                    className="md:mt-1 md:w-auto w-2.5"
                    src="./check.svg"
                    alt=""
                  />
                  <div>
                    Более <span className="text-[#0AB965]">150+ компаний</span>{" "}
                    из США, Казахстан, ОАЭ, РФ
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative w-fit md:hidden block w-full flex justify-center">
              <a
                className="bg-red-gradient
                shadow-[inset_0px_6px_12px_#ffffff73,_inset_0px_-7.2px_19.2px_#ffffff8c]
                flex items-center justify-center max-w-[370px] w-full h-24 rounded-[18px] border-b-[3px]
                text-white text-[28px] font-bold border-[#A30000] tracking-[4px] mt-[-33px]"
                href="#!"
              >
                <span className="leading-[30px] mt-[-9px] tracking-[3px]">
                  ПЕРЕЙТИ В <br /> <span className="ml-3.5">YOUTUBE</span>
                </span>
              </a>
              <div className="w-[225px] bg-white border-t border-[#00A355] h-[35px] bg-btn-bg items-center z-10 absolute -bottom-[15px] ml-[-7px] bg-size-[100%_100%] justify-center flex gap- shadow-[0px_0px_7.8px_0px_#00000026] rounded-lg left-1/2 -translate-x-1/2">
                <span className="text-[15px] leading-[15px] font-medium ml-[7px] text-center">
                  И ПОЛУЧИТЬ СКИДКУ <br />
                  НА 24 часа ЗА НОМЕР
                </span>
                <img
                  className="w-[30px] translate-x-7"
                  src="./gift.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

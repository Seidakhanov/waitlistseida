import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ru from "react-phone-number-input/locale/ru.json";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Имя должно содержать минимум 2 символа" }).max(100),
  phone: z.string().min(1, { message: "Введите номер телефона" }).refine(
    (value) => isValidPhoneNumber(value),
    { message: "Введите корректный номер телефона" }
  ),
});

type FormData = z.infer<typeof formSchema>;

const YOUTUBE_URL = "https://www.youtube.com/watch?v=GxyG60PwJ_k";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [countryCode, setCountryCode] = useState<string>("RU");

  useEffect(() => {
    const detectCountry = async () => {
      try {
        const response = await fetch("https://get.geojs.io/v1/ip/country.json");
        const data = await response.json();
        if (data.country) {
          setCountryCode(data.country);
        }
      } catch (error) {
        console.log("Could not detect country, using default RU");
      }
    };
    
    detectCountry();
  }, []);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const openYouTubeVideo = () => {
    const videoId = "GxyG60PwJ_k";
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Попробовать открыть в приложении YouTube
      const youtubeAppUrl = `youtube://watch?v=${videoId}`;
      const youtubeWebUrl = YOUTUBE_URL;
      
      // Создаем скрытую ссылку для открытия приложения
      const appLink = document.createElement('a');
      appLink.href = youtubeAppUrl;
      appLink.style.display = 'none';
      document.body.appendChild(appLink);
      
      // Пробуем открыть приложение
      appLink.click();
      
      // Если приложение не открылось за 1.5 секунды, открываем в браузере
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = youtubeWebUrl;
        }
        document.body.removeChild(appLink);
      }, 1500);
    } else {
      window.location.href = YOUTUBE_URL;
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const { error } = await supabase
        .from('finance_practicum_leads')
        .insert([
          {
            name: data.name,
            phone: data.phone,
          }
        ]);

      if (error) throw error;

      setShowForm(false);
      setShowThanks(true);
      
      setTimeout(() => {
        openYouTubeVideo();
      }, 2000);
    } catch (error) {
      console.error('Error saving lead:', error);
      toast.error('Произошла ошибка. Попробуйте еще раз.');
    }
  };

  const handleWatchClick = () => {
    setShowForm(true);
  };

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
              <button
                onClick={handleWatchClick}
                className="bg-red-gradient
                shadow-[inset_0px_6px_12px_#ffffff73,_inset_0px_-7.2px_19.2px_#ffffff8c]
                flex items-center justify-center w-[440px] h-[120px] rounded-[18px] mt-[36px] border-b-[3px]
                text-white text-[34px] font-bold border-[#A30000] tracking-[4px]"
              >
                ПЕРЕЙТИ В YOUTUBE
              </button>
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
              <button
                onClick={handleWatchClick}
                className="bg-red-gradient
                shadow-[inset_0px_6px_12px_#ffffff73,_inset_0px_-7.2px_19.2px_#ffffff8c]
                flex items-center justify-center max-w-[370px] w-full h-24 rounded-[18px] border-b-[3px]
                text-white text-[28px] font-bold border-[#A30000] tracking-[4px] mt-[-33px]"
              >
                <span className="leading-[30px] mt-[-9px] tracking-[3px]">
                  ПЕРЕЙТИ В <br /> <span className="ml-3.5">YOUTUBE</span>
                </span>
              </button>
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

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-md top-[20%] translate-y-0">
          <DialogHeader>
            <DialogTitle>Последний шаг</DialogTitle>
            <DialogDescription>
              Пожалуйста, оставьте свои контактные данные для продолжения
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Номер телефона</FormLabel>
                      <FormControl>
                        <PhoneInput
                          international
                          defaultCountry={countryCode as any}
                          value={field.value}
                          onChange={field.onChange}
                          labels={ru}
                          countrySelectProps={{ 
                            showSearch: true 
                          }}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&_input]:bg-background [&_input]:text-foreground [&_select]:bg-background [&_select]:text-foreground"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <Button type="submit" variant="youtube" className="w-full">
                Перейти в YouTube
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={showThanks} onOpenChange={() => {}}>
        <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()} hideCloseButton>
          <DialogHeader>
            <DialogTitle>Спасибо!</DialogTitle>
            <DialogDescription>
              Сейчас вы будете перенаправлены на видео...
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

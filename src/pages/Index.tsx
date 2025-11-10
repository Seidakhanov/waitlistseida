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
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Button 
        onClick={handleWatchClick}
        variant="youtube"
        size="lg"
        className="text-2xl h-20 px-16"
      >
        Перейти в YouTube
      </Button>

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
        <DialogContent className="sm:max-w-md" onInteractOutside={(e) => e.preventDefault()} onEscapeKeyDown={(e) => e.preventDefault()}>
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

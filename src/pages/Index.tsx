import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  phone: z.string().trim().min(10, { message: "Введите корректный номер телефона" }).max(20),
});

type FormData = z.infer<typeof formSchema>;

const YOUTUBE_URL = "https://www.youtube.com/watch?v=GxyG60PwJ_k";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });


  const onSubmit = async (data: FormData) => {
    // Открываем окно СРАЗУ, синхронно с действием пользователя
    // iOS Safari разрешает это, потому что это прямой ответ на клик
    const redirectWindow = window.open('about:blank', '_blank');
    
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
      
      // Теперь меняем URL уже открытого окна на YouTube
      // Используем HTTPS ссылку - iOS автоматически откроет приложение через Universal Links
      if (redirectWindow) {
        redirectWindow.location.href = YOUTUBE_URL;
      } else {
        // Если окно заблокировано браузером
        toast.error('Пожалуйста, разрешите всплывающие окна');
      }
    } catch (error) {
      console.error('Error saving lead:', error);
      toast.error('Произошла ошибка. Попробуйте еще раз.');
      // Закрываем окно если произошла ошибка
      if (redirectWindow) {
        redirectWindow.close();
      }
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
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Последний шаг</DialogTitle>
            <DialogDescription>
              Пожалуйста, оставьте свои контактные данные для продолжения
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
                    <FormLabel>Номер телефона</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (999) 123-45-67" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                Продолжить
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Dialog open={showThanks} onOpenChange={setShowThanks}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Спасибо!</DialogTitle>
            <DialogDescription>
              Видео откроется в новой вкладке
            </DialogDescription>
          </DialogHeader>
          <Button 
            onClick={() => window.open(YOUTUBE_URL, '_blank')}
            className="w-full"
          >
            Открыть видео вручную
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

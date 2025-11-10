import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Play, Youtube } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Имя должно содержать минимум 2 символа" }).max(100),
  phone: z.string().trim().min(10, { message: "Введите корректный номер телефона" }).max(20),
  consent: z.boolean().refine((val) => val === true, {
    message: "Необходимо согласие на обработку данных",
  }),
});

type FormData = z.infer<typeof formSchema>;

const YOUTUBE_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      consent: false,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", { name: data.name, phone: data.phone.substring(0, 3) + "***" });
    setShowForm(false);
    setShowThanks(true);
    
    setTimeout(() => {
      window.location.href = YOUTUBE_URL;
    }, 2000);
  };

  const handleWatchClick = () => {
    setShowForm(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-2xl text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="relative">
              <Youtube className="w-24 h-24 text-primary animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Эксклюзивное видео
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Вы на один шаг от просмотра уникального контента
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-2xl space-y-6">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            <Play className="w-20 h-20 text-primary-foreground opacity-90" />
          </div>
          
          <Button 
            onClick={handleWatchClick}
            size="lg"
            className="w-full text-lg h-14 gap-2"
          >
            <Play className="w-6 h-6" />
            Перейти к видео
          </Button>
        </div>

        <div className="flex justify-center gap-4 text-sm text-muted-foreground">
          <button
            onClick={() => setShowPrivacy(true)}
            className="hover:text-foreground transition-colors underline underline-offset-4"
          >
            Политика конфиденциальности
          </button>
        </div>
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Последний шаг</DialogTitle>
            <DialogDescription>
              Пожалуйста, оставьте свои контактные данные для доступа к видео
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
              
              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal">
                        Я согласен на обработку персональных данных
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                Отправить и смотреть видео
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
              Сейчас вы будете перенаправлены на видео...
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-6">
            <Youtube className="w-16 h-16 text-primary animate-bounce" />
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Политика конфиденциальности</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Цель сбора данных</h3>
              <p>
                Мы собираем ваше имя и номер телефона исключительно для предоставления вам доступа 
                к эксклюзивному видеоконтенту и возможной обратной связи.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">Какие данные мы собираем</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Имя и фамилия</li>
                <li>Номер телефона</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">Как мы используем данные</h3>
              <p>
                Ваши данные используются только для внутренних целей и не передаются третьим лицам. 
                Мы обеспечиваем безопасное хранение предоставленной информации.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-2">Ваши права</h3>
              <p>
                Вы имеете право запросить удаление ваших данных в любое время.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

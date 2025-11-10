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

const REDIRECT_URL = "https://linktw.in/VGGNSc";

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
        window.location.href = REDIRECT_URL;
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
        Перейти
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
              Сейчас вы будете перенаправлены на видео...
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;

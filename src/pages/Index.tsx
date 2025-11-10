import { Button } from "@/components/ui/button";

const YOUTUBE_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

const Index = () => {
  const handleWatchClick = () => {
    window.location.href = YOUTUBE_URL;
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
    </div>
  );
};

export default Index;

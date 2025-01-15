import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Image } from "lucide-react";
import StyleSelector from "./style-selector";
import { useState } from "react";

interface UploadFormProps {
  onSubmit: (data: { prompt: string; style: string }) => void;
  isLoading: boolean;
}

export default function UploadForm({ onSubmit, isLoading }: UploadFormProps) {
  const [selectedStyle, setSelectedStyle] = useState("dramatic");

  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });

  const handleSubmit = (data: { prompt: string }) => {
    onSubmit({ ...data, style: selectedStyle });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="prompt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prompt or Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your AMV scene or paste an image URL..."
                  className="h-32 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-6">
          <FormLabel>Visual Style</FormLabel>
          <StyleSelector
            selected={selectedStyle}
            onSelect={setSelectedStyle}
          />
        </div>

        <Button
          type="submit"
          className="w-full mt-6"
          disabled={isLoading}
        >
          <Image className="mr-2 h-4 w-4" />
          {isLoading ? "Generating..." : "Generate AMV"}
        </Button>
      </form>
    </Form>
  );
}
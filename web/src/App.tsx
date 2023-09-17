import {Github, Wand2} from "lucide-react"
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/input-video-form";
import { PromptSelect } from "./components/prompt-select";


export function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold"> Smart Play</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            by Gabriel Mello
          </span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2 "/>
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            
            <Textarea 
              className="resize-none p-4 leading-relaxed bg-secondary/50"              
              placeholder="include the prompt for the AI"
              
            />

            <Textarea 
              className="resize-none p-4 leading-relaxed bg-secondary/50"
              placeholder="Response generated..." 
              readOnly
              
            />

          </div>

          <p className="text-sm text-muted-foreground"> 
            Attention: You can use the variable <code className="text-green-400">{"{transcription}"}</code> in your prompt 
            to add content transcript of the selected video.
          </p>

        </div>

        <aside className="w-80 space-y-6">

          <VideoInputForm />
          
          <Separator/>

          <form className="space-y-6">

            <div
                className="space-y-2"              >
                <Label>Prompt</Label>

                <PromptSelect />

                <span className="block text-xs text-muted-foreground italic">More options will be available soon</span>

            </div>


            <div
              className="space-y-2"
            >
              <Label>Model</Label>

              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="gpt3.5">
                    GPT 3.5 turbo 16k
                  </SelectItem>
                </SelectContent>
              </Select>

              <span className="block text-xs text-muted-foreground italic">More options will be available soon</span>

            </div>

            <Separator/>
            
            <div
              className="space-y-4"
            >
              <Label>Temperature</Label>
              <Slider
                min = {0}
                max={1}
                step={0.1}
              />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
              The higher the temperature, the more creative the outcome will be, but the margin of error will also be greater.
              </span>

            </div>

            <Separator/>

            <Button type="submit" className="w-full text-secondary-foreground">
              To execute
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>

          </form>

        </aside>

      </main>

    </div>
  )
}


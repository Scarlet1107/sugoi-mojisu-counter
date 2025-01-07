import Header from "@/components/Header";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TextProvider } from "@/context/TextContext";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-hidden">
        <TextProvider>
          <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={50} minSize={35}>
              <LeftPanel />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={35}>
              <RightPanel />
            </ResizablePanel>
          </ResizablePanelGroup>
        </TextProvider>
      </div>
    </main>
  );
}

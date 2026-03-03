import * as React from "react";
import { Drawer } from "vaul";
import { cn } from "../../../lib/utils";

const BottomSheet = ({
  trigger,
  title,
  children,
  open,
  onOpenChange,
}: {
  trigger?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) => {
  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
        <Drawer.Content className="bg-slate-900 border-t border-slate-800 flex flex-col rounded-t-[32px] mt-24 fixed bottom-0 left-0 right-0 max-h-[96%] outline-none z-50">
          <div className="p-4 bg-slate-900 rounded-t-[32px] flex-1">
            <div className="mx-auto w-16 h-1.5 flex-shrink-0 rounded-full bg-slate-700 mb-8 mt-2" />
            <div className="max-w-md mx-auto">
              {title && (
                <Drawer.Title className="font-semibold text-2xl text-slate-100 mb-6 px-2">
                  {title}
                </Drawer.Title>
              )}
              <div className="px-2 pb-10 text-slate-300 text-lg leading-relaxed">
                {children}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export { BottomSheet };

import { Typography } from "@/app/components/ui/Typography";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { ChevronRight, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { BottomSheet } from "@/app/components/ui/BottomSheet";

export function PrayersPage() {
  const [selectedPrayer, setSelectedPrayer] = useState<string | null>(null);

  const prayers = [
    { name: "Fajr", time: "05:12", status: "Done", icon: Moon, description: "Dawn prayer, 2 Rakat Sunnah, 2 Rakat Fard" },
    { name: "Dhuhr", time: "12:30", status: "Upcoming", icon: Sun, description: "Noon prayer, 4 Rakat Sunnah, 4 Rakat Fard, 2 Rakat Sunnah" },
    { name: "Asr", time: "15:42", status: "Upcoming", icon: Sun, description: "Afternoon prayer, 4 Rakat Sunnah, 4 Rakat Fard" },
    { name: "Maghrib", time: "18:15", status: "Later", icon: Moon, description: "Sunset prayer, 3 Rakat Fard, 2 Rakat Sunnah" },
    { name: "Isha", time: "19:45", status: "Later", icon: Moon, description: "Night prayer, 4 Rakat Fard, 2 Rakat Sunnah, 3 Witr" },
  ];

  return (
    <div className="space-y-6 pb-24">
      <header className="pt-4 px-2">
        <Typography as="h1" className="text-3xl font-bold text-white mb-2">
          Prayer Times
        </Typography>
        <Typography as="p" className="text-slate-400 text-lg">
          Today, 12 Rajab 1447
        </Typography>
      </header>

      <div className="space-y-3">
        {prayers.map((prayer) => (
          <div key={prayer.name} onClick={() => setSelectedPrayer(prayer.name)}>
            <Card
              variant="outlined"
              className={`flex items-center justify-between p-5 border-slate-800 bg-slate-900/50 hover:bg-slate-800 transition-all cursor-pointer group ${prayer.status === 'Upcoming' ? 'border-emerald-500/50 shadow-lg shadow-emerald-900/10' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-2xl ${prayer.status === 'Upcoming' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}>
                  <prayer.icon className="w-6 h-6" />
                </div>
                <div>
                  <Typography as="h3" className={`text-xl font-semibold ${prayer.status === 'Upcoming' ? 'text-white' : 'text-slate-200'}`}>
                    {prayer.name}
                  </Typography>
                  <Typography as="p" className="text-slate-400 font-medium">
                    {prayer.time}
                  </Typography>
                </div>
              </div>
              
              <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-emerald-500 transition-colors" />
            </Card>
          </div>
        ))}
      </div>

      <BottomSheet
        isOpen={!!selectedPrayer}
        onOpenChange={(open) => !open && setSelectedPrayer(null)}
        title={selectedPrayer || ""}
      >
        <div className="space-y-6 pb-8">
          <Typography as="p" className="text-slate-300 text-lg leading-relaxed text-center px-4">
            {prayers.find(p => p.name === selectedPrayer)?.description}
          </Typography>
          
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Button variant="secondary" onClick={() => setSelectedPrayer(null)}>
              Close
            </Button>
            <Button variant="primary">
              Learn
            </Button>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}
